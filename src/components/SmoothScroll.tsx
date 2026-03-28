"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useSplash } from "./LayoutProviders";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const { splashFinished } = useSplash();

  useEffect(() => {
    // Initializing Lenis with a custom luxury-tier easing function
    // This provides that "heavy", purposeful feel essential for premium branding.
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Synchronize Scroll State with Cinematic Intro
  useEffect(() => {
    if (!lenisRef.current) return;

    if (!splashFinished) {
      // Lock scrolling while the preloader is at high-gravity
      lenisRef.current.stop();
    } else {
      // Release for the elite platform reveal
      lenisRef.current.start();
    }
  }, [splashFinished]);

  return null;
}
