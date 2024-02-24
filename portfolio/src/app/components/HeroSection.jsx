import React from 'react'
import Button from "../../components/Button"

const HeroSection = () => {

  return (
    <section className="flex m-10 mt-20" id="hero">   
    {/* offcenter */}
      <div className="flex flex-col gap-4 content-center justify-center">
        <h1 className="text-6xl font-bold">Eric Davidson</h1>
        <p>Web Developer. Front-End, Back-End. Results.</p>
        <Button text="Download Resume"/>
      </div>
    </section>
  )
}

export default HeroSection
