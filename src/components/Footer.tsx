"use client";

import Link from "next/link";
import { SiteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative py-24 bg-obsidian-charcoal border-t border-obsidian-offwhite/5 px-8 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 w-full mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-6xl font-serif italic text-obsidian-offwhite mb-8">{SiteConfig.branding.name}</h2>
            <p className="text-obsidian-muted max-w-sm text-sm leading-relaxed tracking-tight">
              {SiteConfig.sections.philosophy.description}
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-label text-obsidian-gold">EXPLORE</h4>
            {SiteConfig.navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm opacity-50 hover:opacity-100 hover:text-obsidian-gold transition-all">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-label text-obsidian-gold">CONNECT</h4>
            {SiteConfig.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm opacity-50 hover:opacity-100 hover:text-obsidian-gold transition-all">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-obsidian-offwhite/5 mb-8" />
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Left: Copyright */}
          <div className="text-[11px] tracking-[0.25em] font-sans opacity-60 uppercase text-center md:text-left text-obsidian-offwhite">
            <span>{SiteConfig.footer.copyright}</span>
          </div>

          {/* Middle: Legal */}
          <div className="flex justify-center gap-8 text-[11px] tracking-[0.25em] font-sans opacity-60 uppercase text-obsidian-offwhite">
            {SiteConfig.legal.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-obsidian-gold transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Brand Credits */}
          <div className="text-[11px] tracking-[0.25em] font-sans opacity-80 uppercase text-center md:text-right text-obsidian-gold font-medium">
            <span>{SiteConfig.footer.credits}</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Branding */}
      <div className="absolute -bottom-24 -right-24 text-[20rem] font-serif italic text-obsidian-offwhite/[0.02] pointer-events-none select-none">
        VOID
      </div>
    </footer>
  );
}
