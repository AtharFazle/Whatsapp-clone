import React, { useState } from "react";
import Chats from "./Chats"
import RoundedBtn from "./Common/RoundedBtn";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { pp } from "../assets/whatsapp";
import { BiFilter } from "react-icons/bi";
import {AiOutlineSearch} from "react-icons/ai"


function LeftMenu() {
  const [filter, setFilter] = useState(false);

  return (
    <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
      {/* profile nav */}
      <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">
        {/* profile picture */}
        <img
          src={pp}
          alt="profile_picture"
          className="rounded-full w-[40px] h-[40px]"
        />
        {/* profile nav buttons */}
        <div className="flex justify-between w-[175px]">
          <RoundedBtn icon={<MdPeopleAlt />} />
          <RoundedBtn icon={<TbCircleDashed />} />
          <RoundedBtn icon={<BsFillChatTextFill />} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>
      {/* search and filter */}
      <div className="flex justify-between items-center h-[60px] p-2">
        {/* search */}
        <input
          type="text"
          placeholder="Search or Start new chat"
          className="rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:font-light placeholder:text-sm "
        />

        {/* filter button */}
        <button
          className={`text-2xl m-2 p-1 rounded-full ${
            filter
              ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
              : "text-[#8796a1] hover: bg-[#3c454c]"
          }`}
          onClick={()=> setFilter(!filter)}
        >
          <BiFilter />
        </button>
      </div>
      {/* chats */}
      <Chats filter={filter}/>
    </div>
  );
}

export default LeftMenu;
