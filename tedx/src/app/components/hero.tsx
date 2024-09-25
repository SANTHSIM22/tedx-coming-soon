"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        const timeline = gsap.timeline({});
        timeline
            .from(".split-text", { duration: 0.5, opacity: 0, stagger: 0.2 })
            .to(".tok", { duration: 0.5, y: 150, scale: 0.7 })
            .from(".img1", { duration: 0.5, scale: 0 })
            .to(".img1", { duration: 0.5, scale: 0.58, opacity: 1 })
            .from(".toggle-1", { x: -80, duration: 0.5, opacity: 0 })
            .from(".toggle-2", { x: 80, duration: 0.5, opacity: 0 }, "<")
            .from(".head", { y: -300, duration: 0.5, opacity: 0 })
            .from(".footeri", { y: 100, duration: 0.5, opacity: 0, stagger: 0.3 })
            // .from(".img", { y: -300, duration: 0.5, opacity: 0 }, "<")
            .from(".l", { y: 100, duration: 0.5, opacity: 0, stagger: 0.3 });
        // .from(".nav-links", { y: 100, duration: 0.3, opacity: 0, stagger: 0.3 }, "<");
    });

    return (
        <>
            <div className="relative min-h-screen">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl md:text-9xl  flex ">
                        <div className="inline-block toggle-1 font-extrabold text-[#EB0028] "> TED </div>
                        <span className="mx-16 md:mx-36 "></span>
                        <div className="inline-block toggle-2 text-5xl md:text-9xl">SJEC</div>
                    </div>
                </div>
                <div className="absolute inset-0 -z-20 flex items-center justify-center mr-2">
                    <div className="relative w-[50vw] h-[50vw] max-w-[430px] max-h-[430px] img1">
                        <Image src={"/logo.png"} alt="Background Image" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center tok">
                    <div className="text-6xl  font-bold mt-4 text-white font-[Satoshi] md:text-9xl">
                        <div className="inline-block space-x-2 text-2xl md:text-9xl">
                            <span className="split-text">C</span>
                            <span className="split-text">O</span>
                            <span className="split-text">M</span>
                            <span className="split-text">I</span>
                            <span className="split-text">N</span>
                            <span className="split-text">G</span>
                        </div>
                        <span className="ml-10"></span>
                        <div className="inline-block space-x-2 text-[#EB0028] text-2xl md:text-9xl">
                            <span className="split-text">S</span>
                            <span className="split-text">O</span>
                            <span className="split-text">O</span>
                            <span className="split-text">N</span>
                        </div>
                    </div>
                    <div className="absolute xs:bottom-10 bottom-[240px] md:bottom-32 w-full flex justify-center items-center mt-10 ">
                        <a
                        className="z-40"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const section = document.getElementById("gallery-section");
                                section?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                                <motion.div
                                    animate={{
                                        y: [0, 24, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                    }}
                                    className="w-3 h-3 rounded-full bg-white mb-1"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
