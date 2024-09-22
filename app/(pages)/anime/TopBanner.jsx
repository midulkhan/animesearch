"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import SearchInput from "@/components/ui/searchInput";
import { motion } from "framer-motion";

export default function TopBanner({ Title, GradientTitle }) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold  text-black dark:text-white font-sans tracking-tight"
      >
        {Title}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="ml-3">{GradientTitle}</span>
          </div>
        </div>
      </motion.h1>

      <SearchInput />
    </HeroHighlight>
  );
}
