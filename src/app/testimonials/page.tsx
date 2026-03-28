"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Quote, Activity, TrendingUp, Zap } from "lucide-react";
import { KineticText } from "@/components/KineticText";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { ArchitecturalGrid } from "@/components/ArchitecturalGrid";

import { getAssetPath } from "@/lib/utils";

const TESTIMONIALS = [
   {
      quote: "The result of this protocol is authority. Not just over the weights, but over your own destiny. I no longer just train; I perform. Obsidian is the missing piece in my professional architecture.",
      author: "MARCUS VALE",
      role: "CEO / ATHLETE",
      img: getAssetPath("/marcus.png"),
      id: "01",
      metrics: [
         { label: "BIOMETRIC_SYNC", value: "98.4%" },
         { label: "POWER_OUTPUT", value: "+24.5%" },
         { label: "PROTOCOL_COMPLIANCE", value: "DEEP_ALPHA" }
      ]
   },
   {
      quote: "Obsidian transcends the gym experience. It's an editorial approach to physical refinement. Every detail is surgically perfect. This is not for everyone; only for those who understand the value of pure output.",
      author: "ELENA CHEN",
      role: "ELITE PERFORMANCE SPECIALIST",
      img: getAssetPath("/elena.png"),
      id: "02",
      metrics: [
         { label: "NEURAL_LATENCY", value: "0.05 MS" },
         { label: "RECOVERY_RATE", value: "OPTIMAL" },
         { label: "CELLULAR_AGE", value: "-4.2 YR" }
      ]
   },
   {
      quote: "Pure silence. Pure output. The standard of this facility is unlike anything on the planet. This is for the 1%. Every session feels like a strategic operation rather than a workout.",
      author: "DARIUS NOVA",
      role: "STRENGTH ARCHITECT",
      img: getAssetPath("/coach-1.png"),
      id: "03",
      metrics: [
         { label: "METABOLIC_THRUST", value: "850W" },
         { label: "VO2_MAX_SYNC", value: "ELITE" },
         { label: "SYSTEM_STABILITY", value: "CORE_OMEGA" }
      ]
   }
];

export default function Testimonials() {
   const [isTouch, setIsTouch] = useState(false);
   useEffect(() => {
     setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
   }, []);

   return (
      <main className="bg-obsidian-void obsidian-noise min-h-screen relative overflow-hidden">
         <Navigation />

         {/* Background Architectural Elements */}
         <div className="fixed inset-0 z-0">
            <ArchitecturalGrid />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-obsidian-void to-transparent pointer-events-none" />
         </div>

         <header className="pt-48 lg:pt-64 pb-20 lg:pb-32 px-6 sm:px-12 lg:px-24 relative z-10">
            <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
               <h1 className="text-label text-obsidian-gold tracking-[0.6em] mb-8 lg:mb-12 opacity-60 font-mono text-[9px] sm:text-xs">CLIENT_ARCHIVE_v.02</h1>
               <KineticText
                  text="VOICE OF THE AUTHORITY"
                  className="text-4xl sm:text-6xl lg:text-[10rem] font-serif italic text-obsidian-offwhite leading-[0.85] tracking-tighter mb-12 lg:mb-16"
               />
               <p className="max-w-xl text-obsidian-muted text-[10px] sm:text-[11px] tracking-[0.4em] uppercase leading-relaxed opacity-40">
                  REALITY IS ARCHITECTED. HEAR FROM THE ONES WHO TOOK COMMAND OF THEIR EVOLUTION.
               </p>
            </div>
         </header>

         <section className="pb-64 relative z-10 px-6 sm:px-12 lg:px-24">
            <div className="max-w-screen-2xl mx-auto space-y-48">
               {TESTIMONIALS.map((t, idx) => (
                  <motion.div
                     key={t.author}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                     className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24 relative ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  >
                     {/* Large Portrait Element */}
                     <div className="relative w-full lg:w-[45%] aspect-[4/5] overflow-hidden border border-white/5 bg-obsidian-charcoal/20 group">
                        <Image
                           src={t.img}
                           alt={t.author}
                           fill
                           sizes="(max-width: 1024px) 100vw, 45vw"
                           className={`object-cover transition-all duration-[2.5s] ease-out
                              ${isTouch ? 'grayscale-0 brightness-[0.85] saturate-[1.1]' : 'grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-110'}
                           `}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-obsidian-void via-transparent to-transparent ${isTouch ? 'opacity-60' : 'opacity-80'}`} />

                        {/* Floating HUD elements */}
                        <div className="absolute top-6 lg:top-8 left-6 lg:left-8 flex items-center gap-4">
                           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-obsidian-gold animate-pulse" />
                           <span className="text-[9px] sm:text-[10px] text-obsidian-gold tracking-[0.4em] font-mono">LIVE_FEED_{t.id}</span>
                        </div>

                        <div className="absolute bottom-6 lg:bottom-8 right-6 lg:right-8 text-right">
                           <div className="text-[8px] sm:text-[9px] text-white/20 tracking-[0.4em] font-mono mb-1 uppercase">AUTHENTICATED_VOICE</div>
                           <div className="h-[1px] w-24 sm:w-32 bg-obsidian-gold/20" />
                        </div>
                     </div>

                     {/* Large Quote / Information Block */}
                     <div className="flex-1 flex flex-col justify-center py-6 lg:py-12">
                        <div className="relative mb-8 lg:mb-12">
                           <Quote size={60} className="absolute -top-10 -left-6 lg:size-[80px] lg:-top-12 lg:-left-8 text-obsidian-gold opacity-[0.05] -rotate-12 pointer-events-none" />
                           <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-obsidian-offwhite leading-relaxed tracking-tight relative z-10 selection:bg-obsidian-gold selection:text-obsidian-void">
                              "{t.quote}"
                           </h2>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-12 border-t border-white/5 pt-16">
                           <div>
                              <h4 className="text-3xl font-serif italic text-obsidian-gold mb-2 tracking-tight">{t.author}</h4>
                              <p className="text-[10px] tracking-[0.6em] text-obsidian-offwhite/40 uppercase font-mono">{t.role}</p>
                           </div>

                           {/* High-Precision Metric HUD */}
                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                              {t.metrics.map(m => (
                                 <div key={m.label} className="group/metric flex flex-col gap-3">
                                    <span className="text-[9px] tracking-[0.4em] text-obsidian-gold/40 uppercase group-hover/metric:text-obsidian-gold transition-colors">{m.label}</span>
                                    <div className="flex items-center gap-3">
                                       <Activity size={12} className="text-obsidian-gold/60" />
                                       <span className="text-[13px] tracking-[0.2em] font-mono text-white/80">{m.value}</span>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Subtle Call to Action inside each testimonial */}
                        <div className="mt-20 flex items-center gap-6 opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
                           <span className="text-[10px] tracking-[0.6em] font-mono">VIEW_PROTOCOL →</span>
                           <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-obsidian-gold/40 transition-all duration-700" />
                        </div>
                     </div>

                     {/* Staggered Vertical Index */}
                     <div className="absolute -top-24 right-0 lg:-right-12 text-[12vw] font-serif italic text-white/[0.02] select-none pointer-events-none z-0">
                        {t.id}
                     </div>
                  </motion.div>
               ))}
            </div>
         </section>

         <Footer />
      </main>
   );
}
