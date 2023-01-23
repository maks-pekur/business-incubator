import Image from "next/image";
import Link from "next/link";

import SocialLinks from "./ui/SocialLinks";
import Logo from "./ui/Logo";
import { i18n } from "../constants";
import phone from "../public/assets/images/phone.svg";
import mail from "../public/assets/images/mail.svg";
import point from "../public/assets/images/point.svg";
import { useRouter } from "next/router";

const Footer = () => {
  const { locale } = useRouter();
  return (
    <footer className="w-full min-h-80 bg-[#3C3C3C] text-white">
      <div className="h-full w-full p-6 grid items-center sm:grid-cols-3 space-y-10">
        <div className="flex items-center justify-center">
          <div>
            <Logo width={120} variant={"white"} />
          </div>
          <div className="text-[24px] border-l-2 border-white h-[50%] items-center pl-4 ml-4 hidden lg:flex">
            Freedom Business Area
          </div>
        </div>

        <div className="flex justify-center">
          <SocialLinks fill={"#a2a2a2"} />
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="space-y-2">
            <h3 className="w-full md:text-left text-center">
              {i18n.footer[locale]}
            </h3>
            <div className="flex items-center text-[#929292] space-x-2">
              <Image src={phone} alt="phone" height={15} />
              <Link href="tel:+48737308669" className="text-[17px] ">
                +48 737 308 669
              </Link>
            </div>
            <div className="flex items-center text-[#929292] space-x-2">
              <Image src={mail} alt="mail" height={15} />
              <Link
                href="mailto:manager@mtk-logistics.ru"
                className="text-[17px] text-[#929292]"
              >
                office@fba.ink
              </Link>
            </div>
            <div className="flex items-center text-[#929292] space-x-2">
              <Image src={point} alt="point" height={20} />
              <Link href="" className="text-[17px] text-[#929292]">
                Ogrodowa 58, <br /> Warszawa, 00-876
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
