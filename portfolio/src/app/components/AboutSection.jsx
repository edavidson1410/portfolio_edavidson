import React from 'react'
import TechStack from './TechStack'

function AboutSection() {
  return (
    <section className="flex flex-col text-center" id="about">
      <h1 className="text-4xl my-10">About</h1>
      <div className="flex flex-col gap-10 md:justify-center">
        <p >I'm an aspiring Web-Developer looking for his first break after transitiong from being an Analytical Chemist. I have been developing websites since 2023 and continue my journey to learn and create online solutions. </p>
        <TechStack />
      </div>

    </section>
  )
}

export default AboutSection
