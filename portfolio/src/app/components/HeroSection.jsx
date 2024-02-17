import React from 'react'
import Button from "../../components/Button"

const HeroSection = () => {

  return (
    <section className="flex m-20">   
      <div className="flex content-center justify-center">
        <img className="border-solid rounded-full h-3/4" src="/assets/placeholder.jpg" alt="profile picture" />
      </div>
      <div className="flex flex-col gap-5 content-center justify-center">
        <h1 className="lg:text-6xl">I'm Eric Davidson</h1>
        <p>Web Developer. Front-End, Back-End. Results.</p>
        <Button text="Contact Me!"/>
      </div>
    </section>
  )
}

export default HeroSection
