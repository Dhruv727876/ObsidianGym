import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { MembershipCards } from "@/components/MembershipCards";
import { Navigation } from "@/components/Navigation";
import { CoachPreview } from "@/components/CoachPreview";
import { ApertureImage } from "@/components/ApertureImage";
import { HorizontalScroll } from "@/components/HorizontalScroll";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="obsidian-noise min-h-screen bg-obsidian-void selection:bg-obsidian-gold selection:text-obsidian-void relative">
      {/* HUD Background Decorations (Static but cinematic) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1] hidden lg:block overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-full border-l border-white/10" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
        <div className="absolute bottom-12 left-12 h-64 w-[1px] bg-gradient-to-t from-obsidian-gold/40 to-transparent" />
        <div className="absolute top-48 left-24 whitespace-nowrap text-[8px] tracking-[0.5em] font-sans text-obsidian-gold/40 rotate-90 origin-left">
          PROTOCOL_INITIALIZED // ARCHIVE_v_02.9
        </div>
      </div>

      <Navigation />

      <Hero />
      <Manifesto />

      {/* New 2D Scroll Experience */}
      <HorizontalScroll />

      <section className="py-32 lg:py-64 px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 bg-obsidian-void border-y border-white/[0.03] overflow-hidden relative z-10">
        <div className="flex flex-col justify-center relative">
          {/* Section Deco Number */}
          <div className="absolute -top-16 lg:-top-32 -left-6 lg:-left-12 text-[8rem] lg:text-[15rem] font-serif italic text-white/[0.01] select-none pointer-events-none">02</div>
          <h2 className="text-label text-obsidian-gold tracking-[0.5em] mb-8 lg:mb-12 transform -translate-x-2 lg:-translate-x-4 opacity-50 relative">THE PHILOSOPHY</h2>
          <h3 className="text-4xl sm:text-6xl lg:text-9xl font-serif italic text-obsidian-offwhite mb-8 lg:mb-12 leading-[0.85] tracking-tighter mix-blend-difference">THE<br />SILENT<br /><span className="text-obsidian-gold">AUTHORITY</span></h3>
          <p className="text-obsidian-muted max-w-sm mb-8 lg:mb-12 text-[13px] sm:text-sm leading-relaxed tracking-tight font-light opacity-60">
            We do not compete for attention. We command it through the meticulous engineering of human performance. Each movement is a calculation; each protocol a masterpiece.
          </p>
          <div className="group cursor-pointer inline-flex items-center gap-6">
            <div className="h-[1px] w-16 sm:w-24 bg-obsidian-gold group-hover:w-40 transition-all duration-700" />
            <span className="text-label tracking-[0.3em] group-hover:translate-x-4 transition-transform duration-700">READ THE PROTOCOL</span>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[90vh] w-full transform lg:translate-y-24 group">
          <ApertureImage
            src="/fac-1.png"
            alt="Elite Environment"
          />
          <div className="absolute inset-x-0 bottom-8 lg:bottom-12 px-8 lg:px-12 z-20 flex justify-between items-end">
            <span className="text-[8px] lg:text-[10px] tracking-[0.6em] text-obsidian-gold/60 border-l border-obsidian-gold/20 pl-4 uppercase">ZONE 02 / RECOVERY VOID</span>
            <span className="text-[10px] tracking-[0.3em] text-white/20 select-none hidden md:block uppercase">MÉTICULEUSEMENT CONÇU</span>
          </div>
        </div>
      </section>

      <CoachPreview />
      <MembershipCards />

      {/* Final CTA Section - more premium */}
      <section className="py-48 lg:py-64 flex flex-col items-center justify-center bg-obsidian-void px-6 sm:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-gold/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-24 opacity-[0.03] text-[15vw] font-serif italic text-white select-none pointer-events-none break-all max-w-full text-center">TRANSCENDENCE</div>
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-serif italic text-obsidian-offwhite text-center mb-12 lg:mb-20 tracking-tighter leading-none relative z-10 transition-transform duration-1000">ENGRAVE YOUR<br /><span className="text-obsidian-gold">LEGACY</span></h2>

        <div className="relative group">
          <div className="absolute inset-0 bg-obsidian-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <button className="relative h-16 sm:h-20 px-12 sm:px-24 bg-obsidian-gold text-obsidian-void text-label tracking-[0.5em] hover:bg-obsidian-offwhite transition-all duration-700 overflow-hidden group/btn flex items-center justify-center">
            <span className="relative z-10">APPLY FOR MEMBERSHIP</span>
            <div className="absolute inset-0 w-0 bg-white group-hover/btn:w-full transition-all duration-700 opacity-20" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

