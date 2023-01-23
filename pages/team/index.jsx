import React from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Person from "../../components/Person";
import Button from "../../components/ui/Button";
import HeadPage from "../../components/HeadPage";

import teamPhoto from "../../public/assets/images/team.png";

import { founders, personal } from "../../constants";
import Link from "next/link";

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
      <HeadPage />
      <div className="pt-22 px-6">
        <div>
          <div className="my-10 flex items-center justify-center">
            <Image alt="team" height="400" width="full" src={teamPhoto} />
          </div>
          <div>
            <h2 className="text-center text-[32px] mb-8">{t("team:title")}</h2>
            <p className="text-center text-[24px] lg:text-[32px]">
              {t("team:subtitle")}
            </p>
          </div>

          <section>
            <h2 className="text-center my-10 text-5xl">
              <span className="text-green-700">{t("team:founders")}</span>
            </h2>
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
            <h2 className="text-center my-10 text-5xl">
              {t("team:team_1")}{" "}
              <span className="text-green-700">{t("team:team_2")}</span>
            </h2>
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
            <h3 className="text-[48px] font-bold">{t("team:text_1")}</h3>
            <p className="text-[24px] max-w-4xl text-center m-auto">
              {t("team:text_2")}
            </p>
            <div className="py-10 flex items-center justify-center">
              <Link href="/career" className="button">
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
