"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useState } from "react";

const BackTop = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]); // Adjust the [0, 300] values as needed
  const [pointerEvents, setPointerEvents] = useState('none');

  useEffect(() => {
    const unsubscribe = opacity.on("change", (value) => {
      setPointerEvents(value === 0 ? "none" : "auto");
    });

    return () => {
      unsubscribe();
    };
  }, [opacity]);
  
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: "5vh",
        right: "3vw",
        width: "115px",
        height: "140px",
        opacity,
        pointerEvents: opacity.get()  === 0 ? "none" : "auto", // 添加这一行
      }}
    >
      <Image
        onClick={backTop}
        className="cursor-pointer"
        src="/lolisister2.gif"
        alt="lolisister2"
        width={350}
        height={400}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );
};

export default BackTop;
