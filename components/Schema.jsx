import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Heading from "./ui/Heading";

const schemas = {
  pl: "/assets/images/Schema-pl.png",
  en: "/assets/images/Schema-en.png",
  uk: "/assets/images/Schema-uk.png",
  ru: "/assets/images/Schema-ru.png",
};

const Schema = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <div className="my-8 text-center flex flex-col items-center justify-center space-y-8">
      <Heading tag={"h2"}>
        <span className="text-[var(--text-green)]">{t("home:text_2")}</span>
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
