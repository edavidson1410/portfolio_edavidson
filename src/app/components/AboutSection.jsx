import React from 'react';
import { promises as fs } from 'fs';
import AboutCard from './AboutCard';

async function AboutSection() {

    const file = await fs.readFile(process.cwd() + '/public/aboutDescriptions.json', 'utf8');
    const aboutData = JSON.parse(file);

  return (
    <section className="flex flex-col text-center min-h-screen" id="about">
      <h1 className="text-4xl my-10 font-4xl">About</h1>
      <article className="flex flex-col gap-10 md:justify-center">
        <p className="md:mx-56">I'm an aspiring Web-Developer looking for his first break after transitiong from being an Analytical Chemist. I have been developing websites since 2023 and continue my journey to learn and create online solutions. </p>
      </article>
      <article className="flex gap-4">
        {aboutData.map((card) => {
          return <AboutCard key={card.title} title={card.title} description={card.description} />;
        })}
      </article>
    </section>
  );
}

export default AboutSection;
