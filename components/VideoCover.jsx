import { useRef, useEffect, useCallback, useState } from "react";

const VideoCover = () => {
  const [scroll, setScroll] = useState(0);
  const videoRef = useRef(null);
  const playbackConst = 50;

  const onScroll = useCallback(() => {
    let { scrollY } = window;
    setScroll(scrollY);

    if (!videoRef.current) return;
    if (!videoRef.current.duration) return;

    // let currentTime = scrollY / videoRef.current.duration;
    let currentTime = Math.fround(scrollY / 4 / videoRef.current.duration);

    console.log(currentTime);

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
    <div className="overflow-auto w-full h-screen pt-1">
      <div className={`min-h-${Math.floor(10) * playbackConst + "px"}`}>
        <video
          ref={videoRef}
          controls={false}
          loop
          playsInline
          autoPlay
          className=""
        >
          <source src="/preview.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoCover;
