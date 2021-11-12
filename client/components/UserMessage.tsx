import React from "react";
interface msg {
  id: string;
  content: string;
  user: string;
}

interface Props {
  message: msg;
  lastmessage: msg;
}

const UserMessage: React.FC<Props> = ({ message, lastmessage }) => {
  const isFirstMessage = message.user !== lastmessage?.user;
  return (
    <div className="flex justify-end">
      <div
        className={`bg-purple-700  p-2 ${
          isFirstMessage ? "rounded-b-3xl rounded-l-3xl" : "rounded-3xl"
        } `}
      >
        <p className="text-white">{message.content}</p>
      </div>
    </div>
  );
};

export default UserMessage;
