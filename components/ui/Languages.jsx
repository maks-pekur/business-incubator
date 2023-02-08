import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const flags = {
  pl: "/assets/images/pl.svg",
  en: "/assets/images/gb.svg",
  uk: "/assets/images/ua.svg",
  ru: "/assets/images/ru.svg",
};

import "/node_modules/flag-icons/css/flag-icons.min.css";

const Languages = ({ classNames }) => {
  const { locale, locales, asPath } = useRouter();
  const [lang, setLang] = useState(locale);
  const [isOpen, setOpen] = useState(false);

  const handleClick = (locale) => {
    setLang(locale);
    setOpen(false);
  };

  return (
    <div>
      <div onClick={() => setOpen(!isOpen)} className="relative">
        <Image src={flags[locale]} width={22} height={22} alt="" />
      </div>
      {isOpen && (
        <div
          className={`absolute space-y-2 flex flex-col items-center  ${classNames}`}
        >
          {locales.map((l) => {
            return (
              <Link
                key={l}
                href={asPath}
                locale={l}
                onClick={() => handleClick(l)}
              >
                <Image src={flags[l]} width={22} height={22} alt="" />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Languages;
