import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LogoReveal: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger the animation when in view
          observer.unobserve(entry.target); // Stop observing after it enters view
        }
      },
      { threshold: 0.1 } // Adjust this value to set how much of the element needs to be in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 360 },
    visible: {
      opacity: 1,
      scale: 1.5,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="flex items-center justify-center min-h-screen" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="exit"
        variants={animationVariants}
        className="flex items-center justify-center"
      >
        <Image
          src="/logo.png" // Make sure to replace with your actual logo path
          alt="TEDxSJEC Logo"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          className="rounded-full" // Responsive styling
        />
      </motion.div>
    </section>
  );
};

export default LogoReveal;
