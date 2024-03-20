import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectSection() {

  const couchCatDescript = "CouchCat streamlines the process of finding a movie to watch by allowing the user to search across streaming service catalogues, filtering results by categories like genre, director, and cast.";
  const portfolioDescript ="This site you're currently browsing! This is my main site to show off my work. Uses responsive design to look good on mobile and your desktop!";

  return (
    <section id="projects m-10">
      <h1 className='text-4xl my-10 font-large'>Projects</h1>
      <div>
        <ProjectCard
        title="CouchCat"
        image="/assets/CouchCatHome.png"
        description={couchCatDescript}
        gitLink="https://github.com/edavidson1410/couchCats"
         />
        <ProjectCard 
        title="Personal Portfolio"
        image="/assets/portfolio_example.png"
        description={portfolioDescript}
        gitLink="https://github.com/edavidson1410/portfolio_edavidson"
        />
      </div>

    </section>
  );
}

export default ProjectSection;
