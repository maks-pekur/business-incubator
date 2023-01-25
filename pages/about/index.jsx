import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import Heading from "../../components/ui/Heading";

import ForWhom from "../../components/ForWhom";
import Slider from "../../components/Slider";
import mainImg from "../../public/assets/images/about-main.png";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

const index = ({ props }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Freedom Business Area - About</title>
        <meta property="og:title" content="Freedom Business Area" />
        <meta
          name="description"
          content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
        />
        <meta
          property="og:description"
          content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
        />
        <meta name="twitter:title" content="Freedom Business Area " />
        <meta name="twitter:description" content="None" />
      </Head>
      <main>
        <Slider />
        <section className="px-6 pt-10">
          <Heading tag={"h1"}>
            {t("about:title_1")}{" "}
            <span className="text-[#4B8765]">{t("about:title_2")}</span>
          </Heading>
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 text-center lg:text-start text-[24px]">
              <p className="py-10 text-justify">
                {t("about:text")}{" "}
                <span className="text-[#4B8765]">{t("about:text_2")} </span>
                {t("about:text_3")}{" "}
                <span className="text-[#4B8765]">{t("about:text_4")} </span>
                {t("about:text_5")}{" "}
                <span className="text-[#4B8765]">{t("about:text_6")} </span>{" "}
                <p>{t("about:text_7")}</p>
                <p className="mt-8">{t("about:text_8")}</p>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image src={mainImg} alt="" />
            </div>
          </div>
        </section>
        <Heading tag={"h3"}>{t("about:text_9")}</Heading>
        <ForWhom />
      </main>
    </>
  );
};

export default index;
