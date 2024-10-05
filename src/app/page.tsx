"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Footer } from "../components/sections/footer";
import { Gallery } from "../components/sections/gallery";
import { Hero } from "../components/sections/hero";
import Image from "next/image";

const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const Preloader: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center flex flex-col items-center"
    >
      <div className="flex justify-center">
        <Image
          src="/logo-white.png"
          alt="TEDxSJEC"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
      <div className="text-6xl md:text-8xl font-bold mb-8">
        <NumberTicker value={progress} className="text-[#e62b1e]" />
        <span className="text-3xl md:text-5xl ml-2">%</span>
      </div>
      <div className="w-64 md:w-96 h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#e62b1e] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="mt-8 text-lg md:text-xl font-light">
        Loading ideas worth spreading...
      </div>
    </motion.div>
  </div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startLoading = () => {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => setLoading(false), 1000);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 50);
    };

    startLoading();

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <>
        <Preloader progress={progress} />
      </>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <main className="flex-grow">
        <section className="relative">
          <Hero />
        </section>

        <section id="gallery-section" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e62b1e] text-center mb-8 md:mb-12">
              Highlights of <span>TEDxSJEC 2022</span>
            </h1>
            <div className="w-full aspect-video md:aspect-[16/9] lg:aspect-[21/9]">
              <Gallery />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
