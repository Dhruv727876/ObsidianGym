"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface Section {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  label: string;
}

const SECTIONS_RAW: Section[] = [
  { id: "01", title: "THE ARCHIVE", subtitle: "Meticulously curated performance data points.", image: getAssetPath("/hero-athlete.png"), label: "DATA_VOID_01" },
  { id: "02", title: "EVOLUTION", subtitle: "Where ambition meets biological engineering.", image: getAssetPath("/fac-2.png"), label: "BIOMECH_UNIT_A" },
  { id: "03", title: "VOID CORE", subtitle: "The silent authority in elite conditioning.", image: getAssetPath("/void-core.png"), label: "CORE_SEC_09" },
  { id: "04", title: "SYNAPSE", subtitle: "Neural mapping for elite reaction times.", image: getAssetPath("/fac-1.png"), label: "NEURAL_NODE" },
  { id: "05", title: "RECOVERY", subtitle: "Cryogenic and neurological restoration.", image: getAssetPath("/recovery-chamber.png"), label: "RECOVERY_VOID" },
  { id: "06", title: "DISSIPATION", subtitle: "High-intensity metabolic stress management.", image: getAssetPath("/hero-athlete.png"), label: "METABOLIC_FLUX" },
  { id: "07", title: "ZENITH", subtitle: "Peak physiological output monitoring.", image: getAssetPath("/fac-2.png"), label: "ZENITH_APEX" },
  { id: "08", title: "OBLIVION", subtitle: "Total physical reset protocols.", image: getAssetPath("/fac-1.png"), label: "RESET_SYNC" },
];

const TOP_ROW = [...SECTIONS_RAW, ...SECTIONS_RAW];
const BOTTOM_ROW = [...SECTIONS_RAW, ...SECTIONS_RAW].reverse();

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [time, setTime] = useState("--:--:--");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Initial offsets tuned for absolute symmetry and synchronization
  // 50% displacement ensures both rails cover the same distance and end together
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const skew1 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, -5, 5, 0]);
  const skew2 = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 5, -5, 0]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[440vh] bg-obsidian-void overflow-visible">
      {/* Increased padding-top to account for the fixed navbar and ensure content starts below branding */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-end pb-12 overflow-hidden pt-24">

          <div 
            className="absolute inset-0 z-0 bg-obsidian-charcoal/20 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-x-0 h-[300px] top-1/2 -translate-y-1/2 bg-obsidian-gold/5 blur-[120px] pointer-events-none" />
            
            {/* Using Next Image for background to handle basePath automatically */}
            <div className="absolute inset-0 opacity-[0.02] grayscale brightness-50 z-0">
               <Image 
                 src={getAssetPath("/hero-athlete.png")} 
                 alt="HUD background" 
                 fill 
                 className="object-cover"
                 priority
               />
            </div>
          {/* Subtle Grid Pattern (CSS) */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(var(--color-obsidian-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-obsidian-gold) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
          <div className="absolute inset-x-0 top-1/2 border-t border-white/5 pointer-events-none" />
        </div>

        {/* HUD TRACKER - UPPER STATUS */}
        <div className="absolute top-6 lg:top-4 left-0 z-50 w-full px-6 lg:px-24 flex justify-between items-end opacity-40 pointer-events-none">
          <div className="flex flex-col">
            <span className="text-[9px] lg:text-[10px] tracking-[0.6em] lg:tracking-[0.8em] text-obsidian-gold font-mono uppercase">MAPPING_SECTOR_VO01</span>
          </div>
          <div className="flex items-center gap-10">
            <span className="text-[8px] lg:text-[9px] tracking-[0.2em] lg:tracking-[0.3em] text-obsidian-offwhite font-mono uppercase transition-opacity">PROTOCOL // ACTIVE</span>
          </div>
        </div>

        {/* TOP RAIL */}
        <div className="relative z-10 w-full overflow-hidden flex-1 min-h-0">
            <motion.div 
              style={{ x: x1, skewX: skew1 }}
              className="flex gap-4 lg:gap-14 px-12 h-full w-fit items-center"
            >
            {TOP_ROW.map((s, i) => (
              <ParallaxCard key={`top-${i}`} section={s} index={i} progress={smoothProgress} direction="left" />
            ))}
          </motion.div>
        </div>

        {/* HUD CENTRAL INTERFACE BRIDGE */}
        <div className="relative z-40 w-full py-4 lg:py-6 flex items-center justify-between border-y border-white/10 bg-black/95 backdrop-blur-3xl px-6 sm:px-12 lg:px-32 shrink-0">
          <div className="flex-1 flex gap-4 lg:gap-12 items-center min-w-0">
            <div className="flex flex-col truncate">
              <span className="text-[8px] lg:text-[10px] text-obsidian-gold font-mono tracking-[0.4em] uppercase mb-1 lg:mb-2 flex items-center gap-2 lg:gap-3">
                <span className="w-1.5 h-3 bg-obsidian-gold animate-pulse shrink-0" />
                <span className="truncate">LIVE_DATA // SYNC</span>
              </span>
              <div className="flex gap-1 lg:gap-1.5 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    animate={{ 
                      height: [4, 8, 4],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                    className="w-[1px] lg:w-[2px] h-[4px] bg-obsidian-gold" 
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1.5 lg:gap-2 flex-1 px-4">
            <div className="flex items-center gap-2 lg:gap-4 mb-0.5 lg:mb-1">
              <span className="text-[7px] lg:text-[9px] text-white/40 font-mono tracking-[0.3em] lg:tracking-[0.5em] uppercase">SYSTEM_SYNC</span>
              <span className="text-[7px] lg:text-[9px] text-obsidian-gold font-mono tracking-widest">{Math.round(scrollYProgress.get() * 100)}%</span>
            </div>
            <div className="w-full max-w-[120px] lg:w-80 h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-obsidian-gold"
                style={{ width: isClient ? width : "0%" }}
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-end min-w-0">
            <div className="flex items-center gap-4 lg:gap-8 mb-0.5 lg:mb-1">
              <div className="flex flex-col items-end truncate">
                <span className="text-[10px] lg:text-sm text-obsidian-gold font-mono tracking-tight leading-none">{time}</span>
                <span className="text-[7px] lg:text-[8px] text-obsidian-gold/40 font-mono uppercase tracking-[0.2em] lg:tracking-widest">REAL_TIME</span>
              </div>
              <div className="w-6 h-6 lg:w-10 lg:h-10 border border-white/10 flex items-center justify-center shrink-0">
                <div className="w-1 h-1 bg-obsidian-gold animate-ping" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM RAIL */}
        <div className="relative z-10 w-full overflow-hidden flex-1 min-h-0">
            <motion.div 
              style={{ x: x2, skewX: skew2 }}
              className="flex gap-4 lg:gap-14 px-12 h-full w-fit items-center"
            >
            {BOTTOM_ROW.map((s, i) => (
              <ParallaxCard key={`bot-${i}`} section={s} index={i} progress={smoothProgress} direction="right" />
            ))}
          </motion.div>
        </div>

        {/* HUD TRACKER - LOWER FOOTER */}
        <div className="absolute bottom-4 left-0 z-50 w-full px-12 lg:px-24 flex justify-between items-start opacity-40 pointer-events-none">
          <span className="text-[8px] lg:text-[9px] tracking-[0.4em] text-obsidian-offwhite font-mono uppercase">OBSIDIAN_SYSTEM_v2</span>
          <span className="text-[9px] lg:text-[10px] tracking-[0.6em] lg:tracking-[0.8em] text-obsidian-gold font-mono uppercase">NODES_ONLINE</span>
        </div>

      </div>
    </section>
  );
}

function ParallaxCard({ section, index, progress, direction }: { section: Section; index: number; progress: any; direction: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const y = useTransform(
    progress,
    [0, 1],
    [
      Math.sin(index * 0.8) * 35,
      Math.sin(index * 0.8 + 12) * 35
    ]
  );

  const rotate = useTransform(
    progress,
    [0, 1],
    [
      Math.sin(index * 0.4) * 2,
      Math.sin(index * 0.4 + 10) * 2
    ]
  );

  return (
    <motion.div
      style={isMounted ? { y, rotate } : {}}
      className={`relative h-full overflow-hidden border border-white/[0.07] bg-obsidian-charcoal/40 group hover:border-obsidian-gold/40 transition-all duration-700 cursor-pointer shrink-0 
        ${isTouch ? 'w-[85vw]' : 'w-[75vw] lg:w-[42vw]'}
      `}
    >
      <div className="absolute inset-x-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-30 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Image
        src={section.image}
        alt={section.title}
        fill
        sizes={isTouch ? "95vw" : "50vw"}
        className={`object-cover transition-all duration-[3s] ease-out z-0 
          ${isTouch ? 'grayscale-0 brightness-[0.95] saturate-[1.2]' : 'grayscale brightness-[0.3] group-hover:brightness-75 group-hover:grayscale-0 group-hover:scale-110'}
        `}
      />
      
      {/* HUD Scanline Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] lg:opacity-[0.05] pointer-events-none mix-blend-overlay z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(230,230,230,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(230,230,230,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Scanning Heartbeat Line */}
      <motion.div
        animate={{
          top: ["-20%", "120%"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-obsidian-gold/20 to-transparent z-20 pointer-events-none shadow-[0_0_15px_rgba(230,195,100,0.3)]"
      />

      <div className={`absolute inset-0 bg-gradient-to-t from-obsidian-void via-black/20 to-transparent z-20 ${isTouch ? 'opacity-40' : 'opacity-100'}`} />

      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-12 flex flex-col justify-end z-30 pointer-events-none overflow-hidden">
        <div className="flex items-center gap-4 mb-3 lg:mb-4">
          <div className="w-4 h-4 lg:w-6 lg:h-6 border-l border-b border-obsidian-gold/30" />
          <span className="text-obsidian-gold font-mono text-[8px] lg:text-[9px] tracking-[0.5em] font-bold uppercase">{section.label}</span>
          <div className={`h-[1px] flex-1 bg-obsidian-gold/10 origin-left transition-transform duration-1000 ${isTouch ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
        </div>
        <h4 className={`text-3xl sm:text-4xl lg:text-7xl font-serif italic leading-[0.9] tracking-tighter mb-3 lg:mb-4 transition-all duration-700 drop-shadow-2xl translate-z-10 
          ${isTouch ? 'text-obsidian-gold' : 'text-obsidian-offwhite group-hover:text-obsidian-gold group-hover:translate-x-2'}
        `}>
          {section.title}
        </h4>
        <p className={`max-w-xs text-obsidian-muted text-[10px] lg:text-xs font-light tracking-wide leading-relaxed transition-all duration-700 italic 
          ${isTouch ? 'opacity-90 translate-y-0' : 'opacity-0 group-hover:opacity-80 translate-y-4 group-hover:translate-y-0 group-hover:delay-100'}
        `}>
          {section.subtitle}
        </p>
      </div>
    </motion.div>
  );
}
