import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import ListItem from "./ListItem";
import { group_1, group_2, group_3 } from "../constants";

import group1 from "../public/assets/images/Group1.png";
import group2 from "../public/assets/images/Group3.png";
import group3 from "../public/assets/images/Group2.png";

const ForWhom = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl m-auto px-6">
      <h2 className="md:text-[48px] my-10 text-center text-[32px]">
        {t("about:text_10")}{" "}
        <span className="text-[#4B8765]">{t("about:text_11")}</span>?
      </h2>

      <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-20 justify-items-center">
        <div className="flex flex-col items-center md:w-full">
          <div>
            <Image src={group1} alt="" height={230} />
          </div>
          <div className="w-full my-8 px-6">
            {group_1.map((title) => (
              <ListItem key={title} title={t(`about:${title}`)} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-[300px] md:w-full">
          <div>
            <Image src={group2} alt="" height={230} />
          </div>
          <div className="w-full my-8 px-6">
            {group_2.map((title) => (
              <ListItem key={title} title={t(`about:${title}`)} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-[300px] md:w-full">
          <div>
            <Image src={group3} alt="" height={205} />
          </div>
          <div className="w-full my-8 px-6">
            {group_3.map((title) => (
              <ListItem key={title} title={t(`about:${title}`)} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-12">
        <h3 className="text-center text-[24px] md:text-[32px]">
          {t("about:text_12")}
        </h3>
      </div>
    </section>
  );
};

export default ForWhom;
