"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArchitecturalGrid } from "./ArchitecturalGrid";
import { Hash, Activity } from "lucide-react";

interface Coach {
  name: string;
  role: string;
  img: string;
  bio: string;
  id: string;
  stats: { label: string; value: string }[];
}

const COACHES: Coach[] = [
  {
    name: "MARCUS VALE",
    role: "HEAD OF STRENGTH",
    img: "/coach-1.png",
    bio: "Former special forces performance lead with 15 years experience in elite strength conditioning.",
    id: "MV_01",
    stats: [
      { label: "EXP", value: "15+ YR" },
      { label: "RATE", value: "98.2%" },
      { label: "FOCUS", value: "FORCE" }
    ]
  },
  {
    name: "YARA CHEN",
    role: "PERFORMANCE ARCHITECT",
    img: "/coach-2.png",
    bio: "Master of biomechanics and neuromuscular efficiency, specializing in structural longevity.",
    id: "YC_02",
    stats: [
      { label: "EXP", value: "12+ YR" },
      { label: "RATE", value: "99.8%" },
      { label: "FOCUS", value: "NEURAL" }
    ]
  },
];

export function CoachPreview() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    // ... (rest of the component)
    <section className="min-h-screen bg-obsidian-void px-8 lg:px-24 relative overflow-hidden flex items-center py-20 lg:py-0">
      {/* Background Grids */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ArchitecturalGrid />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-obsidian-void to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10 w-full">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-32 items-center">
          
          {/* Context Header */}
          <div className="w-full xl:w-1/4 pt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-label text-obsidian-gold tracking-[0.5em] mb-8 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-obsidian-gold animate-pulse" />
                COMMAND_CENTER_AUTH
              </h2>
              <h3 className="text-6xl lg:text-7xl font-serif italic text-obsidian-offwhite mb-10 leading-[0.8] tracking-tighter shadow-black/80">
                THE<br /><span className="text-obsidian-gold">MASTERS</span>
              </h3>
              <p className="text-obsidian-muted max-w-sm mb-12 text-xs lg:text-sm leading-relaxed tracking-tight font-light opacity-60 relative">
                <span className="absolute -left-12 top-0 text-[10px] tracking-[0.5em] vertical-rl text-white/20 uppercase font-mono">ENCRYPT_VOICE</span>
                Our coaches are strategic partners in your evolution, selected from the global top 0.01% of human performance science.
              </p>
            </motion.div>
          </div>

          {/* Interactive Profile Grid - FULL VIEWPORT USE */}
          <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-8 min-h-[600px] h-[80vh]">
            {COACHES.map((coach, idx) => (
              <CoachCard key={coach.id} coach={coach} index={idx} isTouch={isTouch} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoachCard({ coach, index, isTouch }: { coach: Coach; index: number; isTouch?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative h-full overflow-hidden border transition-all duration-1000 
        ${isTouch ? 'border-obsidian-gold/20 bg-obsidian-charcoal/60' : 'border-white/5 bg-obsidian-charcoal/40 backdrop-blur-3xl hover:border-obsidian-gold/40'}
      `}
    >
      <Image
        src={coach.img}
        alt={coach.name}
        fill
        sizes="(max-width: 1024px) 100vw, 35vw"
        className={`object-cover transition-all duration-1000 ease-out z-0 scale-105 group-hover:scale-110 
          ${isTouch ? 'grayscale-0 brightness-[0.85] saturate-[1.1]' : 'grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100'}
        `}
      />

      {/* Layered Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-t from-obsidian-void via-obsidian-void/20 to-transparent z-10 ${isTouch ? 'opacity-60' : 'opacity-100'}`} />
      
      {/* Static Info - Identifier */}
      <div className={`absolute top-8 left-8 z-20 flex items-center gap-4 transition-opacity duration-1000 ${isTouch ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
        <Hash size={14} className="text-obsidian-gold" />
        <span className="text-[10px] tracking-[0.4em] font-mono text-obsidian-offwhite uppercase">{coach.id}</span>
      </div>

      {/* Main Content Area */}
      <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-end z-20">
        <div className={`transition-transform duration-1000 ease-out-quint ${isTouch ? 'translate-y-0' : 'translate-y-[280px] xl:translate-y-[320px] group-hover:translate-y-0'}`}>
          <h3 className="text-4xl lg:text-7xl font-serif italic text-obsidian-offwhite mb-2 leading-none tracking-tighter mix-blend-difference">
            {coach.name}
          </h3>
          <p className="text-obsidian-gold text-[10px] tracking-[0.6em] lg:tracking-[0.8em] font-mono mb-8 lg:mb-12 uppercase">
            {coach.role}
          </p>

          {/* Revealable Details Area */}
          <div className={`transition-all duration-1000 delay-300 space-y-8 lg:space-y-12 ${isTouch ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'}`}>
            <p className="text-obsidian-muted text-xs lg:text-sm leading-relaxed max-w-xs tracking-tight">
              {coach.bio}
            </p>

            {/* Performance Stats HUD */}
            <div className="flex gap-8 lg:gap-12 pt-6 lg:pt-8 border-t border-white/10">
              {coach.stats.map(s => (
                <div key={s.label} className="flex flex-col gap-1.5">
                  <span className="text-[8px] tracking-[0.4em] text-obsidian-gold/60 uppercase font-mono">{s.label}</span>
                  <span className="text-[10px] lg:text-[11px] tracking-[0.1em] text-obsidian-offwhite font-mono">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Access CTA */}
            <button className="h-12 lg:h-14 px-8 lg:px-10 border border-obsidian-gold/20 text-obsidian-gold text-[8px] lg:text-[9px] tracking-[0.5em] font-mono hover:bg-obsidian-gold hover:text-obsidian-void transition-all duration-700 uppercase flex items-center justify-center active:scale-95">
              INITIATE_SYNC_V01
            </button>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute bottom-4 right-4 text-obsidian-gold/20 font-mono text-[8px] select-none tracking-widest opacity-0 group-hover:opacity-100">
        PROTOCOL_V2.9
      </div>
    </motion.div>
  );
}
