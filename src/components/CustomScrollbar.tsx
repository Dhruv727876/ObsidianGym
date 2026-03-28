"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomScrollbar() {
  const { scrollYProgress } = useScroll();
  const [isClient, setIsClient] = useState(false);
  
  // Spring physics for that high-end inertial feel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isClient) return null;

  return (
    <div className="fixed right-0 top-0 bottom-0 w-1 lg:w-4 z-[100] flex flex-col items-center group">
      {/* Scroll Track Background - Subtlest highlight */}
      <div className="absolute inset-y-0 w-px bg-white/5 right-1 lg:right-4 group-hover:bg-white/10 transition-colors" />

      {/* Vertical Progress Bar */}
      <div className="relative h-full w-full py-12 flex flex-col items-center justify-start overflow-hidden pointer-events-none">
        {/* The "monolith" handle */}
        <motion.div
          className="w-0.5 lg:w-[3px] bg-obsidian-gold origin-top shadow-[0_0_15px_rgba(230,195,100,0.4)]"
          style={{ height: "100%", scaleY }}
        />

        {/* Floating Data Accent */}
        <motion.div
          className="absolute right-6 lg:right-10 top-0 py-1 px-2 border border-white/10 bg-black/60 backdrop-blur-md flex flex-col items-end gap-1 pointer-events-none"
          style={{
            top: `${scrollPercentage}%`,
            translateY: "-50%"
          }}
        >
          <span className="text-[8px] font-mono text-obsidian-gold tracking-[0.3em] font-bold">POS.Y</span>
          <span className="text-[10px] font-mono text-white leading-none">{scrollPercentage.toString().padStart(3, '0')}%</span>
          
          <div className="w-8 h-px bg-obsidian-gold/20" />
          
          <div className="flex gap-0.5 mt-0.5">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="w-[2px] h-[2px] bg-obsidian-gold/40 rounded-full" />
             ))}
          </div>
        </motion.div>
      </div>

      {/* Top/Bottom Caps */}
      <div className="absolute top-4 right-1 lg:right-4 w-4 h-[1px] bg-white/20 origin-right scale-x-50" />
      <div className="absolute bottom-4 right-1 lg:right-4 w-4 h-[1px] bg-white/20 origin-right scale-x-50" />
      
      {/* Decorative Indexing Marker (Fixed) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-1 lg:right-4 flex flex-col gap-24 opacity-20 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-end">
            <div className="w-2 h-px bg-white" />
            <span className="text-[6px] font-mono mt-1">AXIS_{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
