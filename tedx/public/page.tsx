"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/hero";
import dynamic from "next/dynamic";
import { BacktoTopButton } from "./components/back-to-top";
import Loading from "./components/loading";
import Footer from "./components/footer";
import ScrollVelocity from "./components/scroll-velocity";
import Image from "next/image";
import ScrollVelocity1 from "./components/scroll-velocity2";
// Dynamic import for the gallery with 3js rendering
const Gallery = dynamic(
  () => import("./components/gallery").then((mod) => mod.Gallery),
  { ssr: false },
);

export default function Home() {
  const images = [
    {
      title: "Moonbeam",
      thumbnail: "/img1_.jpg.jpg",
    },
    {
      title: "Cursor",
      thumbnail: "/img2_.jpg.jpg",
    },
    {
      title: "Rogue",
      thumbnail: "/img3_.jpg.jpg",
    },
    {
      title: "Editorially",
      thumbnail: "/img4_.jpg.jpg",
    },
    {
      title: "Editrix AI",
      thumbnail: "/img5_.jpg.jpg",
    },
    {
      title: "Moonbeam 2",
      thumbnail: "/img6_.jpg.jpg",
    },
    {
      title: "Cursor 2",
      thumbnail: "/img7_.jpg.jpg",
    },
    {
      title: "Rogue 2",
      thumbnail: "/img8_.jpg.jpg",
    },
    {
      title: "Editorially 2",
      thumbnail: "/img9_.jpg.jpg",
    },
    {
      title: "3",
      thumbnail: "/IMG_3034.jpg",
    },
    {
      title: "3",
      thumbnail: "/SAT00249.jpg",
    },
    {
      title: "3",
      thumbnail: "/IMG_3414.jpg",
    },
    {
      title: "3",
      thumbnail: "/IMG_2865.jpg",
    },
  ];
  const velocity = [2, -2];
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
      //
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
        <section id="gallery-section" className="">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-red-600 text-center">
              Highlights of <span className="text-white">TEDxSJEC 2022</span>
            </h1>
          </div>
          <div className="w-screen hidden lg:flex justify-center no-scrollbar cursor-pointer">
            <div className="w-[100vw] mb-24 lg:w-[100vw] h-[60vh] md:h-[75vh] lg:h-[100vh] flex justify-center no-scrollbar flex-row md:flex-col">
              {galleryLoading ? (
                <div className="flex justify-center items-center w-full h-full">
                  <Loading /> {/* Loading spinner */}
                </div>
              ) : (
                <Gallery />
              )}
            </div>
          </div>
          <div className="w-full lg:hidden ">
            <div className="flex flex-col space-y-5 py-10">
              {velocity.map((v, index) => (
                <ScrollVelocity key={index} velocity={v}>
                  {images.map(({ title, thumbnail }) => (
                    <div
                      key={title}
                      className="relative h-[15rem] w-[18rem] md:h-[15rem] md:w-[15rem] "
                    >
                      <Image
                        src={thumbnail}
                        alt={title}
                        fill={true}
                        className="h-full w-full object-cover "
                      />
                    </div>
                  ))}
                </ScrollVelocity>
              ))}
              <ScrollVelocity1 velocity={3} movable={true}>
                <div
                  className="image-container"
                  style={{ display: "flex", gap: "10px" }}
                >
                  {Array.from({ length: 200 }).map((_, index) => (
                    <img
                      key={index}
                      src="/logo-white.png"
                      className="hero_icon"
                      alt={`Image ${index + 1}`}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "50px",
                      }} // Adjust size as needed
                    />
                  ))}
                </div>
              </ScrollVelocity1>
            </div>
          </div>
          {/* <div className="h-screen"></div> */}
          <BacktoTopButton />
        </section>
      </div>

      <Footer />
    </>
  );
}
