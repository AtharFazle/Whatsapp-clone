import React, { useState, useEffect } from "react";
import { ImFolderDownload } from "react-icons/im";
import { chatsData } from "../data/whatsapp.js";
import Chat from "./Chat";

function Chats({ filter }) {
  const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter
      ? chatsData.filter((chat) => chat.unreadMsgs)
      : chatsData;
      setChats(newChats)
  }, [filter]);

  return (
    //chats main container
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100 ">
      {/* archived container */}
      <div className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]">
        {/* icon and text */}
        <div className="flex justify-around items-center w-[150px] ">
          {/* icon */}
          <span className="text-emerald-500 text-lg">
            <ImFolderDownload />
          </span>

          {/* archived */}
          <h1 className="text-base text-white ml-4 my-2">Archived</h1>
        </div>

        {/* Number */}
        <p className="text-emerald-500 text-xs font-light ">7</p>
      </div>

      {/* chats */}
      {chats.map((chat, i) => {
        return (
          <Chat
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={i === 0}
          />
        );
      })}
    </div>
  );
}

export default Chats;
