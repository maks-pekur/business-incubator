import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Person from "../../components/Person";
import {Heading} from "../../components/ui/Heading";

import teamPhoto from "../../public/assets/images/new-team.svg";

import { founders, personal } from "../../constants";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["team"])),
    },
  };
}

const Team = ({ props }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Freedom Business Area - Team</title>
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
      <div className="pt-22 px-6">
        <div>
          <div className="my-10 flex items-center justify-center">
            <Image alt="team" height="1000" width="1200" src={teamPhoto} />
          </div>
          <div>
            <Heading tag={"h1"}>{t("team:title")}</Heading>
            <Heading tag={"h3"}>{t("team:subtitle")}</Heading>
          </div>

          <section>
            <Heading tag={"h2"}>
              <span className="text-green-700">{t("team:founders")}</span>
            </Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              {founders.map((founder) => (
                <Person
                  key={founder.id}
                  img={founder.img}
                  name={t(`team:${founder.name}`)}
                  position={t(`team:${founder.position}`)}
                  mail={t(`team:${founder.mail}`)}
                />
              ))}
            </div>
          </section>

          <section>
            <Heading tag={"h2"}>
              {t("team:team_1")}{" "}
              <span className="text-green-700">{t("team:team_2")}</span>
            </Heading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              {personal.map((person) => (
                <Person
                  key={person.id}
                  img={person.img}
                  name={t(`team:${person.name}`)}
                  position={t(`team:${person.position}`)}
                  mail={t(`team:${person.mail}`)}
                  phone={t(`team:${person.phone}`)}
                />
              ))}
            </div>
          </section>

          <div className="text-center space-y-6 mb-10">
            <Heading tag={"h3"}>{t("team:text_1")} </Heading>
            <Heading tag={"h4"}>{t("team:text_2")}</Heading>
            <div className="py-10 flex items-center justify-center">
              <Link href="/career" className="button px-10 py-4">
                {t("team:btn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
