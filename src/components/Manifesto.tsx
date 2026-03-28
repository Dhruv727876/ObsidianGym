"use client";

import { motion } from "framer-motion";
import { KineticText } from "./KineticText";

export function Manifesto() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-obsidian-void obsidian-noise px-8 lg:px-24 overflow-hidden py-32">
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-obsidian-gold/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        <KineticText
          text="A CURATED VOID FOR THE ELITE"
          className="text-serif text-5xl lg:text-8xl italic text-obsidian-offwhite mb-20 tracking-tighter opacity-90"
        />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl lg:text-3xl leading-[1.6] text-obsidian-muted tracking-[0.15em] font-light uppercase max-w-5xl mx-auto"
        >
          WE DO NOT BUILD BODIES. WE ENGINEER <span className="text-obsidian-offwhite font-medium">AUTHORITY</span>. THROUGH RADIANT DISCIPLINE AND THE REJECTION OF THE ORDINARY, WE TRANSCEND THE TEMPORAL LIMITS OF PHYSICAL EXISTENCE. THIS IS NOT A GYM. <br /><span className="text-obsidian-gold tracking-[0.4em] mt-8 block text-sm">THIS IS THE OBSIDIAN STANDARD.</span>
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 2, ease: "circOut" }}
          className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-obsidian-gold/30 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
