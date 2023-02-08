import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import teamImg from "../../public/assets/images/team.png";
import Resume from "../../components/Resume";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["career"])),
    },
  };
}

const index = ({ props }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Freedom Business Area - Career</title>
        <meta
          name="description"
          content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
        />
        <meta
          property="og:description"
          content="Бизнес-инкубатор Freedom Business Area предлагает комплексные услуги по бизнес-эмиграции, регистрации предприятия (открытия фирмы ооо), продвижения своего бизнеса в Польше."
        />
        <meta name="twitter:title" content="Freedom Business Area" />
        <meta name="twitter:description" content="None" />
        <meta property="og:title" content="Freedom Business Area" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center px-4 my-10">
          <Image src={teamImg} alt="" width="auto" height="auto" />
        </div>
        <div className="max-w-7xl m-auto space-y-10">
          <div className="text-[24px] lg:text-[32px] text-center px-4">
            {t("career:title")}{" "}
          </div>
          <div className="font-bold text-center lg:text-[48px] text-[24px] pb-8">
            {t("career:text_1")}{" "}
            <span className="text-[var(--text-green)]">
              {t("career:text_2")}{" "}
            </span>
            {t("career:text_3")}{" "}
            <span className="text-[var(--text-green)]">
              {t("career:text_4")}
            </span>
            !
          </div>
          <Resume />
        </div>
      </div>
    </>
  );
};

export default index;
