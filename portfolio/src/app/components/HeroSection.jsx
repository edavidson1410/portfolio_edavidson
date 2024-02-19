import React from 'react'
import Button from "../../components/Button"

const HeroSection = () => {

  return (
    <section className="flex m-20" id="hero">   
      <div className="flex flex-col gap-5 content-center justify-center">
        <h1 className="lg:text-6xl">Eric Davidson</h1>
        <p>Web Developer. Front-End, Back-End. Results.</p>
        <Button text="Download Resume"/>
      </div>
    </section>
  )
}

export default HeroSection
