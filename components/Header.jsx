import Link from "next/link";

import Navbar from "./Navbar";
import Languages from "./ui/Languages";
import Logo from "./ui/Logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[#CFDED6]">
      <div className="flex items-center justify-between h-12 lg:h-20 px-6 overflow-hidden">
        <div className="flex items-center">
          <Logo width={70} variant={"black"} />
          <Link
            href="/"
            className="text-[22px] border-l-2 border-black items-center pl-4 ml-4 hidden lg:flex"
          >
            Freedom Business Area
          </Link>
        </div>
        <Navbar />
        <div className="hidden md:block">
          <Languages classNames={"top-7"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
