"use client";

import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ReactNode } from "react";

const Lenis = ({ children }: { children: ReactNode }) => {
  const lenis = useLenis();

  useGSAP(() => {
    function update(time: number) {
      lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.25,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
