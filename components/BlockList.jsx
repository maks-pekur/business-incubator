import Image from "next/image";
import { useTranslation } from "next-i18next";

const list = ["1", "2", "3", "4", "5", "6", "7"];

const BlockList = ({ className, name = "", img }) => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-rows-1">
      <div className="flex items-center justify-center">
        {img && <Image src={img} alt="" />}
      </div>
      <div className={`rounded-xl ${className}`}>
        <ul className="flex flex-col items-center space-y-8 text-center">
          {list.map((item) => (
            <li key={item}>{t(`services:${name}.${item}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlockList;
