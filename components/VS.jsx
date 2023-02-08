import Image from "next/image";
import { useTranslation } from "next-i18next";

import BlockList from "./BlockList";
import Heading from "./ui//Heading";

import vs from "../public/assets/images/vs.svg";
import img1 from "../public/assets/images/girl-1.svg";
import img2 from "../public/assets/images/girl-2.svg";

const VS = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-6xl m-auto flex flex-col items-center mb-16">
      <Heading tag={"h3"}>
        {t("services:vs_text_3")}{" "}
        <span className="text-[var(--text-green)]">
          {t("services:vs_text_4")}
        </span>
        <p>{t("services:vs_text_5")}</p>
      </Heading>
      <div className="flex items-center font-bold">
        <div>{t("services:vs_text_1")}</div>
        <div className="mx-4">
          <Image src={vs} alt="" width={100} height={100} />
        </div>
        <div>{t("services:vs_text_2")}</div>
      </div>
      <div className="grid">
        <div className="grid grid-cols-3 lg:gap-6">
          <Image src={img1} alt="" width={300} height={300} />
          <div></div>
          <Image src={img2} alt="" width={300} height={300} />
        </div>

        <div className="grid grid-cols-3 lg:gap-6 z-10 text-[10px] lg:text-[24px]">
          <BlockList
            name={"vsList_1"}
            className={
              "bg-gradient-to-r from-[#D8D8D8] to-[#979899] p-4 space-y-6 lg:space-y-12"
            }
          />
          <BlockList name={"vsList_2"} className={"py-3"} />
          <BlockList
            name={"vsList_3"}
            className={
              "bg-gradient-to-r from-[#4B8765] to-[#E5EEE9] p-4 space-y-6 lg:space-y-12"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default VS;
