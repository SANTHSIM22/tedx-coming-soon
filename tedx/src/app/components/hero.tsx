'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Footer from './footer';
import { useGSAP } from '@gsap/react';
const Hero = () => {

gsap.registerPlugin(useGSAP);
const footeri = useRef();
useGSAP(() => {
  const timeline = gsap.timeline({ });
  timeline.from(".split-text", { duration:1 ,opacity:0 ,stagger:0.2})
  .from(".footeri",{y:100, duration:0.5 ,opacity:0 ,})

}, );


  return (
<div className="relative flex items-center justify-center min-h-screen">
  <div className="relative z-10 text-center">
    <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
      <span className='split-text'>C</span>
      <span className='split-text'>O</span>
      <span className='split-text'>M</span>
      <span className='split-text'>I</span>
      <span className='split-text'>N</span>
      <span className='split-text'>G</span>
      <span className='ml-10'></span>
      <span className='split-text'>S</span>
      <span className='split-text'>O</span>
      <span className='split-text'>O</span>
      <span className='split-text'>N</span>
    </p>
  </div>
</div>


  );
};

export default Hero;
