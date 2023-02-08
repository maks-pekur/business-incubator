import { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const VideoCover = () => {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log(scrollYProgress);

    if (!videoRef.current) return;
    if (!videoRef.current.duration) return;

    const currentTime = scrollYProgress * videoRef.current.duration;
    if (Number.isFinite(currentTime)) {
      videoRef.current.currentTime = currentTime;
    }
  }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.video
        ref={videoRef}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100vh",
        }}
        controls={false}
        loop
        playsInline
      >
        <source src="/preview.mp4" type="video/mp4" />
      </motion.video>
    </motion.div>
  );
};

export default VideoCover;
