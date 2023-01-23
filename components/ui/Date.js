import { useRouter } from "next/router";
import { parseISO, format } from "date-fns";
const { pl, en, uk, ru } = require("date-fns/locale");

export default function Date({ dateString }) {
  let { locale } = useRouter();
  const date = parseISO(dateString);

  let dateStr = () => {
    switch (locale) {
      case "pl":
        return format(date, "d MMMM, yyyy", { locale: pl });
        break;
      case "en":
        return format(date, "d MMMM, yyyy", { locale: en });
        break;
      case "uk":
        return format(date, "d MMMM, yyyy", { locale: uk });
        break;
      case "ru":
        return format(date, "d MMMM, yyyy", { locale: ru });
        break;
    }
  };
  return <time dateTime={dateString}>{dateStr()}</time>;
}
