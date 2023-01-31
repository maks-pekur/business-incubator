import Image from "next/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { request } from "../../lib/datocms";
import { useQuerySubscription } from "react-datocms";

import ServiceCard from "../../components/ServiceCard";
import VS from "../../components/VS";
import Reviews from "../../components/Reviews";
import Slider from "../../components/Slider";
import Heading from "../../components/ui/Heading";

import img1 from "../../public/assets/images/service-img-1.svg";
import img2 from "../../public/assets/images/service-img-2.svg";
import img3 from "../../public/assets/images/service-img-3.svg";
import img4 from "../../public/assets/images/service-img-4.svg";
import img5 from "../../public/assets/images/service-img-5.svg";
import img6 from "../../public/assets/images/service-img-6.svg";
import img7 from "../../public/assets/images/service-img-7.svg";
import img8 from "../../public/assets/images/service-img-8.svg";
import broker from "../../public/assets/images/broker.svg";
import nalogoviy from "../../public/assets/images/nalogoviy.svg";
import translator from "../../public/assets/images/translator.svg";

export async function getStaticProps({ locale }) {
  const formattedLocale = locale.split("-")[0];
  const graphqlRequest = {
    query: `
      {
        allComments(locale: ${formattedLocale}) {
          slug
          text
          user
          date
          rating
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
          }
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
      <Head>
        <title>Freedom Business Area - Service</title>
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
      <Slider />
      <div className="px-6">
        <section className="flex flex-col items-center py-10">
          <Heading tag={"h1"}>{t("services:title")}</Heading>

          <div className="flex flex-col items-center justify-center space-y-4 shadow-xl lg:w-[80%] p-10 text-[var(--text-green)] shadow-[var(--text-green)] my-10 rounded-lg">
            <div className="text-[50px] text-center lg:text-[100px]">
              {t("services:price")}
            </div>
            <Heading tag={"h3"}>{t("services:text_1")}</Heading>
          </div>

          <Heading tag={"h3"}>
            <span className="font-bold">{t("services:text_2")}</span>{" "}
            {t("services:text_3")}{" "}
            <span className="font-bold">{t("services:text_4")}</span>{" "}
            {t("services:text_5")}
          </Heading>

          <div className="max-w-7xl m-auto my-10">
            <Heading tag={"h2"}>
              <span className="text-[#4B8765]">{t("services:text_6")}</span>{" "}
              {t("services:text_7")}
            </Heading>
            <div className="grid lg:grid-cols-3 lg:gap-10 gap-0">
              <div className="flex flex-col items-center justify-center space-y-10 shadow-lg p-8 shadow-[var(--text-green)] lg:my-10 rounded-lg">
                <Heading tag={"span"}>{t("services:dop.1")}</Heading>
                <Image src={broker} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-10 shadow-lg p-8 shadow-[var(--text-green)] lg:my-10 my-4 rounded-lg">
                <Heading tag={"span"}>{t("services:dop.2")}</Heading>
                <Image src={nalogoviy} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center space-y-10 shadow-lg p-8 shadow-[var(--text-green)] lg:my-10 rounded-lg">
                <Heading tag={"span"}>{t("services:dop.3")}</Heading>
                <Image src={translator} alt="" />
              </div>
            </div>
          </div>
        </section>
        <div>
          <Heading tag={"h2"}>
            {t("services:title_2")}
            <span className="text-[#4B8765]"> {t("services:title_3")}</span>
          </Heading>
          <VS />
        </div>

        <Heading tag={"h2"}>
          {t("services:text_9")}
          <span className="text-[#4B8765]">{t("services:text_10")}</span>{" "}
          {t("services:text_11")}
        </Heading>

        <section className="max-w-6xl m-auto space-y-10 lg:space-y-20 my-8">
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
