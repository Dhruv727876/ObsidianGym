"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function Philosophy() {
  return (
    <main className="bg-obsidian-void obsidian-noise min-h-screen selection:bg-obsidian-gold selection:text-obsidian-void">
      <Navigation />
      
      <header className="pt-48 pb-24 px-12 lg:px-24 border-b border-obsidian-offwhite/5">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5 }}
         >
           <h1 className="text-7xl lg:text-[12rem] font-serif italic text-obsidian-offwhite leading-[0.8] tracking-tighter mb-16">
             THE SILENT<br />AUTHORITY
           </h1>
           <div className="flex flex-col md:flex-row gap-24 items-end justify-between">
              <p className="max-w-xl text-xl lg:text-3xl font-light text-obsidian-muted leading-tight tracking-tight">
                Engineering the standard of physical and social dominance through radiant discipline.
              </p>
              <span className="text-label text-obsidian-gold tracking-[0.6em] mb-4">EST. 2024 / PROTOCOL 01</span>
           </div>
         </motion.div>
      </header>

      {/* Grid Tension Section */}
      <section className="py-32 px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-[80vh] w-full"
        >
          <Image 
             src={getAssetPath("/hero-athlete.png")}
             alt="Elite Performance"
             fill
             className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-obsidian-gold/10 mix-blend-overlay" />
        </motion.div>

        <div className="flex flex-col justify-center">
           <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
           >
              <h2 className="text-4xl lg:text-6xl font-serif italic text-obsidian-offwhite mb-12">THE CURATED VOID</h2>
              <p className="text-lg lg:text-xl text-obsidian-muted font-light leading-relaxed mb-12 tracking-tight">
                Standard fitness architecture relies on noise—neon colors, loud music, and structural clutter. In Obsidian, we utilize the void. Every element in our facility is a trophy, carefully placed to foster an atmosphere of pure, unfiltered output.
              </p>
              <div className="h-[0.5px] w-full bg-obsidian-gold/20 mb-12" />
              <div className="grid grid-cols-2 gap-12">
                 <div>
                    <h4 className="text-label text-obsidian-gold mb-4">PRINCIPLE 1</h4>
                    <p className="text-xs tracking-[0.2em] font-sans opacity-40 uppercase">MONOLITHIC LAYOUTS</p>
                 </div>
                 <div>
                    <h4 className="text-label text-obsidian-gold mb-4">PRINCIPLE 2</h4>
                    <p className="text-xs tracking-[0.2em] font-sans opacity-40 uppercase">EDITORIAL REFINEMENT</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Philosophy Closing Section */}
      <section className="py-48 px-8 flex justify-center bg-obsidian-charcoal">
         <div className="max-w-4xl text-center">
           <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-4xl lg:text-7xl font-serif italic text-obsidian-offwhite tracking-tight leading-[1.1]"
           >
              "THE RESULT OF PROTOCOL IS <br /><span className="text-obsidian-gold">AUTHORITY</span>. OVER YOUR BODY. OVER YOUR DESTINY."
           </motion.h2>
         </div>
      </section>

      <Footer />
    </main>
  );
}
