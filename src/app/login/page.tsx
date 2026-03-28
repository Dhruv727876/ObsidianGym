"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Cpu, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { getAssetPath } from "@/lib/utils";

export default function Login() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toTimeString().split(' ')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Parallax Effect for the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [-500, 500], [-20, 20]);
  const moveY = useTransform(springY, [-500, 500], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="bg-obsidian-void min-h-screen flex items-center justify-center p-4 lg:p-12 obsidian-noise overflow-hidden relative"
    >
      {/* HUD Elements */}
      <div className="absolute top-12 left-12 flex flex-col gap-2 z-50">
        <Link href="/" className="group flex items-center gap-4 text-obsidian-offwhite/40 hover:text-obsidian-gold transition-all duration-500">
           <div className="p-2 border border-white/5 group-hover:border-obsidian-gold/40 rounded-full transition-all">
             <ArrowLeft size={16} />
           </div>
           <span className="text-[10px] tracking-[0.4em] font-sans uppercase group-hover:translate-x-2 transition-transform">EXIT TO TERMINAL</span>
        </Link>
      </div>

      <div className="absolute top-12 right-12 text-right z-50">
         <div className="text-[10px] tracking-[0.5em] text-obsidian-gold font-sans mb-1">{time}</div>
         <div className="text-[8px] tracking-[0.3em] text-obsidian-offwhite/20 font-sans uppercase italic">ENCRYPTED CONNECTION : ACTIVE</div>
      </div>

      <div className="max-w-screen-2xl w-full h-[90vh] flex flex-col md:flex-row bg-[#111] border border-white/5 relative shadow-2xl overflow-hidden group/container">
        
        {/* Left Side: Editorial Image with Parallax */}
        <div className="flex-1 relative h-[300px] md:h-full overflow-hidden border-r border-white/5">
          <motion.div 
             style={{ x: moveX, y: moveY, scale: 1.1 }}
             className="relative h-full w-full"
          >
            <Image 
               src={getAssetPath("/hero-athlete.png")}
               alt="Elite Archive"
               fill
               className="object-cover grayscale brightness-50"
               priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian-void via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 bg-obsidian-gold/5 mix-blend-overlay" />
          </motion.div>

          <div className="absolute bottom-16 left-16 right-16 z-20">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-obsidian-gold" />
                  <h4 className="text-[10px] tracking-[0.8em] text-obsidian-gold opacity-80 uppercase">VAULT ACCESS 01</h4>
                </div>
                <h2 className="text-5xl lg:text-7xl font-serif italic text-obsidian-offwhite leading-none tracking-tighter">AUTHENTICATE<br />YOUR IDENTITY</h2>
             </motion.div>
          </div>

          {/* Technical Deco */}
          <div className="absolute top-16 right-16 opacity-30">
             <div className="w-16 h-16 border-t border-r border-obsidian-gold/40" />
          </div>
        </div>

        {/* Right Side: Technical Form */}
        <div className="flex-1 p-16 lg:p-32 flex flex-col justify-center bg-[#0a0a0a] relative overflow-hidden">
           {/* Decorative Grid */}
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
           >
              <div className="flex items-center gap-4 mb-16 opacity-40">
                <Cpu size={14} className="text-obsidian-gold" />
                <span className="text-[9px] tracking-[0.6em] text-obsidian-offwhite uppercase">SYSTEM_LOGIN_INITIATED</span>
              </div>
              
              <form className="space-y-16">
                 <div className="relative group">
                    <label className="text-[9px] tracking-[0.5em] font-sans text-obsidian-gold uppercase block mb-6 px-1">PROTOCOL IDENTIFIER</label>
                    <div className="relative border-b border-white/10 group-focus-within:border-obsidian-gold transition-all duration-700">
                      <input 
                         type="text" 
                         className="bg-transparent py-4 outline-none w-full text-xl lg:text-2xl font-serif italic tracking-tight text-obsidian-offwhite placeholder:text-white/5"
                         placeholder="OBS-XXXX-XXXX"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity">
                         <ShieldCheck size={18} className="text-obsidian-gold" />
                      </div>
                    </div>
                 </div>

                 <div className="relative group">
                    <label className="text-[9px] tracking-[0.5em] font-sans text-obsidian-gold uppercase block mb-6 px-1">SECURITY PASSKEY</label>
                    <div className="relative border-b border-white/10 group-focus-within:border-obsidian-gold transition-all duration-700">
                      <input 
                         type="password" 
                         className="bg-transparent py-4 outline-none w-full text-xl lg:text-2xl font-serif italic tracking-tight text-obsidian-offwhite placeholder:text-white/5"
                         placeholder="••••••••••••"
                      />
                    </div>
                 </div>

                 <div className="pt-8 flex flex-col gap-12">
                    <button className="relative w-full h-20 group/btn bg-transparent border border-obsidian-gold/30 overflow-hidden transition-all duration-700">
                      <div className="absolute inset-0 bg-obsidian-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                      <span className="relative z-10 text-label tracking-[0.5em] text-obsidian-gold group-hover/btn:text-obsidian-void transition-colors duration-700">AUTHORIZE ACCESS</span>
                    </button>
                    
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-t border-white/5 pt-8">
                      <span className="text-[9px] tracking-[0.3em] font-sans text-white/20 hover:text-obsidian-gold cursor-pointer transition-colors duration-500 uppercase">FORGOT_IDENTIFIER</span>
                      <div className="w-1 h-1 bg-white/5 rounded-full hidden lg:block" />
                      <span className="text-[9px] tracking-[0.3em] font-sans text-white/20 hover:text-obsidian-gold cursor-pointer transition-colors duration-500 uppercase">ENROLLMENT_PORTAL</span>
                    </div>
                 </div>
              </form>

              {/* Status Indicator */}
              <div className="mt-24 flex items-center gap-6">
                <div className="flex gap-1">
                   {[1,2,3,4,5].map(i => (
                     <motion.div 
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                        className="w-1 h-1 bg-obsidian-gold/40"
                     />
                   ))}
                </div>
                <span className="text-[8px] tracking-[0.4em] text-white/20 uppercase">AWAITING_INPUT...</span>
              </div>
           </motion.div>
        </div>
      </div>
      
      {/* Background Frame Lines */}
      <div className="absolute inset-0 border-[40px] border-obsidian-void pointer-events-none z-40" />
      <div className="absolute inset-12 border border-white/5 pointer-events-none z-40" />
    </main>
  );
}
