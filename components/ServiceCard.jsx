import Image from "next/image";
import { useRouter } from "next/router";
import { i18n } from "../constants";

const ServiceCard = ({
  img,
  title = "",
  text = "",
  classNames = "",
  description = "",
}) => {
  const { locale } = useRouter();
  return (
    <div className="rounded-[30px] border-[1px] border-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[30px] rounded-t-[30px] bg-gradient-to-b from-[#2C5F40] to-[#ffffff]"></div>
      <div className="h-full w-full pt-10 flex flex-col justify-between overflow-hidden">
        <div className="text-[24px] lg:text-[32px] font-bold text-center px-2 mb-3">
          {title}
        </div>
        <div className={`mb-16 ${classNames}`}>
          {img && <Image src={img} alt="img" width={280} height={280} />}
          <div>
            {text ? (
              <div className="text-[20px] lg:text-[24px] text-center mb-4 px-3">
                {text}
              </div>
            ) : null}
          </div>
        </div>
        {description && (
          <div className="bg-[#2C5F40] text-white rounded-[30px] px-6 absolute top-[89%] bottom-0 hover:top-16 transition-all duration-300 overflow-y-auto text-xl">
            <div className="w-full text-center text-gray-200 mb-4 mt-2">
              {i18n.service.btn[locale]}
            </div>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
