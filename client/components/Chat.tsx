import React from "react";
import Button from "./Button";
import PaperClip from "../public/paperclip.svg";
import PaperPlane from "../public/paperplane.svg";
import EmojiIcon from "../public/smiley.svg";
import styles from "../styles/components/main.module.css";
const Chat: React.FC = () => {
  return (
    <div className="flex-chat h-screen flex flex-col ">
      <header className="h-header min-h-header"></header>
      <div className={styles.chat}>
        <div className="flex-1"></div>
        <footer className="h-chatf p-3  bg-purple-300 rounded-b-2xl w-full flex justify-evenly items-center  ">
          <form
            action=""
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
            />
            <Button
              icon={PaperClip}
              alt="attach"
              style="flex"
              height="24px"
              width="24px"
            />
          </form>

          <Button
            icon={PaperPlane}
            alt="send"
            height="24px"
            width="24px"
            style="rounded-full flex  bg-green-200 w-auto p-2.5 "
          />
        </footer>
      </div>
    </div>
  );
};

export default Chat;
