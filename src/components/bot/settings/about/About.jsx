import { useContext } from "react";

// context
import { ChatbotContext } from "../../../../contexts/ChatbotContext";

// components
import MiniProfile from "../../sections/MiniProfile";
import SettingsMiniTitle from "../SettingsMiniTitle";
import SettingsTitle from "../SettingsTitle";

const About = ({ settings }) => {
  const { chatbot } = useContext(ChatbotContext);
  const [configuration] = chatbot.configuration;

  return (
    <section className="flex flex-col gap-8">
      <SettingsTitle text="about" />
      <div className="flex flex-col gap-y-10 gap-x-6">
        <div>
          <SettingsMiniTitle text={configuration.name} />
          <MiniProfile state={settings} />
        </div>
      </div>
    </section>
  );
};

export default About;
