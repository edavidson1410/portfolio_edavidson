import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

function ProjectCard(props) {
    
    const { title, gitLink, image, description } = props;

  return (
    <div className="flex m-8 flex-col md:flex-row p-4 gap-4">
      <div className="flex flex-col gap-5 items-centerm border-b-8 border-r-8 border-primary">
        <h2 className="text-2xl font-black">{title}</h2>
        <p>{description}</p>
        <a href={gitLink} target="_blank"><Button text="GitHub Link" className="p-1"/></a>
      </div>
      <div className="flex flex-col gap-4">
        <img src={image} alt="project image" className="max-w-80 self-center"/>
      </div>
    </div>
  );
}

export default ProjectCard;
