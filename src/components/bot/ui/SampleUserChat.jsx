const SampleUserChat = ({ style, message }) => {
  return (
    <div style={style} className="user message">
      <div className="w-full flex justify-end mt-3 mb-2">
        <div className="max-w-[80%] rounded-3xl shadow bg-primary text-white px-4 py-3 space-y-2 break-words">
          <p id="message">{message}</p>
          <div
            id="timeSent"
            className="w-full text-gray-300 text-xs text-right opacity-80"
          >
            {new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleUserChat;
