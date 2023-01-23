import React from "react";

const ButtonOutline = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-2 border-[#4B8765] py-3 px-10 cursor-pointer"
    >
      {title}
    </button>
  );
};

export default ButtonOutline;
