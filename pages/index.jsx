import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import Button from "../components/ui/Button";

import mainImg from "../public/assets/images/home-main.png";
import arrowRight from "../public/assets/images/arrow-right.png";
import Slider from "../components/Slider";
import { useRouter } from "next/router";
import Head from "next/head";

const schemas = {
  pl: "/assets/images/Schema-pl.png",
  en: "/assets/images/Schema-en.png",
  uk: "/assets/images/Schema-uk.png",
  ru: "/assets/images/Schema-ru.png",
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

const Home = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>Freedom Business Area - Home</title>
        <meta property="og:title" content="Freedom Business Area" />
        <meta
          name="description"
          content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
        />
        <meta
          property="og:description"
          content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
        />
        <meta name="twitter:title" content="Freedom Business Area - Home" />
        <meta name="twitter:description" content="None" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Freedom Business Area" />
        <meta property="og:title" content="Freedom Business Area" />
      </Head>
      <main>
        <Slider />
        <section className="max-w-7xl m-auto">
          <h2 className="lg:text-[40px] tracking-wide	leading-tight	font-bold uppercase my-10 text-center">
            {t("home:title")}{" "}
            <span className="text-[var(--text-green)]">
              {t("home:title_span")}
            </span>
          </h2>
          <div className="flex flex-col items-center lg:flex-row space-y-8">
            <div className="lg:w-[65%] md:text-[32px] text-center px-6">
              {t("home:text_1")}
            </div>
            <div className="lg:w-[35%]">
              <Image src={mainImg} alt="" height={470} />
            </div>
          </div>

          <div className="my-10 text-center flex flex-col items-center justify-center space-y-16">
            <h2 className="lg:text-[40px] tracking-wide	leading-tight	font-bold uppercase">
              <span className="text-[var(--text-green)]">
                {t("home:text_2")}
              </span>{" "}
            </h2>
            <div className="max-w-[80%]">
              <Image src={schemas[locale]} alt="" width={1000} height={1000} />
            </div>
            <Button title={t("home:button_1")} />
          </div>
        </section>

        <section className="max-w-[1440px] m-auto">
          <h2 className="lg:text-[40px] tracking-wide	leading-tight	font-bold uppercase my-10 text-center">
            <span className="text-[var(--text-green)]">
              {t("home:text_4")}{" "}
            </span>
            {t("home:text_5")}
          </h2>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 md:gap-10 lg:gap-0 justify-items-center lg:text-[150px] text-[90px] px-10 lg:px-0">
            <motion.div
              whileInView={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 items-center"
            >
              <div className="text-[#4B8765] font-bold text-center">1</div>
              <div className="font-bold lg:text-[24px] text-[16px] text-left">
                {t("home:steps.1")}
              </div>
              <div className="hidden md:block">
                <Image src={arrowRight} alt="" />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 items-center"
            >
              <div className="text-[#4B8765] font-bold text-center">2</div>
              <div className="font-bold lg:text-[24px] text-[16px]">
                {t("home:steps.2")}
              </div>
              <div className="hidden md:block">
                <Image src={arrowRight} alt="" />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-3 items-center"
            >
              <div className="text-[#4B8765] font-bold text-center">3</div>
              <div className="font-bold lg:text-[24px] text-[16px]">
                {t("home:steps.3")}
              </div>
              <div className="hidden md:block xl:hidden">
                <Image src={arrowRight} alt="" />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.4 }}
              className="grid grid-cols-2 md:grid-cols-3 items-center"
            >
              <div className="text-[#4B8765] font-bold text-center">4</div>
              <div className="font-bold lg:text-[24px] text-[16px]">
                {t("home:steps.4")}
              </div>
              <div className="hidden md:block">
                <Image src={arrowRight} alt="" />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.4 }}
              className="grid grid-cols-2 md:grid-cols-3 items-center"
            >
              <div className="text-[#4B8765] font-bold text-center">5</div>
              <div className="font-bold lg:text-[24px] text-[16px]">
                {t("home:steps.5")}
              </div>
              <div className="hidden md:block">
                <Image src={arrowRight} alt="" />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.5 }}
              className="grid grid-cols-2 md:grid-cols-3 items-center"
            >
              <div className="text-[#4B8765] font-bold text-center">6</div>
              <div className="font-bold lg:text-[24px] text-[16px]">
                {t("home:steps.6")}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
