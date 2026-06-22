"use client";

import React, { useState, useEffect } from "react";
import { LogoLoader } from "../ui/LogoLoader";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setLoading(false);
    }
  }, []);

  if (!mounted) {
    // Prevent server-side flash using cinematic background color
    return <div className="bg-[#002B20] min-h-screen" />;
  }

  return (
    <>
      {loading && (
        <LogoLoader
          mode="full"
          onComplete={() => setLoading(false)}
        />
      )}
      <div
        className={`transition-opacity duration-1000 ease-out flex flex-col min-h-screen ${
          loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
        }`}
      >
        {!loading && (
          <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};
export default AppLayout;

