import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export const Hero2 = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Animating hero text
    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );

    // Animating scroll button
    gsap.to(scrollRef.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="w-full h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Hero Text */}
      <div
        ref={heroRef}
        className="relative w-full h-full flex flex-col items-center justify-center text-center z-[1] p-4"
      >
        <Image
          src="/tedxsjec-white.png"
          alt="TEDxSJEC"
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          className="rounded-full"
        />
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white"
          style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          Coming Soon!
        </h1>
        <p
          className="text-white/[0.9] text-lg sm:text-xl mt-2 max-w-3xl leading-relaxed"
          style={{
            textShadow: "0 3px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          Join us for a transformative experience where ideas spark innovation
          and creativity. Stay tuned for an unforgettable TEDx journey filled
          with powerful talks, bright ideas, and inspiring connections.
        </p>

        {/* Scroll Down Button */}
        <div
          ref={scrollRef}
          className="absolute bottom-6 sm:bottom-10 flex flex-col items-center justify-center cursor-pointer group"
          onClick={() => window.scrollBy(0, window.innerHeight)}
        >
          <span className="text-white/90 text-2xl group-hover:scale-110 transition-transform">
            ↓
          </span>
          <span className="mt-1 text-sm text-white/90 group-hover:text-red-500 transition-colors">
            Scroll Down
          </span>
        </div>
      </div>
    </section>
  );
};
