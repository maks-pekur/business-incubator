import Link from "next/link";
import Image from "next/image";

import { slider } from "../constants";
import { useRouter } from "next/router";
import { useModal } from "../contexts/ModalContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";

const Slider = () => {
  const { locale } = useRouter();
  const { open } = useModal();
  return (
    <section className="px-2 py-2 lg:py-0 w-full h-full">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
        }}
        className="h-[400px] lg:h-[600px]"
      >
        <SwiperSlide className="h-full rounded-xl lg:rounded-b-[100px] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"></div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/slide-1.png"}
              alt=""
              fill
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-6 z-[1]">
              <div className="text-white lg:w-[70%] text-center space-y-6 text-[24px] lg:text-[48px]">
                {slider.slide_1.text[locale]}
              </div>
              <button className="button" onClick={open}>
                {slider.slide_1.link[locale]}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full rounded-xl lg:rounded-b-[100px] overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 z-[1]"></div>
          <div className="flex lg:items-center justify-end bg-gradient-to-b from-white to-[#4B8765] w-full h-full">
            <Image
              src={"/assets/images/ambrella.png"}
              alt=""
              width={500}
              height={500}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-center z-[2] space-y-6">
              <div className="text-black lg:text-[30px] lg:w-[60%] flex flex-col space-y-6">
                <p className="uppercase text-center font-bold text-[24px] lg:text-[48px]">
                  {slider.slide_2.text_1[locale]}
                </p>
                <p className="text-center">{slider.slide_2.text_2[locale]}</p>
              </div>
              <div className="flex items-center justify-center lg:w-[60%] w-full">
                <button className="button" onClick={open}>
                  {slider.slide_2.link[locale]}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full rounded-xl lg:rounded-b-[100px] overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"></div>
          <div className="flex items-center justify-center ">
            <Image
              src={"/assets/images/slide-3.png"}
              alt=""
              fill
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-[2] space-y-6">
              <div className="text-white text-[20px] lg:text-[40px] lg:w-[80%] text-center space-y-6">
                <p className="uppercase">{slider.slide_3.text_1[locale]}</p>
                <p>{slider.slide_3.text_2[locale]}</p>
                <p className="text-[#4FDB8C] uppercase font-bold text-[24px] lg:text-[48px]">
                  {slider.slide_3.text_3[locale]}
                </p>
              </div>
              <Link className="button" href="/services">
                {slider.slide_3.link[locale]}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
