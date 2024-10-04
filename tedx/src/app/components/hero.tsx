"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import images from "@/images/logo-white.png";

const Hero = () => {

    gsap.registerPlugin(useGSAP);         
    useGSAP(() => {
        const timeline = gsap.timeline({});
        timeline
            .from(".img1", { duration: 1.1,scale:0})
            .from(".head1",{duration:0.7,x:-1500})
            .from(".split-text", { duration: 0.4, opacity: 0, stagger: 0.2 })
            .from(".head", { y: -300, duration: 0.8, opacity: 0 },'end')
    

            // .from(".img", { y: -300, duration: 0.5, opacity: 0 }, "<")
            .from(".back-top",{opacity:0,x:300,duration:0.8},'end')
            .from(".dot", { opacity: 0, duration: 1, stagger: 0.3, repeat: -1});
        // .from(".nav-links", { y: 100, duration: 0.3, opacity: 0, stagger: 0.3 }, "<");
    });

    return (
        <>
        <div className="flex flex-col justify-center items-center  ">
    
            {/* Background Image */}
            <div className="flex flex-col justify-center items-center h-screen  w-full relative">
    {/* Background Image */}
    <div className="absolute -z-20 flex justify-center items-center img1">
        <div className="relative w-[100vw] h-[100vh] lg:w-[73vw] lg:h-[73vh] opacity-30 mt-20  ">
            <Image src="/logo.png" className="hero_icon" alt="Background Image" layout="fill" objectFit="cover" />
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
    <div className="lg:ml-32 tok sm:text-5xl md:text-6xl text-2xl lg:text-7xl font-bold relative text-center mt-4 md:mt-6">
        <div className="inline-block space-x-2 coming">
            {["C", "O", "M", "I", "N", "G"].map((letter) => (
                <span key={letter} className="split-text">{letter}</span>
            ))}
        </div>
        <span className="ml-10"></span>
        <div className="inline-block space-x-2 soon text-[#EB0028]">
            {["S", "O", "O", "N"].map((letter) => (
                <span key={letter} className="split-text">{letter}</span>
            ))}
        </div>
        <div className="inline-block space-x-2  text-[white]">
                        {[".", ".", "."].map((letter) => (
                            <span key={letter} className="dot">{letter}</span>
                        ))}
                    </div>
    </div>
</div>

    
            {/* Scroll Down Button */}
            <div className="absolute bottom-10 flex justify-center items-center w-full mt-10">
                <a
                    className="z-40"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById("gallery-section");
                        section?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <div className="w-[35px] h-[64px] flex justify-center items-start p-2">
                        <button>
                            {/* Arrow Icon */}
                            {/* <div className="arrow-container">
                                <FaAnglesDown className="arrow" size={70} />
                            </div> */}
                        </button>
                    </div>
                </a>
            </div>
        </div>
    </>
    
    );
};

export default Hero;
