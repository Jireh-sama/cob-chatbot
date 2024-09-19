import { useRef, useContext } from "react";

import ChatHead from "../components/bot/ChatHead";
import ChatBox from "../components/bot/ChatBox";
import ScreenDim from "../components/bot/ui/ScreenDim";

// components
import CityHallUI from "../components/pages/city-hall/CityHallUI";

// contexts
import { AuthContext } from "../contexts/AuthContext";
import SoundProvider from "../contexts/SoundProvider";
import ChatbotProvider from "../providers/ChatbotProvider";
import { ChatContext } from "../contexts/ChatContext";

// providers
import FontProvider from "../providers/FontProvider";

const Home = () => {
  const { auth } = useContext(AuthContext);
  const [isSignedIn] = auth.user;
  const { chat } = useContext(ChatContext);
  const [isChatActive, setIsChatActive] = chat.active;
  const chatHead = chat.icon;

  const toggleChat = () => {
    setIsChatActive(!isChatActive);
  };

  return (
    <>
      <main className="">
        <div ref={chatHead}>
          <ChatbotProvider>
            <FontProvider>
              <SoundProvider>
                <ChatHead onClick={() => toggleChat()} />
                {isSignedIn && <ChatBox closeUsing={toggleChat} />}
              </SoundProvider>
            </FontProvider>
          </ChatbotProvider>
        </div>
        <CityHallUI />
        <ScreenDim
          message="Click anywhere to close."
          className={`bg-black z-50 backdrop-blur ${
            isChatActive ? "opacity-80" : "opacity-0 invisible"
          }`}
        />
      </main>
    </>
  );
};

export default Home;
