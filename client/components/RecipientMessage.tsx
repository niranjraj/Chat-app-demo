import React from "react";
import Image from "next/image";
interface msg {
  id: string;
  content: string;
  user: string;
}
interface Props {
  message: msg;
  lastmessage: msg;
  avatar: StaticImageData;
}

const RecipientMessage: React.FC<Props> = ({
  message,
  lastmessage,
  avatar,
}) => {
  const isFirstMessage = message.user !== lastmessage?.user;

  return (
    <div className="flex  justify-start items-center">
      <div className="mr-2">
        {isFirstMessage && (
          <Image src={avatar} alt={message.user} width="50" height="50" />
        )}
      </div>

      <div className="flex flex-col">
        {isFirstMessage && (
          <div className="flex mb-2">
            <p className="mr-1">{message.user}</p>
            <p>5m</p>
          </div>
        )}
        <div
          className={` bg-gray-200 p-2  ${
            isFirstMessage
              ? "rounded-b-3xl rounded-tr-3xl"
              : " ml-12 rounded-3xl  "
          } `}
        >
          <p className="text-black">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipientMessage;
