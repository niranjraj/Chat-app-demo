import React, { FormEvent, useState } from "react";
import Button from "./Button";
import Messages from "./Messages";
import PaperClip from "../public/paperclip.svg";
import PaperPlane from "../public/paperplane.svg";
import messages from "../data/messages";
import EmojiIcon from "../public/smiley.svg";
import styles from "../styles/components/main.module.css";

interface msg {
  id: string;
  content: string;
  user: string;
}

const Chat: React.FC = () => {
  const [newmessages, setMessages] = useState<msg[]>(messages);
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendermsg = {
      id: Date.now().toString(),
      content: text,
      user: "james",
    };
    setMessages((prev): msg[] => {
      return [...prev, sendermsg];
    });
    console.log(newmessages);
  };
  return (
    <div className=" flex-chat flex flex-col ">
      <header className="h-header min-h-header">content</header>
      <div className={styles.chat}>
        <div className="overflow-y-auto ">
          <Messages newmessages={newmessages} />
        </div>

        <footer className="h-chatf p-3  bg-purple-300 rounded-b-2xl w-full flex justify-evenly items-center  ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className=" rounded-full h-11   flex items-center w-4/5 min-w-side space-x-6   p-4 bg-primarybg"
          >
            <Button
              icon={EmojiIcon}
              alt="emoji"
              style="flex"
              height="24px"
              width="24px"
            />
            <input
              type="text"
              placeholder="Type a message"
              className="bg-transparent w-full outline-none "
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button
              icon={PaperClip}
              alt="attach"
              style="flex"
              height="24px"
              width="24px"
            />
            <Button
              icon={PaperPlane}
              alt="send"
              height="24px"
              width="24px"
              submit={true}
              style="rounded-full flex  bg-green-200 w-auto p-2.5 "
            />
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
