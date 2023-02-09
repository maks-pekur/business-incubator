import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const ImagePlayer = () => {
  const [scroll, setScroll] = useState("01");

  // console.log("scroll", scroll);

  const onScroll = useCallback(() => {
    let { scrollY } = window;
    if (scrollY === 0) {
      setScroll("01");
    } else {
      setScroll(Math.floor(scrollY / 10));
    }
  }, []);

  const currentFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/00${index.toString()}.png`;

  console.log("currentFrame", currentFrame);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-black relative h-[180vh] w-full">
      <div className="sticky top-0 left-0 right-0 height-[calc(100vh - 60px)] w-full flex items-center justify-center">
        <Image src={currentFrame(scroll)} width={1350} height={1000} />
      </div>
    </div>
  );
};

export default ImagePlayer;
