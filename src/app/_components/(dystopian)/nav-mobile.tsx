"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import MarqueeContainer from "@/app/_components/(dystopian)/marquee-container";

interface Props {
  toggler: boolean;
}

const NavMobile = ({ toggler }: Props) => {
  return (
    <AnimatePresence>
      {toggler && (
        <motion.div
          className="fixed top-32 z-50 block w-screen border-x-2 border-amber-50 bg-neutral-900 md:hidden"
          initial={{ left: -100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          exit={{ left: 100, opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
            className="absolute left-0 top-0 flex h-20 w-full cursor-pointer flex-row items-center border-b-2 border-amber-50 bg-neutral-900 text-6xl font-normal uppercase transition-all hover:bg-amber-50 hover:text-neutral-900"
          >
            <MarqueeContainer text={["Home", "Home", "Home"]} />
          </motion.div>
          <motion.div
            initial={{ left: -100, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute left-0 top-20 flex h-20 w-full cursor-pointer flex-row items-center border-b-2 border-amber-50 bg-neutral-900 text-6xl font-normal uppercase transition-all hover:bg-amber-50 hover:text-neutral-900"
          >
            <MarqueeContainer text={["about", "about", "about"]} />
          </motion.div>
          <motion.div
            initial={{ left: -100, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute left-0 top-40 flex h-20 w-full cursor-pointer flex-row items-center border-b-2 border-amber-50 bg-neutral-900 text-6xl font-normal uppercase transition-all hover:bg-amber-50 hover:text-neutral-900"
          >
            <MarqueeContainer text={["events", "events", "events"]} />
          </motion.div>
          <motion.div
            initial={{ left: -100, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute left-0 top-60 flex h-20 w-full cursor-pointer flex-row items-center border-b-2 border-amber-50 bg-neutral-900 text-6xl font-normal uppercase transition-all hover:bg-amber-50 hover:text-neutral-900"
          >
            <MarqueeContainer text={["contact", "contact", "contact"]} />
          </motion.div>
          <motion.div
            initial={{ left: -100, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute left-0 top-80 flex h-20 w-full cursor-pointer flex-row items-center border-b-2 border-amber-50 bg-neutral-900 text-6xl font-normal uppercase transition-all hover:bg-amber-50 hover:text-neutral-900"
          >
            <MarqueeContainer text={["sponsors", "sponsors", "sponsors"]} />
          </motion.div>
          <motion.div
            initial={{ left: -100, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="absolute left-0 top-[400px] flex h-20 w-full cursor-pointer flex-row items-center border-b-2 border-amber-50 bg-amber-50 text-6xl font-normal uppercase text-neutral-900 transition-all hover:bg-neutral-900 hover:text-amber-50"
          >
            <MarqueeContainer
              text={["login to be cool", "i promise cool stuff"]}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavMobile;
