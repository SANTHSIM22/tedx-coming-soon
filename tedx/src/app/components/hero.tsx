'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Footer from './footer';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import images from '@/images/WhatsApp_Image_2024-09-19_at_13.08.36_a968201f-removebg.png';

const Hero = () => {
  gsap.registerPlugin(useGSAP);
  const footeri = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({});
    timeline
      .from('.split-text', { duration: 1, opacity: 0, stagger: 0.2 })
      .to('.tok', { duration: 1, y: 150, scale: 0.7 })
      .from('.img1', { duration: 1, scale: 0 })
      .to('.img1', { duration: 1, scale: 0.58, opacity: 1 })
      .from('.toggle-1', { x: -80, duration: 1, opacity: 0 })
      .from('.toggle-2', { x: 80, duration: 1, opacity: 0 }, '<')
      .from('.head', { y:-300, duration: 1, opacity: 0 })
      .from('.footeri', { y: 100, duration: 0.5, opacity: 0,stagger:0.3 })
      .from('.img', { y:-300, duration: 1, opacity: 0 },'<' )
      .from('.l', { y: 100, duration: 0.5, opacity: 0,stagger:0.3 })
      .from('.nav-links', { y: 100, duration: 0.5, opacity: 0,stagger:0.3 },'<');

  });

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-xl sm:text-6xl md:text-7xl lg:text-7xl text-white">
            <div className="inline-block toggle-1 font-extrabold text-[#EB0028]"> TED </div>
            <span className="mx-20"></span>
            <div className="inline-block toggle-2">SJEC</div>
          </div>
        </div>
        <div className="absolute inset-0 -z-20 flex items-center justify-center mr-2">
          <div className="relative w-[50vw] h-[50vw] max-w-[430px] max-h-[430px] img1">
            <Image
              src={images}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center tok">
          <div className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-4 text-white font-[Satoshi]">
            <div className="inline-block space-x-2">
              <span className="split-text">C</span>
              <span className="split-text">O</span>
              <span className="split-text">M</span>
              <span className="split-text">I</span>
              <span className="split-text">N</span>
              <span className="split-text">G</span>
            </div>
            <span className="ml-10"></span>
            <div className="inline-block space-x-2 text-[#EB0028]">
              <span className="split-text">S</span>
              <span className="split-text">O</span>
              <span className="split-text">O</span>
              <span className="split-text">N</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
