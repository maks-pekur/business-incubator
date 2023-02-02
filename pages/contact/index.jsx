import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import SocialLinks from "../../components/ui/SocialLinks";
import Partners from "../../components/Partners";
import Heading from "../../components/ui/Heading";
import ContactForm from "../../components/ui/ContactForm";

import MailIcon from "../../components/ui/MailIcon";
import PhoneIcon from "../../components/ui/PhoneIcon";
import PointIcon from "../../components/ui/PointIcon";

import post1 from "../../public/assets/images/1.png";
import post2 from "../../public/assets/images/2.png";
import post3 from "../../public/assets/images/3.png";
import post4 from "../../public/assets/images/4.png";
import post5 from "../../public/assets/images/5.png";
import post6 from "../../public/assets/images/6.png";

const insta = [
  {
    id: "01",
    img: post1,
    href: "https://www.instagram.com/p/CoC42xlsGjm/?igshid=YmMyMTA2M2Y=",
  },
  {
    id: "02",
    img: post2,
    href: "https://www.instagram.com/p/Cn17R-vsebO/?igshid=YmMyMTA2M2Y=",
  },
  {
    id: "03",
    img: post3,
    href: "https://www.instagram.com/reel/Cnwwmi6Bwwb/?igshid=YmMyMTA2M2Y=",
  },
  {
    id: "04",
    img: post4,
    href: "https://www.instagram.com/p/CnmdMLfMBUg/?igshid=YmMyMTA2M2Y=",
  },
  {
    id: "05",
    img: post5,
    href: "https://www.instagram.com/p/CnhZyH6Mw8f/?igshid=YmMyMTA2M2Y=",
  },
  {
    id: "06",
    img: post6,
    href: "https://www.instagram.com/reel/CnXHQgwh68s/?igshid=YmMyMTA2M2Y=",
  },
];

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
            <div className="grid lg:grid-cols-3 justify-items-center text-[24px] font-bold space-y-8">
              <div className="flex flex-col items-center justify-center space-y-6">
                <MailIcon width={35} height={35} />
                <Link href={"mailto:office@fba.ink"} className="text-center">
                  office@fba.ink
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center space-y-6">
                <PointIcon width={35} height={35} />
                <Link
                  href={"https://goo.gl/maps/sUhsAFsmjaRGcGPAA"}
                  className="text-center"
                >
                  {t("contact:street")} <br /> {t("contact:warsaw")}, 00-876
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center space-y-6">
                <PhoneIcon width={35} height={35} />
                <Link href="tel:+48737308669">+48 737 308 669</Link>
              </div>
            </div>
          </div>
        </div>
        <section className="flex items-center justify-center relative">
          <div className="absolute top-0 left-0 right-0 h-[150px] bg-[#CFDED6] -z-10"></div>
          <div className="lg:w-[50%] py-10 lg:py-20 lg:px-32 px-4 bg-white shadow-2xl flex flex-col items-center space-y-6 -top-[20%] mb-20">
            <ContactForm />
          </div>
        </section>

        <section>
          <h3 className="text-center font-bold lg:text-[48px] text-[24px] uppercase">
            {t("contact:text_2")}
          </h3>
          <div className="flex items-center justify-center">
            <SocialLinks
              width={40}
              height={40}
              className={"my-20"}
              fill={"#a2a2a2"}
            />
          </div>
          <div className="max-w-7xl m-auto lg:my-10 px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {insta.map(({ id, href, img }) => (
              <Link href={href} key={id}>
                <Image src={img} width={500} height={500} />
              </Link>
            ))}
          </div>
        </section>

        <Partners />
      </div>
    </>
  );
};

export default index;
