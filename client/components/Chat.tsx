import React from "react";
import styles from "../styles/components/main.module.css";
const Chat: React.FC = () => {
  return (
    <div className="flex-chat h-screen flex flex-col ">
      <header className="h-header min-h-header"></header>
      <div className={styles.chat}>
        <div className="flex-1"></div>
        <footer className="relative bottom-0 h-chatf bg-blue-200 w-full flex items-center justify-around ">
          <form action="" className=" rounded-full p-4 bg-primarybg">
            <input
              type="text"
              placeholder="Type a message"
              className="bg-transparent outline-none"
            />
          </form>
          <div className="rounded-full bg-green-200 w-12 h-12"></div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
