"use client";

import React, { useState, useEffect } from "react";
import { LogoLoader } from "../ui/LogoLoader";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasShown = sessionStorage.getItem("bishorgo-loader-shown");

    if (!hasShown && !prefersReducedMotion) {
      setLoading(true);
      setShowLoader(true);
      sessionStorage.setItem("bishorgo-loader-shown", "true");
    }
  }, []);

  return (
    <>
      {showLoader && (
        <LogoLoader
          mode="full"
          onComplete={() => {
            setLoading(false);
            setShowLoader(false);
          }}
        />
      )}
      <div
        className={`transition-opacity duration-1000 ease-out flex flex-col min-h-screen ${
          loading ? "opacity-0 h-screen overflow-hidden pointer-events-none" : "opacity-100"
        }`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default AppLayout;

