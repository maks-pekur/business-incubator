import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "./ui/Button";
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
    <div className="my-10 text-center flex flex-col items-center justify-center space-y-16">
      <Heading tag={"h2"}>
        <span className="text-[var(--text-green)]">{t("home:text_2")}</span>
      </Heading>
      <div className="max-w-7xl m-auto">
        <Image src={schemas[locale]} alt="" width={1000} height={1000} />
      </div>
      <Button title={t("home:button_1")} />
    </div>
  );
};

export default Schema;
