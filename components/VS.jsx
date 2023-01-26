import Image from "next/image";
import { useTranslation } from "next-i18next";

import BlockList from "./BlockList";

import vs from "../public/assets/images/vs.png";
import img1 from "../public/assets/images/girl-1.png";
import img2 from "../public/assets/images/girl-2.png";

const VS = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-4xl m-auto flex flex-col items-center">
      <div className="flex items-center font-bold">
        <div>{t("services:vs_text_1")}</div>
        <div className="mx-4">
          <Image src={vs} alt="" />
        </div>
        <div>{t("services:vs_text_2")}</div>
      </div>

      <div className="relative min-h-[710px] flex flex-col items-center justify-end">
        <div className="grid grid-cols-3 lg:gap-6 absolute top-0 left-0">
          <Image src={img1} alt="" width={300} height={300} />
          <div></div>
          <Image src={img2} alt="" width={300} height={300} />
        </div>

        <div className="grid grid-cols-3 lg:gap-6 z-10">
          <BlockList
            name={"vsList_1"}
            className={
              "bg-gradient-to-r from-[#D8D8D8] to-[#979899] lg:font-bold lg:p-8 py-3"
            }
          />
          <BlockList
            className={"bg-transparent lg:font-bold lg:py-4"}
            name={"vsList_2"}
          />
          <BlockList
            name={"vsList_3"}
            className={
              "bg-gradient-to-r from-[#4B8765] to-[#E5EEE9] lg:font-bold lg:p-8 py-3"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default VS;
