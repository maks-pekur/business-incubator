import { useRef, useEffect, useCallback, useState } from "react";

const VideoCover = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  const onScroll = useCallback((event) => {
    const { scrollY } = window;
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (!videoRef.current.duration) return;

    let currentTime = scrollY / (videoRef.current.duration * 30);

    if (Number.isFinite(currentTime)) {
      videoRef.current.currentTime = currentTime;
    }
  }, [scrollY]);

  return (
    <div className="w-screen overflow-y-scroll fixed top-0">
      <video ref={videoRef} controls={false} loop playsInline className="">
        <source src="/preview.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoCover;
