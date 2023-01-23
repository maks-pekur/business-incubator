import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Resume from "../../components/Resume";
import HeadPage from "../../components/HeadPage";

import teamImg from "../../public/assets/images/team.png";

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
      <HeadPage />
      <div>
        <div className="flex items-center justify-center px-4 my-10">
          <Image src={teamImg} alt="" />
        </div>
        <section className="max-w-7xl m-auto space-y-10">
          <div className="text-[24px] lg:text-[32px] text-center">
            {t("career:title")}{" "}
          </div>
          <div className="font-bold text-center lg:text-[48px] text-[24px]">
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
        </section>
        <div className="mt-10">
          <Resume />
        </div>
      </div>
    </>
  );
};

export default index;
