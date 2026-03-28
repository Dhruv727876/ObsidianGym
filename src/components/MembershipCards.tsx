"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Activity, Shield, TrendingUp, Info } from "lucide-react";
import { Perspective } from "./Perspective";
import { KineticText } from "./KineticText";
import { ArchitecturalGrid } from "./ArchitecturalGrid";

const PLANS = [
  {
    name: "ELITE",
    price: "$3,999",
    id: "01",
    features: [
      "FULL ARCHIVE ACCESS",
      "BIOMETRIC TRACKING",
      "LUXURY SUITE ACCESS",
      "PROTOCOL COACHING",
    ],
    popular: false,
    stagger: "translate-y-0 lg:z-10 bg-black/40"
  },
  {
    name: "APEX",
    price: "$7,999",
    id: "02",
    features: [
      "EVERYTHING IN ELITE",
      "DNA OPTIMIZATION",
      "CONCIERGE BOOKING",
      "RECOVERY SYSTEMS",
    ],
    popular: true,
    stagger: "lg:-translate-y-12 lg:z-20 bg-obsidian-charcoal/80 border-obsidian-gold/20"
  },
  {
    name: "SOVEREIGN",
    price: "$19,999",
    id: "03",
    features: [
      "EVERYTHING IN APEX",
      "PRIVATE BAY ACCESS",
      "CHEF-GRADE NUTRITION",
      "GENETIC BIOMARKERS",
    ],
    popular: false,
    stagger: "translate-y-0 lg:z-10 bg-black/40"
  },
];

export function MembershipCards() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section className="min-h-screen bg-obsidian-void px-8 lg:px-24 relative overflow-hidden flex flex-col justify-center py-40">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 z-0">
        <ArchitecturalGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-void via-transparent to-obsidian-void pointer-events-none opacity-90" />
      </div>

      {/* Break-out Background Branding (Diagonal / Skewed) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[25vw] font-serif italic text-white/[0.01] select-none pointer-events-none whitespace-nowrap z-0 -rotate-6 transform scale-125 hidden lg:block">
        EVOLUTION_PROTOCOLS
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-32 pb-12 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-obsidian-gold mb-8 lg:mb-12">
              <Shield size={16} className="opacity-70" />
              <span className="text-[10px] tracking-[0.8em] font-mono opacity-60 uppercase">AUTH_CLEARANCE_REQUIRED</span>
            </div>
            <h3 className="text-5xl sm:text-6xl lg:text-8xl font-serif italic text-obsidian-offwhite leading-[0.85] tracking-tighter shadow-black/80">
              SELECT YOUR<br /><span className="text-obsidian-gold">LEGACY_</span>
            </h3>
          </div>

          {/* Asymmetric Floating Label */}
          <div className="absolute -top-12 -right-12 hidden 2xl:block opacity-20">
            <div className="h-[400px] w-[1px] bg-gradient-to-b from-obsidian-gold via-transparent to-transparent mb-4" />
            <span className="text-[9px] tracking-[1em] text-obsidian-gold vertical-rl uppercase">SECURED_ARCHIVE_NODE</span>
          </div>
        </div>

        {/* Monolithic Joined Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 relative">
          {PLANS.map((plan, i) => (
            <div key={plan.name} className={`relative flex transition-transform duration-1000 ${plan.stagger}`}>
              <Perspective intensity={idxToIntensity(i)}>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  className={`group p-8 lg:p-12 backdrop-blur-3xl border border-white/5 h-full flex flex-col hover:border-obsidian-gold/40 transition-all duration-700 relative overflow-hidden
                    ${isTouch ? 'border-white/10' : ''}
                  `}
                >
                  {/* Floating ID outside content bound */}
                  <div className={`absolute top-8 right-8 text-4xl font-serif italic transition-colors ${isTouch ? 'text-obsidian-gold/10' : 'text-white/[0.03] group-hover:text-obsidian-gold/10'}`}>
                    {plan.id}
                  </div>

                  <div className="mb-10 relative z-10 text-left">
                    <h3 className="text-[10px] tracking-[1em] text-obsidian-gold/60 mb-6 font-mono uppercase">SYST_NODE_{plan.id}</h3>
                    <div className="flex flex-col">
                      <span className="text-xl font-serif italic text-obsidian-gold/40 mb-1 uppercase tracking-widest">{plan.name}</span>
                      <div className="flex items-baseline gap-4">
                        <span className={`text-5xl lg:text-6xl font-serif italic text-obsidian-offwhite transition-all duration-700 ${isTouch ? 'drop-shadow-[0_0_20px_rgba(230,195,100,0.2)]' : 'group-hover:drop-shadow-[0_0_20px_rgba(230,195,100,0.2)]'}`}>{plan.price}</span>
                        <span className="text-[9px] tracking-[0.4em] text-obsidian-offwhite/20 uppercase font-mono">/MO</span>
                      </div>
                    </div>
                  </div>

                  {/* High Quality Features Grid */}
                  <div className="flex-1 space-y-12 mb-12 relative z-10 text-left">
                    <ul className="space-y-4">
                      {plan.features.map(f => (
                        <li key={f} className={`flex gap-4 items-start text-[10px] tracking-[0.3em] transition-colors uppercase font-light leading-relaxed ${isTouch ? 'text-obsidian-offwhite/80' : 'text-obsidian-offwhite/40 group-hover:text-obsidian-offwhite/80'}`}>
                          <Check size={12} className="shrink-0 text-obsidian-gold/40 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="w-full h-14 bg-white/[0.03] border border-white/10 text-[9px] tracking-[0.8em] text-obsidian-offwhite hover:bg-obsidian-gold hover:text-obsidian-void hover:border-obsidian-gold active:scale-[0.98] transition-all duration-1000 uppercase group/btn mt-8 overflow-hidden relative"
                  >
                    <span className="relative z-10">APPLY_FOR_ACCESS</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>

                  {/* Floating status icon */}
                  <div className={`absolute bottom-10 left-10 transition-opacity ${isTouch ? 'opacity-100' : 'opacity-10 group-hover:opacity-100'}`}>
                    <Activity size={12} className="text-obsidian-gold" />
                  </div>
                </motion.div>
              </Perspective>
            </div>
          ))}
        </div>

        {/* Floating Asymmetric Detail (Bottom) */}
        <div className="mt-32 flex justify-between items-center opacity-20">
          <div className="flex gap-4 items-center">
            <Info size={14} className="text-obsidian-gold" />
            <span className="text-[9px] tracking-[0.8em] font-mono uppercase">ALL_SYSTEMS_MONITORED_BY_HRILAX_CORP</span>
          </div>
          <div className="text-[8px] tracking-[0.2em] font-mono uppercase max-w-xs text-right leading-loose">
            SUBJECT_TO_BIO_SYNC_METRICS / NON_TRANSFERABLE_ENCRYPTION_LAYER
          </div>
        </div>
      </div>
    </section>
  );
}

function idxToIntensity(i: number) {
  if (i === 1) return 8;
  return 4;
}
