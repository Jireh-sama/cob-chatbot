import { useContext } from "react";
import { chatHeadSizeList } from "../../../../../lib/settings/chatHeadSizeList";

// context
import { ChatContext } from "../../../../../contexts/ChatContext";

// components
import RadioButton from "../../../buttons/RadioButton";
import Grid from "../../../common/Grid";
import SettingSwitch from "../../../sections/SettingSwitch";
import SettingsMiniTitle from "../../SettingsMiniTitle";
import ChatHeadPreview from "../../../ui/ChatHeadPreview";
import ItemsRenderer from "../../../../common/ItemsRenderer";

const ChatHeadSwitch = () => {
  const { chat } = useContext(ChatContext);
  const [chatHeadSize, setChatHeadSize] = chat.chatHeadSize;

  const handleChange = (event) => {
    setChatHeadSize(event.target.value);
  };

  return (
    <SettingSwitch>
      <SettingsMiniTitle text="chat head size" />
      <Grid>
        <ItemsRenderer
          items={chatHeadSizeList}
          renderItems={(size) => (
            <RadioButton
              key={size.value}
              name="chat-head-size"
              id={size.value}
              value={size.value}
              checkedIf={chatHeadSize == size.value}
              onChange={handleChange}
              onClick={() => chat.changeChatHeadSize(size.value)}
              displayedText={size.name}
            />
          )}
        />
      </Grid>
      <div className="flex flex-col items-center md:items-start 2xl:items-center mt-8">
        <ChatHeadPreview />
      </div>
    </SettingSwitch>
  );
};

export default ChatHeadSwitch;
