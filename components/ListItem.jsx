import React from "react";

const ListItem = ({ title }) => {
  return (
    <div className="w-full text-center relative">
      <div className="border-l-2 border-black border-dotted h-full py-3 font-bold">
        {title}
      </div>
      <div className="absolute top-0 -left-[7px] h-4 w-4 rounded-full bg-[#4B8765]"></div>
      <div className="absolute -bottom-4 -left-[7px] h-4 w-4 rounded-full bg-[#4B8765]"></div>
    </div>
  );
};

export default ListItem;
