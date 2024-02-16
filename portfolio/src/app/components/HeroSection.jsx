import React from 'react'

const HeroSection = () => {

  return (
    <section className="flex m-20">
      <div>
        <h1 className="lg:text-6xl">Hi! I'm Eric Davidson</h1>
        <p>This is the description of me</p>
      </div>   
      <div>
        <img className="border-solid rounded-full" src="/assets/placeholder.jpg" alt="profile picture" />
      </div>

    </section>
  )
}

export default HeroSection
