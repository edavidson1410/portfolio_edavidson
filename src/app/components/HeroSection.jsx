import Button from '@/components/Button';
import React from 'react';

const HeroSection = () => {

  const headerTransition = "";

  return (
    <section className="flex justify-center h-screen relative bottom-36" id="hero">
    {/* offcenter */}
      <div className="flex flex-col gap-4 content-center justify-center">
        <h1 className="text-6xl font-black animate">Eric Davidson</h1>
        <p>Web Developer. Front-End, Back-End. Results.</p>
        <a 
        href="/Eric_Davidson_Resume.pdf" target="_blank"
        ><Button text="Download Resume" className="p-1 text-xl"/></a>
      </div>
    </section>
  );
};

export default HeroSection;
