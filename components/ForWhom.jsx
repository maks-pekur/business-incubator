import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import ListItem from "./ListItem";
import { group_1, group_2, group_3 } from "../constants";

import group1 from "../public/assets/images/Group1.png";
import group2 from "../public/assets/images/Group3.png";
import group3 from "../public/assets/images/Group2.png";
import Heading from "./ui/Heading";

const ForWhom = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl m-auto px-6">
      <Heading tag={"h2"}>
        <span className="text-[var(--text-green)]">{t("about:text_10")} </span>
        {t("about:text_11")}
      </Heading>

      <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-20 justify-items-center">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:w-full"
        >
          <div>
            <Image src={group1} alt="" height={230} />
          </div>
          <div className="w-full my-8 px-6">
            {group_1.map((title, index) => (
              <ListItem key={title} title={t(`about:${title}`)} />
            ))}
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-[300px] md:w-full"
        >
          <div>
            <Image src={group2} alt="" height={230} />
          </div>
          <div className="w-full my-8 px-6">
            {group_2.map((title, index) => (
              <ListItem key={title} title={t(`about:${title}`)} />
            ))}
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-[300px] md:w-full"
        >
          <div>
            <Image src={group3} alt="" height={205} />
          </div>
          <div className="w-full my-8 px-6">
            {group_3.map((title, index) => (
              <ListItem key={title} title={t(`about:${title}`)} />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="my-12">
        <Heading tag={"h3"}>{t("about:text_12")}</Heading>
      </div>
    </section>
  );
};

export default ForWhom;
