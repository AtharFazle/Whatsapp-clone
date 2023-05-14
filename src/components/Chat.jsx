import React from "react";
import { chatsData } from "../data/whatsapp";

function Chat({ pp, contact, msg, time, unreadMsgs, active }) {
  return (
    <div
      className={`flex justify-between items-center cursor-pointer w-100 h-[85px] hover:bg-[#202d33] ${
        active ? "bg-[#202d33]" : ""
      }`}
    >
      {/* profile picture  */}
      <img
        src={pp}
        alt="profile_picture"
        className="rounded-full w-[45px] h-[45px] mr-5 ml-3"
      />
      {/* info container */}
      <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">
        {/* Contact name and message */}
        <div className="flex flex-col justify-between text-white">
          {/* contact name */}
          <h5 className="font-normal mb-1">{contact}</h5>

          {/* message */}
          <p className={`text-sm ${!unreadMsgs ? "text-neutral-400" : ""}`}>
            {msg}
          </p>
        </div>
        {/* time and number */}
        <div className="flex flex-col justify-between items-end h-100 text-xs mr-2">
          {/* {time} */}
          <p className="text-emerald-500 min-w-[55px]">{time}</p>

          {/* number of message */}
          {unreadMsgs &&(
            <div className="flex justify-center items-center bg-emerald-500 rounded-full w-[20px] h-[20px]">
              <p className="text-emerald-900 mb-0.5">{unreadMsgs}</p>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
