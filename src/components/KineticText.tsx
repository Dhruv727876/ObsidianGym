"use client";

import { motion } from "framer-motion";

export function KineticText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <div className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.015 } },
        }}
        className="flex flex-wrap items-center overflow-visible"
      >
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
            {word.split("").map((char, charIdx) => (
              <motion.span
                key={charIdx}
                variants={{
                  hidden: { 
                    y: "110%", 
                    opacity: 0,
                    rotateX: 45,
                    scale: 0.8
                  },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    rotateX: 0,
                    scale: 1,
                    transition: { 
                      duration: 1.2, 
                      ease: [0.16, 1, 0.3, 1],
                      opacity: { duration: 0.8 }
                    } 
                  },
                }}
                className="italic font-serif inline-block relative font-normal"
                style={{ 
                  transformOrigin: "bottom",
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
