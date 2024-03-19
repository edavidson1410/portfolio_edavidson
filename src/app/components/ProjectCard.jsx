import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

function ProjectCard(props) {
    
    const { title, gitLink, image, description } = props;

  return (
    <div className="flex m-8 flex-col md:flex-row border-b-4 border-b-secondary p-4 gap-4">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <img src={image} alt="project image" className="max-w-1/2 self-center"/>
        <a href={gitLink} target="_blank"><Button text="GitHub Link" className="p-1"/></a>
      </div>
    </div>
  );
}

export default ProjectCard;
