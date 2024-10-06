"use client";

import React, { useEffect, useState } from "react";
import { Footer } from "@/components/sections/footer";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";

import { Hero2 } from "@/components/sections/hero2";
import { PreviousHighlights } from "@/components/sections/highlights";
import LogoReveal from "@/components/sections/logoreveal";

const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

interface PreloaderProps {
  progress: number;
}

const Preloader: React.FC<PreloaderProps> = ({ progress }) => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center flex flex-col items-center"
    >
      <div className="flex justify-center">
        <Image
          src="/tedxsjec-white.png"
          alt="TEDxSJEC"
          width={200}
          height={200}
          className="rounded-full"
          priority
        />
      </div>
      <div className="text-6xl md:text-8xl font-bold mb-8">
        <NumberTicker value={progress} className="text-[#e62b1e]" />
        <span className="text-3xl md:text-5xl ml-2 text-white">%</span>
      </div>
      <div className="w-64 md:w-96 h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#e62b1e] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="mt-8 text-lg md:text-xl font-light text-white">
        Loading ideas worth spreading...
      </div>
    </motion.div>
  </div>
);

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1000);
          return 100;
        }
        return Math.min(prevProgress + 1, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Preloader progress={progress} />;
  }

  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <main className="flex-1">
        <Hero2 />
        <PreviousHighlights />
        <LogoReveal />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
