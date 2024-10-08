"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import images from "@/images/logo-white.avif";
import { useRef } from "react";
const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const timeline = gsap.timeline({});
    timeline
      .from(".img1", { duration: 1.1, scale: 0 })
      .from(".head1", { duration: 0.7, x: -1500 })
      .from(".split-text", { duration: 0.4, opacity: 0, stagger: 0.2 })
      .from(".head", { y: -300, duration: 0.8, opacity: 0 }, "end")

      // .from(".img", { y: -300, duration: 0.5, opacity: 0 }, "<")
      .from(".back-top", { opacity: 0, duration: 0.8 }, "end")
      .from(".dot", { opacity: 0, duration: 1, stagger: 0.3, repeat: -1 });
    // .from(".nav-links", { y: 100, duration: 0.3, opacity: 0, stagger: 0.3 }, "<");
    gsap.to(scrollRef.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1,
    });
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        {/* Background Image */}
        <div className="flex flex-col justify-center items-center h-screen  w-full relative">
          {/* Background Image */}
          <div className="absolute z-30 flex justify-center items-center img1 ">
            <div className="relative w-[100vw] h-[100vh] lg:w-[73vw] lg:h-[73vh] opacity-20 mt-20  ">
              <Image
                src="/logo.avif"
                className="hero_icon"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Logo Image */}
          <div>
            <Image
              src={images}
              alt="Logo"
              width={700}
              height={700}
              className="rounded-full head1 "
            />
          </div>

          {/* Coming Soon Text */}
          <div className=" tok sm:text-5xl md:text-6xl text-2xl lg:text-7xl font-bold relative text-center mt-4 md:mt-6">
            <div className="inline-block space-x-2  coming">
              {["C", "O", "M", "I", "N", "G"].map((letter) => (
                <span key={letter} className="split-text">
                  {letter}
                </span>
              ))}
            </div>
            <span className="ml-10 lg:ml-15"></span>
            <div className="inline-block space-x-2  soon text-[#EB0028]">
              {["S", "O", "O", "N"].map((letter) => (
                <span key={letter} className="split-text">
                  {letter}
                </span>
              ))}
            </div>
            <div className="inline-block space-x-2  text-[white]">
              {[".", ".", "."].map((letter) => (
                <span key={letter} className="dot">
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div
          ref={scrollRef}
          className="absolute bottom-6 sm:bottom-10 flex flex-col items-center justify-center cursor-pointer back-top group"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-white/90 text-2xl group-hover:scale-110 transition-transform">
            ↓
          </span>
          <span className="mt-1 text-sm text-white/90 group-hover:text-red-500 transition-colors">
            Scroll Down
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
