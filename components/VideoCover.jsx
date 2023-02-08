import { useRef, useEffect, useCallback, useState } from "react";

const VideoCover = () => {
  const [scroll, setScroll] = useState(0);
  const videoRef = useRef(null);

  const onScroll = useCallback(() => {
    let { scrollY } = window;
    console.log(scrollY / (videoRef.current.duration * 9));
    setScroll(scrollY);
    if (!videoRef.current) return;
    if (!videoRef.current.duration) return;

    let currentTime = scrollY / (videoRef.current.duration * 9);

    if (Number.isFinite(currentTime)) {
      videoRef.current.currentTime = currentTime;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <div className="w-screen overflow-y-scroll fixed top-0">
      <video ref={videoRef} controls={false} loop playsInline className="">
        <source src="/preview.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCover;
