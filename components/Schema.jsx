import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Heading from "./ui/Heading";

const schemas = {
  pl: "/assets/images/Schema-pl.svg",
  en: "/assets/images/Schema-en.svg",
  uk: "/assets/images/Schema-uk.svg",
  ru: "/assets/images/Schema-ru.svg",
};

const Schema = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <div className="my-8 text-center flex flex-col items-center justify-center space-y-8">
      <Heading tag={"h2"}>
        <span className="text-[var(--text-green)]">{t("home:text_2")} </span>
        {t("home:text_3")}
      </Heading>
      <div className="max-w-7xl m-auto px-6">
        <Image src={schemas[locale]} alt="" width={1000} height={1000} />
      </div>
      <Link href={"/services"} className="button">
        {t("home:button_1")}
      </Link>
    </div>
  );
};

export default Schema;
