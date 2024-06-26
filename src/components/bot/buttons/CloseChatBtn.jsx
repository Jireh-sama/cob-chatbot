import { IoClose } from "react-icons/io5";

const CloseChatBtn = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="rounded-full p-4 hover:bg-error [&>svg>path]:hover:text-white"
    >
      <IoClose className="dark:text-white" />
    </button>
  );
};

export default CloseChatBtn;
