import { useTranslation } from "next-i18next";

const list = ["1", "2", "3", "4", "5", "6", "7"];

const BlockList = ({ className, name = "" }) => {
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden">
      <ul
        className={`flex flex-col justify-between items-center text-center rounded-xl h-full ${className}`}
      >
        {list.map((item) => (
          <li key={item}>{t(`services:${name}.${item}`)}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockList;
