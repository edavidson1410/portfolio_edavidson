import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectSection() {

  const couchCatDescript = "CouchCat streamlines the process of finding a movie to watch by allowing the user to search across streaming service catalogues, filtering results by categories like genre, director, and cast."
  
  return (
    <section id="projects">
      <h1 className='text-4xl my-10'>Projects</h1>
      <div className='divide-y divide-solid'>
        <ProjectCard
        title="CouchCat"
        image="/assets/CouchCatHome.png"
        description={couchCatDescript}
        gitLink="https://github.com/edavidson1410/couchCats"
        technologies={["React", "Java", "SpringBoot", "MySQL","Material UI"]} />

        {/* <ProjectCard
        title="Wow"
        image="/assets/luffy.jpg" /> */}
      </div>

    </section>
  )
}

export default ProjectSection
