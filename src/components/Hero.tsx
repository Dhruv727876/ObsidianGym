"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KineticText } from "./KineticText";
import { SiteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-obsidian-void">
      {/* Left Content Area - wider span */}
      <div className="relative z-20 flex flex-col justify-center px-6 sm:px-12 lg:px-24 bg-obsidian-void/60 lg:bg-transparent lg:col-span-8">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[8px] sm:text-label text-obsidian-gold mb-6 lg:mb-12 block tracking-[0.4em] sm:tracking-[0.6em] transform -translate-x-2 sm:-translate-x-4 opacity-50 uppercase">{SiteConfig.hero.statusBadge}</span>
          <KineticText 
            text={SiteConfig.hero.title} 
            className="text-3xl sm:text-5xl lg:text-[7.5vw] xl:text-[7.5rem] font-serif italic text-obsidian-offwhite leading-[0.9] mb-8 lg:mb-12 tracking-tighter"
          />
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="group cursor-pointer flex items-center gap-4 sm:gap-6 active:scale-95 transition-transform"
          >
            <div className="h-[1px] w-8 sm:w-24 bg-obsidian-gold group-hover:w-40 transition-all duration-700" />
            <span className="text-[10px] sm:text-label tracking-[0.3em] group-hover:translate-x-4 transition-transform duration-700">{SiteConfig.hero.cta}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Imagine Area */}
      <div className="absolute inset-0 lg:relative lg:inset-auto h-full w-full z-10 overflow-hidden lg:col-span-4 border-l border-white/5">
        <motion.div
          initial={{ scale: 1.2, filter: "brightness(0)" }}
          animate={{ scale: 1, filter: "brightness(1) contrast(1.1)" }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full relative group"
        >
          <Image
            src={SiteConfig.hero.image}
            alt={SiteConfig.branding.tagline}
            fill
            className="object-cover grayscale group-hover:scale-110 transition-transform duration-[5s] brightness-50 lg:brightness-100"
            priority
          />
          {/* Subtle Dynamic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-void via-obsidian-void/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-obsidian-void/30 mix-blend-multiply" />
        </motion.div>
      </div>
      
      {/* Scroll Indicator (Bottom Right) */}
      <div className="absolute bottom-12 right-12 z-40 hidden lg:flex flex-col items-center gap-4">
         <span className="text-[10px] tracking-[0.5em] text-obsidian-gold/40 vertical-rl">{SiteConfig.hero.scrollHint}</span>
         <div className="w-[1px] h-24 bg-gradient-to-b from-obsidian-gold/40 to-transparent" />
      </div>

      {/* Gold Hairline Separator (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-obsidian-gold/20 z-30" />
    </section>
  );
}
