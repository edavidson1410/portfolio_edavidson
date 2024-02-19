import React from 'react'
import TechStack from './TechStack'

function ProjectCard(props) {
    
    const { title, gitLink, image, description, technologies } = props

  return (
    <div className="flex m-8">
        <h2>{title}</h2>
        <img src={image} alt="project image" className="w-1/4" />
        <p>{description}</p>
        <a href={gitLink} target="_blank">Project Link</a>
        <TechStack technologies={technologies}/>
    </div>
  )
}

export default ProjectCard
