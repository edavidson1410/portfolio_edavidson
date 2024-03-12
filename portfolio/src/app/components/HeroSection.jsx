import React from 'react'
import Button from "../../components/button"

const HeroSection = () => {

  return (
    <section className="flex m-10 mt-20 justify-center" id="hero">   
    {/* offcenter */}
      <div className="flex flex-col gap-4 content-center justify-center">
        <h1 className="text-6xl font-bold">Eric Davidson</h1>
        <p>Web Developer. Front-End, Back-End. Results.</p>
        <a 
        href="/Eric_Davidson_Resume.pdf" target="_blank"
        className='rounded-md p-1 bg-secondary text-accentPink border-solid border-2 border-accentPink self-center hover:bg-primary'
        >Download Resume</a>
      </div>
    </section>
  )
}

export default HeroSection
