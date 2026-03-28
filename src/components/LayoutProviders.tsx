"use client";

import { LayoutGroup } from "framer-motion";
import { createContext, useContext, useState, useEffect } from "react";

const SplashContext = createContext({
  splashFinished: false,
  setSplashFinished: (v: boolean) => {},
});

export const useSplash = () => useContext(SplashContext);

export function LayoutProviders({ children }: { children: React.ReactNode }) {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <SplashContext.Provider value={{ splashFinished, setSplashFinished }}>
      <LayoutGroup>
        {children}
      </LayoutGroup>
    </SplashContext.Provider>
  );
}
