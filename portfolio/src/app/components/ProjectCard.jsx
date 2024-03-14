import React from 'react'
import Image from 'next/image'

function ProjectCard(props) {
    
    const { title, gitLink, image, description } = props

  return (
    <div className="flex m-8 flex-col border-b-4 border-b-secondary p-4 gap-4">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
        <a href={gitLink} target="_blank" className="border-2 border-primary rounded-md p-1 max-w-fit">GitHub Link</a>
      </div>
      <div>
        <Image fill={true} src={image} alt="project image" className="max-w-1/2 ml-1/4"/>
      </div>
    </div>
  )
}

export default ProjectCard
