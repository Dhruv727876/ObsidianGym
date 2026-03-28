"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ApertureImage } from "@/components/ApertureImage";
import { KineticText } from "@/components/KineticText";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Hash, Activity, Minimize2 } from "lucide-react";

const ZONES = [
  {
    id: "01",
    name: "STRENGTH MONOLITH",
    desc: "Surgical-grade steel. Pure performance environment for the disciplined elite. High-gravity environment with integrated biometric floor sensors and zero-latency feedback loops.",
    img: "/void-core.png",
    specs: [
      { label: "BIOMETRIC NODES", value: "248 / M2" },
      { label: "GRAVITY SYNC", value: "ACTIVE" },
      { label: "OXYGEN RATIO", value: "24.5%" }
    ]
  },
  {
    id: "02",
    name: "RECOVERY VOID",
    desc: "Absolute sensory deprivation. Zero-gravity systems for neural recalibration. Deep cryogenic immersion and infrared cellular stimulus protocols for near-instant repair.",
    img: "/recovery-chamber.png",
    specs: [
      { label: "THERMAL GAP", value: "-145 C" },
      { label: "CELLULAR SYNC", value: "DEEP_TISSUE" },
      { label: "PROTOCOL_ID", value: "REC_009" }
    ]
  },
  {
    id: "03",
    name: "NEURAL HUB",
    desc: "Real-time biometric analytics. Every rep tracked, every millisecond measured. Neural mapping for elite reaction times.",
    img: "/fac-1.png",
    specs: [
      { label: "LATENCY", value: "0.08 MS" },
      { label: "NEURAL BUFF", value: "+12.4%" },
      { label: "MAPPING", value: "FULL_SURFACE" }
    ]
  },
  {
    id: "04",
    name: "KINETIC LAB",
    desc: "Variable resistance kinetic architecture designed for explosive power output and multidimensional movement optimization.",
    img: "/fac-2.png",
    specs: [
      { label: "TORQUE MAX", value: "850 NM" },
      { label: "AXIS SYNC", value: "QUAD-LINK" },
      { label: "SYSTEM_LOAD", value: "NOMINAL" }
    ]
  }
];

export default function Facilities() {
  return (
    <main className="bg-obsidian-void obsidian-noise min-h-screen relative overflow-x-hidden">
      <Navigation />

      {/* HUD BACKGROUND DECO - ASYMMETRIC */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-0 right-[20vw] w-[1px] h-full bg-white/40" />
        <div className="absolute bottom-[40vh] left-0 w-full h-[1px] bg-white/40" />
        <div className="absolute top-48 left-24 text-[10px] tracking-[1em] vertical-rl text-obsidian-gold font-mono uppercase">ARCHIVE_SYSTEM_SYNC_ACTIVE</div>
      </div>

      <header className="pt-64 pb-48 px-12 lg:px-24 relative z-10 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-32 relative">
            <div className="flex-1 overflow-visible max-w-full">
              <span className="text-[10px] tracking-[1em] text-obsidian-gold mb-16 block opacity-50 font-mono">INFRASTRUCTURE_MODULE_v.03</span>
              <KineticText
                text="THE ENVIRONMENTS"
                className="text-6xl lg:text-[7.5vw] xl:text-[7.5rem] font-serif italic text-obsidian-offwhite leading-none tracking-tighter mix-blend-difference"
              />
            </div>

            <div className="absolute -bottom-24 right-0 opacity-10 hidden 2xl:block">
              <div className="h-[2px] w-[30vh] bg-obsidian-gold origin-bottom-right rotate-90" />
            </div>
          </div>
        </div>
      </header>

      <section className="pb-96 relative z-10">
        <div className="max-w-screen-2xl mx-auto space-y-40 lg:space-y-48">
          {ZONES.map((zone, idx) => (
            <div key={zone.name} className="px-12 lg:px-24">
              <div className={`relative flex flex-col items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Image Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full lg:w-3/4 group shadow-[0_0_100px_rgba(0,0,0,0.5)] z-0`}
                >
                  <div className="relative aspect-[16/10] lg:aspect-[21/9] overflow-hidden border border-white/5 bg-obsidian-charcoal/40">
                    <Image
                      src={zone.img}
                      alt={zone.name}
                      fill
                      className="object-cover grayscale brightness-40 contrast-125 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-[3.5s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-void via-black/20 to-transparent z-10 opacity-60" />
                  </div>
                </motion.div>

                {/* Refactored Data Card */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-obsidian-charcoal/90 backdrop-blur-3xl p-10 lg:p-14 border border-white/10 shadow-2xl relative z-20 w-full lg:w-[500px] mt-[-100px] lg:mt-0 ${idx % 2 === 0 ? 'lg:-ml-32' : 'lg:-mr-32'}`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-[1px] bg-obsidian-gold/40" />
                    <span className="text-[10px] tracking-[0.8em] text-obsidian-gold font-mono font-bold uppercase">ZONE_{zone.id}</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-serif italic text-obsidian-offwhite mb-6 tracking-tighter leading-tight">
                    {zone.name}
                  </h2>
                  
                  <p className="text-[14px] text-obsidian-muted font-light leading-relaxed tracking-wide mb-12 opacity-80 border-l border-obsidian-gold/20 pl-6">
                    {zone.desc}
                  </p>

                  {/* Stats Strip */}
                  <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-10">
                    {zone.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center group/spec">
                        <span className="text-[9px] tracking-[0.4em] text-obsidian-gold/40 uppercase font-mono group-hover/spec:text-obsidian-gold transition-colors">{spec.label}</span>
                        <div className="flex-1 border-b border-white/5 mx-4 border-dashed opacity-20" />
                        <span className="text-[13px] tracking-[0.05em] font-mono text-white/70 group-hover/spec:text-white transition-colors">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Aesthetic HUD detail */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b border-r border-obsidian-gold/20 pointer-events-none" />
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
