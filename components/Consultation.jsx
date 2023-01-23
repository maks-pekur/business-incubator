import Image from "next/image";
import { useRouter } from "next/router";

import { consultation } from "../constants/";

import phone from "../public/assets/images/phone.png";

import ContactForm from "./ui/ContactForm";

const Consultation = () => {
  const { locale } = useRouter();
  return (
    <section id="contactForm">
      <div className="bg-gradient-to-b from-[#4B8765] to-[#FFFFFF] rounded-3xl lg:rounded-t-[100px] pt-10 ">
        <div className="sm:text-[48px] text-center text-[24px]">
          {consultation.title_1[locale]}{" "}
          <span className="text-[#12733C]">{consultation.title_2[locale]}</span>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="hidden md:flex items-end justify-end h-full relative overflow-hidden">
            <Image
              src={phone}
              alt=""
              width={400}
              className="absolute top-14 h-full"
            />
          </div>
          <div className="px-8 xl:px-20 py-10 flex flex-col items-center">
            <div className="mb-10 md:text-left lg:w-[60%]">
              {consultation.text[locale]}
            </div>
            <div className="w-full h-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
