import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectSection() {

  const couchCatDescript = "CouchCat streamlines the process of finding a movie to watch by allowing the user to search across streaming service catalogues, filtering results by categories like genre, director, and cast."
  
  return (
    <section>
      <h1 className='text-5xl my-10'>Projects</h1>
      <div className='divide-y divide-solid'>
        <ProjectCard
        title="CouchCat"
        image="/assets/CouchCatHome.png"
        description={couchCatDescript} />
        <ProjectCard
        title="Wow"
        image="/assets/luffy.jpg" />
      </div>

    </section>
  )
}

export default ProjectSection
