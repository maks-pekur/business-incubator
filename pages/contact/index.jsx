import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import SocialLinks from "../../components/ui/SocialLinks";
import Partners from "../../components/Partners";
import Heading from "../../components/ui/Heading";
import ContactForm from "../../components/ui/ContactForm";

import mail from "../../public/assets/images/icon_mail.png";
import location from "../../public/assets/images/location.png";
import phone from "../../public/assets/images/icon_phone.png";
import insta from "../../public/assets/images/insta.png";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact"])),
    },
  };
}

const index = ({ props }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Freedom Business Area - Contact</title>
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
      <div>
        <div className="bg-[#CFDED6]">
          <div className="max-w-7xl m-auto pt-10 pb-40 px-4">
            <Heading tag={"h1"}>{t("contact:title")}</Heading>
            <Heading tag={"h3"}>{t("contact:text_1")}</Heading>
            <div className="grid lg:grid-cols-3 justify-items-center text-[32px] font-bold space-y-8">
              <div className="flex flex-col items-center justify-center space-y-6">
                <Image src={mail} alt="" />
                <div className="text-center">office@fba.ink</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-6">
                <Image src={location} alt="" />
                <div className="text-center">
                  Ogrodowa 58 <br /> Warszawa, 00-876
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-6">
                <Image src={phone} alt="" />
                <Link href="tel:+48737308669">+48 737 308 669</Link>
              </div>
            </div>
          </div>
        </div>
        <section className="flex items-center justify-center relative">
          <div className="absolute top-0 left-0 right-0 h-[150px] bg-[#CFDED6] -z-10"></div>
          <div className="lg:w-[50%] w-[90%] py-10 lg:py-20  px-4 bg-white shadow-2xl flex flex-col items-center space-y-6 -top-[20%] mb-20">
            <ContactForm />
          </div>
        </section>

        <section>
          <h3 className="text-center font-bold lg:text-[48px] text-[24px] uppercase">
            {t("contact:text_2")}
          </h3>
          <div className="flex items-center justify-center">
            <SocialLinks
              width={60}
              height={60}
              className={"my-20"}
              fill={"#a2a2a2"}
            />
          </div>
          <div className="flex items-center justify-center max-w-7xl m-auto lg:my-10 px-4">
            <Image src={insta} alt="" />
          </div>
        </section>

        <Partners />
      </div>
    </>
  );
};

export default index;
