import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import ServiceCard from "../../components/ServiceCard";
import VS from "../../components/VS";
import Reviews from "../../components/Reviews";
import HeadPage from "../../components/HeadPage";
import Slider from "../../components/Slider";

import img1 from "../../public/assets/images/service-img-1.png";
import img2 from "../../public/assets/images/service-img-2.png";
import img3 from "../../public/assets/images/service-img-3.png";
import img4 from "../../public/assets/images/service-img-4.png";
import img5 from "../../public/assets/images/service-img-5.png";
import img6 from "../../public/assets/images/service-img-6.png";
import img7 from "../../public/assets/images/service-img-7.png";
import img8 from "../../public/assets/images/service-img-8.png";
import { request } from "../../lib/datocms";
import { useQuerySubscription } from "react-datocms";

export async function getStaticProps({ locale }) {
  const formattedLocale = locale.split("-")[0];
  const graphqlRequest = {
    query: `
      {
        allComments(locale: ${formattedLocale}) {
          id
          slug
          text
          user
          date
        }
      }
    `,
  };

  return {
    props: {
      subscription: {
        enabled: false,
        initialData: await request(graphqlRequest),
      },
      ...(await serverSideTranslations(locale, ["services"])),
    },
  };
}

const index = ({ props, subscription }) => {
  const { t } = useTranslation();
  const { data } = useQuerySubscription(subscription);
  const { allComments } = data;
  return (
    <>
      <HeadPage />
      <Slider />
      <div className="px-6">
        <section className="flex flex-col items-center py-10">
          <h2 className="text-[24px] lg:text-[48px] font-bold text-center">
            {t("services:title")}
          </h2>

          <div className="flex flex-col items-center justify-center space-y-4 shadow-xl w-[80%] p-10 text-[var(--text-green)] shadow-[var(--text-green)] my-10">
            <div className="text-[36px] lg:text-[96px] font-bold text-center">
              {t("services:price")}
            </div>
            <div className="text-[20px] lg:text-[32px] px-10 text-center font-bold">
              {t("services:text_1")}
            </div>
          </div>

          <div className="space-y-6 text-center text-[32px] max-w-6xl">
            <span className="font-bold">{t("services:text_2")}</span>{" "}
            {t("services:text_3")}
            <span className="font-bold">{t("services:text_4")}</span>
            {t("services:text_5")}
          </div>

          <div className="max-w-7xl m-auto my-10">
            <h2 className="text-[32px] lg:text-[48px] text-center my-20 font-bold">
              <span className="text-[#4B8765]">{t("services:text_6")}</span>{" "}
              {t("services:text_7")}
            </h2>
            <div className="grid lg:grid-cols-3 gap-10">
              <ServiceCard
                img="/assets/images/broker.png"
                title={t("services:dop.1")}
                classNames={"flex items-center justify-center"}
              />
              <ServiceCard
                img={"/assets/images/nalogoviy.png"}
                title={t("services:dop.2")}
                classNames={"flex items-center justify-center"}
              />
              <ServiceCard
                img={"/assets/images/translator.png"}
                title={t("services:dop.3")}
                classNames={"flex items-center justify-center"}
              />
            </div>
          </div>

          <h2 className="text-[32px] lg:text-[48px] text-center my-10 font-bold">
            {t("services:title_2")}
            <span className="text-[#4B8765]"> {t("services:title_3")}</span>
          </h2>
        </section>

        <VS />

        <h3 className="text-center my-10">{t("services:text_8")}</h3>
        <h2 className="text-[24px] lg:text-[48px] text-center max-w-5xl m-auto">
          {t("services:text_9")}
          <span className="text-[#4B8765]">{t("services:text_10")}</span>{" "}
          {t("services:text_11")}
        </h2>

        <section className="max-w-6xl m-auto space-y-10 lg:space-y-20 my-10">
          <ServiceCard
            classNames={"flex-row-reverse items-center w-full flex-col md:flex"}
            img={img1}
            title={t("services:service_cards.card_1.title")}
            text={t("services:service_cards.card_1.text")}
            description={t("services:service_cards.card_1.description")}
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:gap-20">
            <ServiceCard
              classNames={"flex items-center justify-center "}
              img={img2}
              title={t("services:service_cards.card_2.title")}
              description={t("services:service_cards.card_2.description")}
            />
            <ServiceCard
              img={img3}
              classNames={"flex items-center justify-center"}
              title={t("services:service_cards.card_3.title")}
              description={t("services:service_cards.card_3.description")}
            />
            <ServiceCard
              img={img4}
              classNames={"flex items-center justify-center"}
              title={t("services:service_cards.card_4.title")}
              description={t("services:service_cards.card_4.description")}
            />
            <ServiceCard
              img={img5}
              classNames={"flex items-center justify-center"}
              title={t("services:service_cards.card_5.title")}
              description={t("services:service_cards.card_5.description")}
            />
            <ServiceCard
              img={img6}
              classNames={"flex items-center justify-center"}
              title={t("services:service_cards.card_6.title")}
              description={t("services:service_cards.card_6.description")}
            />
            <ServiceCard
              img={img7}
              classNames={"flex items-center justify-center"}
              title={t("services:service_cards.card_7.title")}
              description={t("services:service_cards.card_7.description")}
            />
          </div>
          <ServiceCard
            img={img8}
            title={t("services:service_cards.card_8.title")}
            text={t("services:service_cards.card_8.description")}
            classNames={"flex-row-reverse items-center w-full flex-col md:flex"}
          />
        </section>

        <Reviews reviews={allComments} />
      </div>
    </>
  );
};

export default index;
