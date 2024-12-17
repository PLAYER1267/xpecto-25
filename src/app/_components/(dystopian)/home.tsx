"use client";

import React from "react";
import MarqueeContainer from "@/app/_components/(dystopian)/marquee-container";
import ClickToStart from "@/app/_components/(dystopian)/click-to-start";
import { motion } from "motion/react";
import Image from "next/image";
import BgImage from "public/transparent-bg.png";
import LogoAnimation from "@/app/_components/(dystopian)/LogoAnimation"; 

// TODO: Shift bottom marquee animation when landing animation is ready

const HomeScreen = () => {
  return (
    <div className="relative z-0 h-[calc(100vh-2px)] w-full bg-neutral-900">
      <Image
        src={BgImage}
        alt={"transparent bg"}
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <div className="h-40"></div>
      <div className="flex h-[calc(100vh-240px)] w-full flex-col items-center justify-center uppercase text-amber-50">
        <div className="text-4xl font-medium uppercase sm:text-6xl md:-mb-5 md:font-semibold">
          welcome to
        </div>
        <div>
      <LogoAnimation />
        </div>
        <div className="text-4xl font-medium uppercase sm:text-6xl md:-mt-5 md:font-semibold">
          by iit mandi
        </div>
        <div className="relative">
          <ClickToStart />
        </div>
      </div>
      <motion.div
        className={`absolute bottom-0 left-0 flex h-16 w-full flex-row items-center overflow-hidden border-y-2 border-amber-50 bg-neutral-900 text-4xl font-normal uppercase`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.span
          className="flex h-full w-full flex-col items-center justify-center"
          initial={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <MarqueeContainer
            text={[
              "the biggest fest of the himalayas",
              "32 to 56 march 2025",
              "the biggest fest of the himalayas",
              "32 to 56 march 2025",
            ]}
            delay={0.25}
          />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default HomeScreen;
