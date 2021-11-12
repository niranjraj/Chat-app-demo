import React, { useState } from "react";

import UserMessage from "./UserMessage";
import RecipientMessage from "./RecipientMessage";
import ProfilePic from "../public/profilepic.png";
const user = "james";
interface msg {
  id: string;
  content: string;
  user: string;
}
interface Props {
  newmessages: msg[];
}
const Messages: React.FC<Props> = ({ newmessages }) => {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col h-full justify-end mx-10">
        {newmessages &&
          newmessages.map((msg, index) => {
            const lastmessage = newmessages[index - 1];
            const isUserMessage = user === msg.user;

            return (
              <div key={`msg_${msg.id}`} className="mb-2">
                {isUserMessage ? (
                  <UserMessage message={msg} lastmessage={lastmessage} />
                ) : (
                  <RecipientMessage
                    message={msg}
                    lastmessage={lastmessage}
                    avatar={ProfilePic}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Messages;
