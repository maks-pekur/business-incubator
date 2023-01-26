import Image from "next/image";
import { useTranslation } from "next-i18next";

import BlockList from "./BlockList";

import vs from "../public/assets/images/vs.png";
import img1 from "../public/assets/images/girl-1.png";
import img2 from "../public/assets/images/girl-2.png";

const VS = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl m-auto flex flex-col items-center my-10">
      <div className="flex items-center font-bold">
        <div>{t("services:vs_text_1")}</div>
        <div className="mx-4">
          <Image src={vs} alt="" />
        </div>
        <div>{t("services:vs_text_2")}</div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <BlockList
          name={"vsList_1"}
          img={img1}
          className={
            "bg-gradient-to-r from-[#D8D8D8] to-[#979899] font-bold p-8"
          }
        />
        <BlockList
          className={"bg-transparent font-bold min-w-[280px] py-8"}
          name={"vsList_2"}
        />
        <BlockList
          img={img2}
          name={"vsList_3"}
          className={
            "bg-gradient-to-r from-[#4B8765] to-[#E5EEE9] font-bold p-8"
          }
        />
      </div>
    </section>
  );
};

export default VS;
