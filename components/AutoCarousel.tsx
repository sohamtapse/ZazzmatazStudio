"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SliderImages = () => {
  const slides = [
    { img: "/hero-photographer.jpg" },
    { img: "/hero-photographer.jpg" },
    { img: "/hero-photographer.jpg" },
    { img: "/hero-photographer.jpg" },
  ];

  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="w-full relative overflow-hidden">
      <motion.div
        className="flex "
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div key={index} className="w-full shrink-0 px-2">
            <Image
              src={slide.img}
              alt="slider"
              width={1000}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderImages;
