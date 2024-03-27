'use client';

import Button from '@/components/Button';
import Canvas from '@/components/Canvas';
import React from 'react';

const HeroSection = () => {

  const headerTransition = "";

  // TODO: Improve Canvas speed

  return (
    <section className="flex justify-center h-screen relative bottom-36 md:overflow-hidden z-0 md:z-10" id="hero">
      <Canvas />
      <div className="flex items-center justify-center flex-wrap">
        <div className="absolute w-fit h-fit bg-eggShell flex flex-col gap-4 p-6 rounded-lg">
          <h1 className="text-6xl font-black animate  bg-eggShell">Eric Davidson</h1>
          <p className="z-10 bg-eggShell">Web Developer. Front-End, Back-End. Results.</p>
          <a 
          href="/Eric_Davidson_Resume.pdf" target="_blank"
          ><Button text="Download Resume" className="p-1 text-xl z-10"/></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
