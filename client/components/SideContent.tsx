import React from "react";
import Conversation from "./Conversation";
import Avatar from "../public/profilepic.png";
const SideContent: React.FC = () => {
  return (
    <div className="h-screen min-w-side w-1/5 flex flex-col overflow-hidden">
      <header className="h-header min-h-header flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="p-3 rounded-full outline-none w-full"
        />
      </header>
      <div className=" rounded-t-2xl scrollbar-hide overflow-y-auto mb-5  rounded-b-2xl  bg-red-100 h-full">
        {Array.from(Array(15), (e, i) => {
          return (
            <Conversation
              conversationActive={true}
              conversationImage={Avatar}
              conversationAlt=""
              key={i}
              conversationIdentity="james"
              conversationText="how are you lisa simpson"
              conversationTime="9:00 pm"
              conversationIndicator="3"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideContent;
