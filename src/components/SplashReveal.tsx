"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSplash } from "./LayoutProviders";
import { SiteConfig } from "@/lib/config";

export function SplashReveal() {
  const [loading, setLoading] = useState(true);
  const { setSplashFinished } = useSplash();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setSplashFinished(true); // Signal navigation to render its branding text
    }, SiteConfig.splash.delay);
    return () => clearTimeout(timer);
  }, [setSplashFinished]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none select-none"
        >
          {/* Fade Background */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 bg-obsidian-charcoal z-10"
          />

          <motion.div 
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative z-20 px-8"
          >
            <motion.h1
              layoutId="branding-logo"
              initial={{ clipPath: "inset(-20% 100% -20% -20%)" }}
              animate={{ clipPath: "inset(-20% -20% -20% -20%)" }}
              transition={{ 
                duration: 2, 
                delay: 0.5,
                ease: "easeInOut",
                layout: { duration: 1.5, ease: [0.77, 0, 0.175, 1] } 
              }}
              className="text-7xl lg:text-[12rem] font-serif italic text-obsidian-offwhite tracking-tighter"
            >
              {SiteConfig.branding.name}
            </motion.h1>
            <motion.div
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
               className="h-[1px] w-full bg-obsidian-gold mt-4 origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-label tracking-[0.8em] text-obsidian-gold text-center mt-8"
            >
              {SiteConfig.splash.status}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
