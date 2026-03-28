"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ApertureImage } from "./ApertureImage";
import { useSplash } from "./LayoutProviders";

import { SiteConfig } from "@/lib/config";

export function Navigation() {
  const pathname = usePathname();
  const { splashFinished } = useSplash();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-[100] bg-transparent"
      >
        <div className="max-w-full mx-auto px-6 sm:px-12 py-6 flex items-center justify-between overflow-hidden">
          <div className="flex-1 hidden lg:flex gap-12 items-center">
            {SiteConfig.navigation.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-label hover:text-obsidian-gold transition-colors",
                  pathname === link.href ? "text-obsidian-gold" : "text-obsidian-offwhite"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/" className="flex-none max-w-[50vw]">
            {splashFinished && (
              <motion.h1
                layoutId="branding-logo"
                className="text-2xl sm:text-4xl font-serif italic tracking-tighter hover:text-obsidian-gold transition-colors truncate"
              >
                {SiteConfig.branding.name}
              </motion.h1>
            )}
          </Link>

          <div className="flex-1 flex gap-4 sm:gap-12 items-center justify-end">
            <div className="hidden lg:flex gap-12 items-center mr-12">
              {SiteConfig.navigation.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-label hover:text-obsidian-gold transition-colors",
                    pathname === link.href ? "text-obsidian-gold" : "text-obsidian-offwhite"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 sm:p-4 z-[110] relative"
              aria-label="Toggle Menu"
            >
              <motion.div 
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="w-6 h-[1px] bg-obsidian-gold" 
              />
              <motion.div 
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-6 h-[1px] bg-obsidian-gold" 
              />
              <motion.div 
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="w-6 h-[1px] bg-obsidian-gold" 
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[105] bg-obsidian-void p-12 lg:hidden flex flex-col justify-center gap-12"
      >
        <div className="flex flex-col gap-8">
          {SiteConfig.navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-6xl font-serif italic tracking-tighter text-obsidian-offwhite hover:text-obsidian-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-[1px] bg-obsidian-gold mt-12" />
          <div className="text-[10px] tracking-[0.5em] text-obsidian-gold/40 font-mono">
            {SiteConfig.branding.founded} // {SiteConfig.branding.version}
          </div>
        </div>
      </motion.div>
    </>
  );
}
