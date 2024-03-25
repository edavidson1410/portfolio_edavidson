'use client';

import Button from '@/components/Button';
import Canvas from '@/components/Canvas';
import React from 'react';

const HeroSection = () => {

  const headerTransition = "";

  return (
    <section className="flex justify-center h-screen relative bottom-36" id="hero">
      <Canvas />
      <div className="relative flex flex-col gap-4 content-center justify-center">
        <h1 className="text-6xl font-black animate z-10 bg-eggShell">Eric Davidson</h1>
        <p className="z-10 bg-eggShell">Web Developer. Front-End, Back-End. Results.</p>
        <a 
        href="/Eric_Davidson_Resume.pdf" target="_blank"
        ><Button text="Download Resume" className="p-1 text-xl z-10"/></a>
      </div>
    </section>
  );
};

export default HeroSection;
