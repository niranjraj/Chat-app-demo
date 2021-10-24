import React from "react";
import Image from "next/image";
import MessagIcon from "../public/chat.svg";
import Logo from "../public/logo.jpg";
import ProfileIcon from "../public/account_circle.svg";
import HelpIcon from "../public/info.svg";
import ExitIcon from "../public/exit_to_app.svg";
import Button from "./Button";
import styles from "../styles/components/side.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center w-20 h-screen ">
      <div className="mt-3">
        <Image src={Logo} height="32" width="32" alt="logo" />
      </div>

      <div className="">
        <Button style={styles.sidebarBtn} icon={MessagIcon} alt="chat" />
        <Button style={styles.sidebarBtn} icon={ProfileIcon} alt="profile" />
        <Button style={styles.sidebarBtn} icon={HelpIcon} alt="about" />
      </div>
      <div className="logout">
        <Button style={styles.sidebarBtn} icon={ExitIcon} alt="exit" />
      </div>
    </div>
  );
};

export default Sidebar;
