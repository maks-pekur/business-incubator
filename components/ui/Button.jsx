import React from "react";
import Link from "next/link";

const Button = ({ title }) => {
  return (
    <button
      type="submit"
      className="bg-gradient-to-b from-[#CFE9D9] to-[#4B8765] border-8 border-white rounded-full py-4 px-8 shadow-2xl text-white"
    >
      {title}
    </button>
  );
};

export default Button;
