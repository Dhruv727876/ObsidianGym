"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { KineticText } from "./KineticText";

const INFRASTRUCTURE = [
  {
    id: "01",
    name: "KINETIC VOID",
    desc: "The core heavy-lift arena. High-gravity environment with integrated biometric floor sensors and zero-latency feedback loops.",
    img: getAssetPath("/void-core.png"),
    specs: [
      { label: "BIOMETRIC NODES", value: "248 / M2" },
      { label: "GRAVITY SYNC", value: "ACTIVE" },
      { label: "OXYGEN RATIO", value: "24.5%" }
    ]
  },
  {
    id: "02",
    name: "NEURO SYNC",
    desc: "Precision reactive training. Real-time neural mapping combined with variable resistance kinetic architecture.",
    img: getAssetPath("/fac-1.png"),
    specs: [
      { label: "LATENCY", value: "0.08 MS" },
      { label: "NEURAL BUFF", value: "+12.4%" },
      { label: "MAPPING", value: "FULL_SURFACE" }
    ]
  },
  {
    id: "03",
    name: "RECOVERY UNIT",
    desc: "Advanced neurological restoration. Deep cryogenic immersion and infrared cellular stimulus protocols for near-instant repair.",
    img: getAssetPath("/recovery-chamber.png"),
    specs: [
      { label: "THERMAL GAP", value: "-145 C" },
      { label: "CELLULAR SYNC", value: "DEEP_TISSUE" },
      { label: "PROTOCOL_ID", value: "REC_009" }
    ]
  },
  {
    id: "04",
    name: "DATA ARCHIVE",
    desc: "Strategic performance analysis. Every heartbeat, every rep, every variable is indexed into the permanent obsidian protocol.",
    img: getAssetPath("/fac-2.png"),
    specs: [
      { label: "STORAGE", value: "PETABYTE ELITE" },
      { label: "DATA_STREAMS", value: "1,400 / LOG" },
      { label: "ACCESS", value: "SOVEREIGN ONLY" }
    ]
  }
];

export function InfrastructureSystems() {
  return (
    <section id="infrastructure" className="bg-obsidian-void py-64 px-8 lg:px-24 relative overflow-hidden">
      {/* Background Architectural Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[18vw] font-serif italic text-white/[0.01] select-none pointer-events-none whitespace-nowrap z-0">
        INFRASTRUCTURE
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-48 border-b border-white/5 pb-16">
          <div className="max-w-2xl">
            <h2 className="text-label text-obsidian-gold tracking-[0.5em] mb-8">// ARCHITECTURE_II.v9</h2>
            <KineticText 
               text="THE STRATEGIC INFRASTRUCTURE" 
               className="text-6xl lg:text-7xl font-serif italic text-obsidian-offwhite tracking-tighter leading-[0.9]"
            />
          </div>
          <div className="text-right mt-12 md:mt-0">
             <div className="text-[10px] tracking-[0.4em] text-obsidian-gold/40 uppercase mb-2">SYSTEMS_ACTIVE</div>
             <div className="h-[2px] w-48 bg-gradient-to-r from-transparent to-obsidian-gold/20" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-32 gap-x-24">
          {INFRASTRUCTURE.map((zone, idx) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row gap-12 items-start"
            >
              {/* Image Cluster */}
              <div className="relative w-full md:w-80 h-[450px] shrink-0 overflow-hidden border border-white/5 group-hover:border-obsidian-gold/40 transition-colors duration-700">
                <Image 
                  src={zone.img}
                  alt={zone.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-void via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 text-[10px] font-mono tracking-[0.6em] text-obsidian-gold/60">{zone.id} / 04</div>
              </div>

              {/* Data Panel */}
              <div className="flex-1 pt-6">
                <h3 className="text-4xl lg:text-5xl font-serif italic text-obsidian-offwhite mb-8 group-hover:text-obsidian-gold transition-colors duration-700">
                  {zone.name}
                </h3>
                <p className="text-obsidian-muted text-sm leading-relaxed tracking-tight max-w-sm mb-12 opacity-60">
                  {zone.desc}
                </p>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/5 pt-12">
                   {zone.specs.map((spec) => (
                     <div key={spec.label} className="flex flex-col gap-2">
                        <span className="text-[9px] tracking-[0.4em] text-obsidian-gold/40 uppercase">{spec.label}</span>
                        <span className="text-[11px] tracking-[0.2em] font-mono text-obsidian-offwhite/80">{spec.value}</span>
                     </div>
                   ))}
                </div>

                {/* Status Bar */}
                <div className="mt-12 h-[1px] w-full bg-white/5 relative overflow-hidden">
                   <motion.div 
                      className="absolute inset-y-0 left-0 bg-obsidian-gold/40"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 0.3 + (idx * 0.1) }}
                      transition={{ duration: 2, delay: 1 }}
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
