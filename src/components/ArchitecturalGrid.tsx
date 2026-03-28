"use client";

import { motion } from "framer-motion";

export function ArchitecturalGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Heavy-gravity vertical columns - standard 12-column grid lines */}
      <div className="absolute inset-0 flex justify-between px-8 lg:px-24">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-full w-[1px] bg-obsidian-gold/5 relative overflow-hidden">
            {/* The "Scanning Heartbeat" - a subtle light passing down the line */}
            <motion.div
              animate={{
                y: ["-100%", "200%"],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-obsidian-gold/20 to-transparent"
            />
          </div>
        ))}
      </div>

      {/* Horizontal Latitude Lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-24">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-obsidian-gold/5 relative">
            {/* Small Coordinate Pings at the edges */}
            <div className="absolute left-4 -top-2 text-[8px] font-mono opacity-10 tracking-widest uppercase">
              LAT_0{(i + 1) * 22}.{((i + 1) * 2345) % 10000}
            </div>
            <div className="absolute right-4 -top-2 text-[8px] font-mono opacity-10 tracking-widest uppercase">
              SYNC_0{i}
            </div>
          </div>
        ))}
      </div>

      {/* Global Vignette to deepen the "Void" feel */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-obsidian-void opacity-40 pointer-events-none" />
    </div>
  );
}
