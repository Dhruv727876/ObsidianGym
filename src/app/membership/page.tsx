"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MembershipCards } from "@/components/MembershipCards";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = [
  { q: "WHAT IS THE SELECTION CRITERIA?", a: "Membership in Obsidian is not open to all. Every applicant undergoes a performance assessment and a consultation at our Data Hub." },
  { q: "IS THE FACILITY OPEN 24/7?", a: "The facility operates for the convenience of the members. Personalized access allows for any-hour performance architecture." },
  { q: "ARE THERE GUEST PASSES AVAILABLE?", a: "Sovereign Tier includes 4 guest passes per month. Apex Tier allows for 2. Elite Tier is exclusive to the member only." },
  { q: "CAN I TRANSFER MY PROTOCOL?", a: "Protocols are tailored to the individual's DNA and history. They are non-transferable." },
];

export default function Membership() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-obsidian-void obsidian-noise min-h-screen">
      <Navigation />
      
      <header className="pt-48 pb-24 px-12 lg:px-24">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5 }}
         >
           <h1 className="text-7xl lg:text-[10rem] font-serif italic text-obsidian-offwhite leading-[0.8] mb-12 uppercase tracking-tighter">
             CHOOSE<br />YOUR<br /><span className="text-obsidian-gold">PROTOCOL</span>
           </h1>
           <p className="max-w-2xl text-xl lg:text-3xl text-obsidian-muted font-light leading-tight tracking-tight">
             Select the depth of your commitment. Three levels of access, infinite levels of transformation.
           </p>
         </motion.div>
      </header>

      <MembershipCards />

      {/* FAQ Section */}
      <section className="py-32 px-12 lg:px-24 bg-obsidian-charcoal">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-24">
            <div className="flex-1">
               <h2 className="text-label text-obsidian-gold tracking-[0.5em] mb-8">INQUIRIES</h2>
               <h3 className="text-5xl font-serif italic text-obsidian-offwhite">PROTOCOL<br />FAQ</h3>
            </div>
            
            <div className="flex-2 w-full space-y-12">
               {FAQ.map((item, idx) => (
                 <div key={idx} className="border-b border-obsidian-offwhite/5 pb-10 cursor-pointer group" onClick={() => setOpen(open === idx ? null : idx)}>
                   <div className="flex items-center justify-between mb-6">
                     <h4 className="text-sm tracking-[0.2em] font-sans text-obsidian-offwhite group-hover:text-obsidian-gold transition-colors">{item.q}</h4>
                     <ChevronDown className={cn("transition-transform duration-500 text-obsidian-gold", open === idx ? "rotate-180" : "")} />
                   </div>
                   <motion.div
                     initial={false}
                     animate={{ height: open === idx ? "auto" : 0, opacity: open === idx ? 1 : 0 }}
                     className="overflow-hidden"
                   >
                     <p className="text-sm opacity-40 font-light leading-relaxed tracking-tight max-w-xl pb-6">
                       {item.a}
                     </p>
                   </motion.div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

// Inline cn to avoid import issues
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
