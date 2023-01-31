import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import Heading from "../../components/ui/Heading";

import ForWhom from "../../components/ForWhom";
import Slider from "../../components/Slider";
import Reviews from "../../components/Reviews";

import mainImg from "../../public/assets/images/about-main.svg";
import { request } from "../../lib/datocms";
import { useQuerySubscription } from "react-datocms/use-query-subscription";

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
      ...(await serverSideTranslations(locale, ["about"])),
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
          <div className="text-[18px] lg:text-[30px] grid lg:grid-cols-3 items-center">
            <div className="text-justify lg:col-span-2 space-y-4">
              {t("about:text")}{" "}
              <span className="text-[#4B8765]">{t("about:text_2")} </span>
              {t("about:text_3")}{" "}
              <span className="text-[#4B8765]">{t("about:text_4")} </span>
              {t("about:text_5")}{" "}
              <span className="text-[#4B8765]">{t("about:text_6")} </span>
              <span>{t("about:text_7")}</span>
              <div className="text-justify hidden md:block">
                {t("about:text_8")}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Image src={mainImg} alt="" />
              </div>
              <div className="text-justify col-span-2 md:hidden">
                {t("about:text_8")}
              </div>
            </div>
          </div>
          <Heading tag={"h3"} classNames={"text-justify"}>
            {t("about:text_9")}
          </Heading>
          <ForWhom />
          <Reviews reviews={allComments} />
        </section>
      </main>
    </>
  );
};

export default index;
