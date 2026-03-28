"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function ApertureImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Animate the mask from a center slit to wide aperture
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [
      "inset(0 45% 0 45%)", // Start: Narrow vertical slit
      "inset(0 0% 0 0%)",   // Mid: Wide open
      "inset(0 0% 0 0%)",   // Stay open
      "inset(0 45% 0 45%)"  // Out: Close back
    ]
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const hudY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={container} className="relative w-full h-full overflow-hidden bg-obsidian-void">
      <motion.div
        style={{ clipPath, scale }}
        className="relative w-full h-full will-change-transform flex items-center justify-center"
      >
        <motion.div 
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover grayscale brightness-75 transition-all duration-700 hover:brightness-100"
            sizes="100vw"
          />
        </motion.div>

        {/* Parallax HUD Depth Layer */}
        <motion.div 
          style={{ y: hudY }}
          className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center opacity-40 select-none"
        >
          <div className="relative w-full h-full border border-obsidian-gold/10 m-12 lg:m-24 flex flex-col justify-between p-8">
            <div className="flex justify-between items-start">
               <span className="text-[10px] font-mono tracking-[0.4em] text-obsidian-gold">IMAGE_ANALYSIS_ACTIVE</span>
               <span className="text-[10px] font-mono text-obsidian-gold/50">REL_02.99</span>
            </div>
            <div className="flex justify-between items-end">
               <div className="flex flex-col gap-1">
                 <div className="w-12 h-[1px] bg-obsidian-gold/30" />
                 <div className="w-8 h-[1px] bg-obsidian-gold/30" />
               </div>
               <span className="text-[10px] font-mono text-obsidian-gold/50 uppercase tracking-tighter">Coord: 40.71 / -74.00</span>
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-void via-transparent to-transparent opacity-80 z-20" />
      </motion.div>
    </div>
  );
}
