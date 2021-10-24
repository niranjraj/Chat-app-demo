import React from "react";
import Image from "next/image";
import styles from "../styles/components/side.module.css";

interface Props {
  conversationImage: StaticImageData;
  conversationAlt: string;
  conversationIdentity: string;
  conversationText: string;
  conversationTime: string;
  conversationActive: boolean;
  conversationIndicator: string;
}

const Conversation: React.FC<Props> = ({
  conversationImage,
  conversationAlt,
  conversationIdentity,
  conversationText,
  conversationTime,
  conversationActive,
  conversationIndicator,
}) => {
  return (
    <div className={styles.conversation}>
      <div className="row-span-2 rounded-full">
        <Image
          src={conversationImage}
          alt={conversationAlt}
          width="64"
          height="64"
        />
        {conversationActive && <span></span>}
      </div>
      <div className="text-">{conversationIdentity}</div>
      <div>{conversationTime}</div>
      <div className="">{conversationText}</div>
      <div>{conversationIndicator}</div>
    </div>
  );
};

export default Conversation;
