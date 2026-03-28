import { getAssetPath } from "./utils";

export const SiteConfig = {
  branding: {
    name: "OBSIDIAN",
    tagline: "THE SILENT AUTHORITY",
    founded: "EST. MMXXIV",
    version: "PROTOCOL_v2.9.0",
  },
  splash: {
    status: "AUTHENTICATING PROTOCOLS",
    delay: 3000,
  },
  navigation: [
    { name: "MEMBERSHIP", href: "/membership" },
    { name: "FACILITIES", href: "/facilities" },
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "LOGIN", href: "/login" },
  ],
  hero: {
    title: "THE DISCIPLINE OF CHAMPIONS",
    statusBadge: "PROTOC-009 / EST. MMXXIV",
    cta: "START PROTOCOL",
    scrollHint: "SCROLL TO ANALYZE",
    image: getAssetPath("/hero-athlete.png"),
  },
  sections: {
    philosophy: {
      title: "THE SILENT AUTHORITY",
      subtitle: "THE PHILOSOPHY",
      description: "We do not compete for attention. We command it through the meticulous engineering of human performance. Each movement is a calculation; each protocol a masterpiece.",
      cta: "READ THE PROTOCOL",
      decoNumber: "02",
      image: getAssetPath("/fac-1.png"),
      zone: "ZONE 02 / RECOVERY VOID",
    },
    cta: {
      title: "ENGRAVE YOUR LEGACY",
      tag: "TRANSCENDENCE",
      buttonText: "APPLY FOR MEMBERSHIP",
    }
  },
  social: [
    { name: "INSTAGRAM", href: "#" },
    { name: "TWITTER", href: "#" },
    { name: "ENQUIRIES", href: "mailto:cinefix1.12.19@gmail.com" },
  ],
  legal: [
    { name: "PRIVACY", href: "/privacy" },
    { name: "TERMS", href: "/terms" },
    { name: "COOKIE POLICY", href: "/cookies" },
  ],
  footer: {
    copyright: "©2026 Designed and developed by Dhruv",
    credits: "powered by HRILAX",
  }
};
