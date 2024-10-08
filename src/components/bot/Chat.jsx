import { useContext, useState } from "react";

// contexts
import { FontContext } from "../../contexts/FontContext";

// components
import ChatUI from "./ui/ChatUI";
import DepartmentBtn from "./buttons/DepartmentBtn";

// icons
import { BsArrowDownCircleFill } from "react-icons/bs";
import { ChatbotContext } from "../../contexts/ChatbotContext";
import ItemsRenderer from "../common/ItemsRenderer";

const step = 4;

const Chat = ({ role, message, depts, timeSent, link }) => {
  const { chatbot } = useContext(ChatbotContext);
  const [configuration] = chatbot.configuration;
  const { font } = useContext(FontContext);
  const [fontSize] = font.size;
  const [numberOfDeptsToShow, setNumberOfDeptsToShow] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastDept = currentPage * numberOfDeptsToShow;
  const indexOfFirstDept = indexOfLastDept - numberOfDeptsToShow;
  const currentDeptsToShow = depts?.slice(indexOfFirstDept, indexOfLastDept);

  const loadMore = () => {
    setNumberOfDeptsToShow(numberOfDeptsToShow + step);
  };

  const renderDeptsContent = () => {
    if (depts)
      return (
        <ItemsRenderer
          items={currentDeptsToShow}
          renderItems={(dept, id) => (
            <DepartmentBtn
              key={id}
              deptName={dept.deptName}
              service={dept.service}
              steps={dept.steps}
              requirements={dept.requirements}
            />
          )}
        />
      );
  };

  const renderChat = () => {
    if (role === "bot") {
      return (
        <ChatUI
          messageBy={role}
          img={configuration.icon}
          timeSent={timeSent}
          fontSize={fontSize}
        >
          {message}
          {renderDeptsContent()}
          {depts && (
            <button
              onClick={() => loadMore()}
              className={`w-full absolute -bottom-1 bg-gradient-to-t from-surface dark:from-dm-surface from-15% h-[100px] z-30 backdrop-blur-xs  ${
                depts?.length <= numberOfDeptsToShow ? "hidden" : "block"
              } hover:backdrop-blur-0 [&>p]:hover:opacity-15`}
            >
              <p className="flex flex-col items-center justify-center gap-1 font-semibold text-primary dark:text-secondary drop-shadow-lg animate-bounce text-base">
                Click here to show more
                <BsArrowDownCircleFill />
              </p>
            </button>
          )}
          {link ? (
            <div className="" dangerouslySetInnerHTML={{ __html: link }} />
          ) : null}
        </ChatUI>
      );
    } else if (role === "user") {
      return (
        <ChatUI messageBy={role} timeSent={timeSent} fontSize={fontSize}>
          {message}
        </ChatUI>
      );
    }
  };

  return <>{renderChat()}</>;
};

export default Chat;
