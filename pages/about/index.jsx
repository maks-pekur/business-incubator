import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import HeadPage from "../../components/HeadPage";

import ForWhom from "../../components/ForWhom";
import Consultation from "../../components/Consultation";
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
      <HeadPage />
      <main>
        <Slider />
        <section className="px-6 pt-10">
          <h2 className="text-[24px] md:text-[48px] mb-4 text-center">
            {t("about:title_1")}{" "}
            <span className="text-[#4B8765]">{t("about:title_2")}</span>
          </h2>
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 text-center lg:text-start text-[24px]">
              <p className="py-10">
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
        {/* <section className="w-full h-[400px] bg-gray-400 my-10"></section> */}
        <section className="px-6">
          <h3 className="text-center text-[24px] md:text-[32px]">
            {t("about:text_9")}
          </h3>
        </section>
        <ForWhom />
        <Consultation btnText={"Оставить заявку"} />
      </main>
    </>
  );
};

export default index;
