import Image from "next/image";
import Heading from "../components/ui/Heading";
import { useTranslation } from "next-i18next";

const partners = [
  {
    id: "01",
    image: "/partner1.png",
  },
  {
    id: "02",
    image: "/partner2.png",
  },
  {
    id: "03",
    image: "/partner3.png",
  },
  {
    id: "04",
    image: "/partner4.png",
  },
  {
    id: "05",
    image: "/partner5.png",
  },
  {
    id: "06",
    image: "/partner6.png",
  },
  {
    id: "07",
    image: "/partner7.png",
  },
];

const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col items-center">
      <Heading tag={"h3"}>{t("contact:partners")}</Heading>
      <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden w-[90%] snap-x-mandatory scroll-p-6 rounded-xl lg:gap-12 scrollbar-hide">
        {partners.map(({ id, image }) => (
          <div key={id} className="p-6 snap-start flex-none items-center flex">
            <Image src={`/assets/images${image}`} width={150} height={150} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
