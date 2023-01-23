import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Hamburger from "hamburger-react";

import { navLinks } from "../constants";
import Languages from "../components/ui/Languages";

const Navbar = () => {
  const { pathname, locale } = useRouter();
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <div className="md:hidden">
        <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-[#14532D] flex flex-col items-center">
          <div
            className="absolute top-8 right-8 text-xl text-white"
            onClick={() => setOpen(false)}
          >
            X
          </div>
          <div>
            <div className="pt-20 pb-10 flex items-center justify-center">
              <Languages classNames={"top-20"} />
            </div>
            <ul className="flex flex-col space-y-6 font-bold w-full h-full items-center justify-center text-white text-xl">
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => setOpen(false)}>
                  <Link
                    className={pathname === link.path ? "activeLink" : ""}
                    href={link.path}
                  >
                    {link.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="hidden md:block">
        <div>
          <ul className="flex space-x-6 items-center text-[24px] md:text-[20px]">
            {navLinks.map((link) => (
              <li key={link.id} onClick={() => setOpen(false)}>
                <Link
                  className={pathname === link.path ? "activeLink" : ""}
                  href={link.path}
                >
                  {link.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
