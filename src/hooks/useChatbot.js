import { useState, useEffect, useRef, useContext, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { verifiedUID } from "../utils/uid";

// contexts
import { ChatbotContext } from "../contexts/ChatbotContext";
import { AuthContext } from "../contexts/AuthContext";

// library
import { depts, deptsAnswer } from "../lib/depts";

// db
import {
  collection,
  getDocs,
  Timestamp,
  query,
  orderBy,
  doc,
  setDoc,
  arrayUnion,
  getDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/config";

// hooks
import { useDebounce } from "./useDebounce";
import useSound from "./useSound";

// utils
import { sleep } from "../utils/sleep";
import { hasSymbol, splitMessage } from "../utils/splitMessage";
import { smoothScrollInto } from "../utils/scrollInto";
import { greet } from "../utils/greet";

const uid = verifiedUID();

// firebase queries and references
const usersCollectionRef = collection(db, "users");
const faqsCollectionRef = collection(db, "FAQs");
const faqsQuery = query(faqsCollectionRef, orderBy("frequency", "desc"));

const useChatbot = () => {
  const { auth } = useContext(AuthContext);
  const [isSignedIn] = auth.user;
  const { chatbot } = useContext(ChatbotContext);
  const [configuration] = chatbot.configuration;
  const [conversation, setConversation] = chatbot.conversation;
  const [faqs, setFaqs] = chatbot.faqs;
  const [error, setError] = chatbot.error;
  const [isOnline] = chatbot.online;
  const { playMessageNotification } = useSound();
  const latestChat = useRef();
  const [isAtLatestChat, setIsAtLatestChat] = useState(false);
  const faqsRef = useRef();
  const [settings, setSettings] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isFaqsMenuActive, setIsFaqsMenuActive] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [botIsTyping, setBotIsTyping] = useState(false);

  const toggleSettings = () => {
    setSettings(!settings);
    smoothScrollInto(latestChat);
  };

  const getConversationHistory = useCallback(async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      onSnapshot(doc(usersCollectionRef, uid), (doc) => {
        if (doc.exists()) setConversation(doc.data().conversation);
        // data in configuration will take time and we have to check if its there
        // this will prevent greet to get undefined 2nd argument that will cause error
        else if (!doc.exists() && configuration.initialGreet)
          greet(uid, configuration.initialGreet);
      });
      if (data) setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      if (!error) setError(false);
    }
  }, [configuration.initialGreet, setConversation, setError]);

  const getFaqs = useCallback(async () => {
    try {
      const data = await getDocs(faqsQuery);
      setFaqs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
      if (!error) setError(false);
    }
  }, [setError, setFaqs]);

  const getReplyFromBot = async (message) => {
    try {
      setBotIsTyping(true);
      let deptMessage = message.toLowerCase();
      // Temporary statements just to display departments
      if (
        deptMessage === "departments" ||
        deptMessage === "department" ||
        deptMessage === "can you give me the list of departments?" ||
        deptMessage === "can you give me the list of departments" ||
        deptMessage === "can you give me the departments?" ||
        deptMessage === "can you give me the departments" ||
        deptMessage === "can you give me list of departments?" ||
        deptMessage === "can you give me list of departments" ||
        deptMessage === "departments list?" ||
        deptMessage === "departments list" ||
        deptMessage === "department list?" ||
        deptMessage === "department list" ||
        deptMessage === "list of departments" ||
        deptMessage === "list of department" ||
        deptMessage === "give me the list of deparments"
      ) {
        await sleep(1);
        setBotIsTyping(false);
        const docUserId = doc(usersCollectionRef, uid);
        const verifiedDocUserId = await getDoc(docUserId);
        if (!verifiedDocUserId.exists()) {
          // creates a user with verified uid in users collection
          // then add this bot message to conversation array
          await setDoc(doc(usersCollectionRef, uid), {
            conversation: [
              {
                messageId: uuid(),
                message: deptsAnswer,
                role: "bot",
                depts: depts,
                timeSent: Timestamp.now(),
              },
            ],
          });
        }
        await updateDoc(doc(usersCollectionRef, uid), {
          conversation: arrayUnion({
            message: deptsAnswer,
            messageId: uuid(),
            role: "bot",
            depts: depts,
            timeSent: Timestamp.now(),
          }),
        });
        playMessageNotification();
        // THE ABOVE CODE BLOCKS ARE FOR HANDLING STATIC DEPARTMENT RESPONSES ONLY
        //
        //
        // STARTING HERE FROM "ELSE" HANDLES THE DYNAMIC RESPONSES FROM BOT
      } else {
        await sleep(1);
        const response = await fetch(configuration.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: import.meta.env.VITE_CHATBOT_API_KEY,
          },
          body: JSON.stringify({
            userQuery: message,
          }),
        });

        if (response.ok) setError(false);
        else setError(true);

        // data holds the answer and intent recognized
        const data = await response.json();
        // assign those to a variables
        // will improve this later
        const intentRecognizedByBot = data.response.intent;
        const botAnswer = data.response.answer;
        let botMessageInfo = {};
        if (intentRecognizedByBot == "None") {
          botMessageInfo = {
            intent: intentRecognizedByBot,
            message: configuration.errorMessage,
            messageId: uuid(),
            role: "bot",
            timeSent: Timestamp.now(),
          };
        } else
          botMessageInfo = {
            intent: intentRecognizedByBot,
            message: botAnswer,
            messageId: uuid(),
            role: "bot",
            timeSent: Timestamp.now(),
          };
        if (hasSymbol(botAnswer)) {
          const botHasMultipleMessage = splitMessage(botAnswer);
          botHasMultipleMessage.forEach(async (response, i) => {
            if (i == 1) {
              await sleep(1);
              setBotIsTyping(true);
              await sleep(1);
            }
            const botSplitMessageInfo = {
              intent: intentRecognizedByBot,
              message: response,
              messageId: uuid(),
              role: "bot",
              timeSent: Timestamp.now(),
            };
            setBotIsTyping(false);
            const docUserId = doc(usersCollectionRef, uid);
            const verifiedDocUserId = await getDoc(docUserId);
            if (!verifiedDocUserId.exists()) {
              // creates a user with verified uid in users collection
              // then add this bot message to conversation array
              await setDoc(doc(usersCollectionRef, uid), {
                conversation: [botSplitMessageInfo],
              });
            }
            await updateDoc(doc(usersCollectionRef, uid), {
              conversation: arrayUnion(botSplitMessageInfo),
            });
            setIsFaqsMenuActive(false);
            playMessageNotification();
          });
          return;
        }
        setBotIsTyping(false);
        const docUserId = doc(usersCollectionRef, uid);
        const verifiedDocUserId = await getDoc(docUserId);
        if (!verifiedDocUserId.exists()) {
          // creates a user with verified uid in users collection
          // then add this bot message to conversation array
          await setDoc(doc(usersCollectionRef, uid), {
            conversation: [botMessageInfo],
          });
        }
        await updateDoc(doc(usersCollectionRef, uid), {
          conversation: arrayUnion(botMessageInfo),
        });
        setIsFaqsMenuActive(false);
        playMessageNotification();
      }
    } catch (error) {
      console.log(error);
      setBotIsTyping(false);
      setError(true);
      if (!error) setError(false);
    }
  };

  // useDebounce(function to call, seconds to wait before you can call it again)
  // basically a cooldown
  const debouncedMessageToBot = useDebounce(getReplyFromBot, 1.5);

  const sendMessageToBot = useCallback(
    async (event, message) => {
      const messageInfo = {
        message: message,
        messageId: uuid(),
        role: "user",
        timeSent: Timestamp.now(),
      };
      try {
        event.preventDefault();
        setUserMessage("");
        const res = doc(usersCollectionRef, uid);
        const data = await getDoc(res);
        playMessageNotification();
        if (!data.exists()) {
          // creates a user with verified uid in users collection
          // then adds a conversation field that will hold all of the user & bot messages
          await setDoc(doc(usersCollectionRef, uid), {
            conversation: [messageInfo],
          });
        }
        await updateDoc(doc(usersCollectionRef, uid), {
          conversation: arrayUnion(messageInfo),
        });
        debouncedMessageToBot(message);
      } catch (error) {
        console.log(error);
        setBotIsTyping(false);
        setError(true);
        if (!error) setError(false);
      }
    },
    [debouncedMessageToBot, playMessageNotification, setError],
  );

  const sendFaqToBot = async (message) => {
    const messageInfo = {
      message: message,
      messageId: uuid(),
      role: "user",
      timeSent: Timestamp.now(),
    };
    try {
      setIsFaqsMenuActive(false);
      const res = doc(usersCollectionRef, uid);
      const data = await getDoc(res);
      playMessageNotification();
      if (!data.exists()) {
        // creates a user with verified uid in users collection
        // then adds a conversation field that will hold all of the user & bot messages
        await setDoc(doc(usersCollectionRef, uid), {
          conversation: [messageInfo],
        });
      }
      await updateDoc(doc(usersCollectionRef, uid), {
        conversation: arrayUnion(messageInfo),
      });
      debouncedMessageToBot(message);
    } catch (error) {
      console.log(error);
      setBotIsTyping(false);
      setError(true);
      if (!error) setError(false);
    }
  };

  // for auto scrolling
  useEffect(() => {
    const atLatestChat = smoothScrollInto(latestChat);
    if (isSignedIn && atLatestChat) setIsAtLatestChat(true);
  }, [conversation, botIsTyping, error, isOnline, isSignedIn]);

  // for sending messages when clicking enter
  useEffect(() => {
    const handleSendMessageInEnter = (event) => {
      const trimmedMessage = userMessage.trim();
      // message should be sent if its enter key without shift and not empty
      if (event.keyCode == 13 && !event.shiftKey && !trimmedMessage == "") {
        sendMessageToBot(event, trimmedMessage);
      } else if (event.keyCode == 13 && !event.shiftKey) {
        // this will just clear the spaces if you try to send empty messages using shift + enter
        event.preventDefault();
        setUserMessage("");
      }
    };
    document.addEventListener("keydown", handleSendMessageInEnter);
    return () => {
      document.removeEventListener("keydown", handleSendMessageInEnter);
    };
  }, [sendMessageToBot, userMessage]);

  // for handling faqs menu on mouse down
  useEffect(() => {
    const handleFaqsMenu = (event) => {
      if (!faqsRef.current?.contains(event.target)) setIsFaqsMenuActive(false);
    };
    document.addEventListener("mousedown", handleFaqsMenu);
    return () => {
      document.removeEventListener("mousedown", handleFaqsMenu);
    };
  }, [faqsRef, isFaqsMenuActive]);

  // for rendering messages and faqs
  // with the help of useCallback, we can decrease the call of this useEffect
  // even if the invoked functions inside is in the dependencies
  useEffect(() => {
    console.log("Getting conversation and faqs...");
    getConversationHistory();
    getFaqs();
  }, [getConversationHistory, getFaqs]);

  return {
    isAtLatestChat,
    latestChat,
    faqsRef,
    settings,
    setSettings,
    loading,
    setLoading,
    isFaqsMenuActive,
    setIsFaqsMenuActive,
    userMessage,
    setUserMessage,
    botIsTyping,
    setBotIsTyping,
    toggleSettings,
    conversation,
    faqs,
    getFaqs,
    sendMessageToBot,
    sendFaqToBot,
  };
};

export default useChatbot;
