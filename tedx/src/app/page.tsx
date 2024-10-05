"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/hero";
import dynamic from "next/dynamic";
import { BacktoTopButton } from "./components/back-to-top";
import Loading from "./components/loading";
import Footer from "./components/footer";

// Dynamic import for the gallery with 3js rendering
const Gallery = dynamic(
  () => import("./components/gallery").then((mod) => mod.Gallery),
  { ssr: false },
);

export default function Home() {
  const [galleryLoading, setGalleryLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGalleryLoading(false);
    }, 5000); // Simulated loading time for the gallery

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const renderScene = () => {
      animationFrameId = requestAnimationFrame(renderScene);
      // Make sure your 3D rendering logic is inside here
      // For example, update your 3js scene or camera
    };

    if (!galleryLoading) {
      renderScene(); // Start rendering once the gallery has loaded
    }

    return () => cancelAnimationFrame(animationFrameId); // Clean up when the component unmounts
  }, [galleryLoading]);

  return (
    <>
      <div className="relative min-h-screen">
        <div>
          <Hero />
        </div>
      </div>

      <div>
        <section id="gallery-section" className="h-screen mt-28">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-red-600 text-center">
              Highlights of <span className="text-white">TEDxSJEC 2022</span>
            </h1>
          </div>
          <div className="w-screen flex justify-center no-scrollbar cursor-pointer">
            <div className="w-[100vw] mb-24 lg:w-[70vw] h-[60vh] md:h-[75vh] lg:h-[90vh] flex justify-center no-scrollbar flex-row md:flex-col">
              {galleryLoading ? (
                <div className="flex justify-center items-center w-full h-full">
                  <Loading /> {/* Loading spinner */}
                </div>
              ) : (
                <Gallery />
              )}
            </div>
          </div>

          <BacktoTopButton />
        </section>
      </div>

      <Footer />
    </>
  );
}
