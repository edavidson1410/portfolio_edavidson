import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import TechStackButton from './TechStackButton';

interface ProjectCardProps {
  title: string;
  gitLink: string;
  image: string;
  description: string;
  stack?: string[];
}

function ProjectCard(props: ProjectCardProps) {

  // import prop array from Project section to bulid tech stack abuttons
    
    const { title, gitLink, image, description, stack } = props;

  return (
    <div className="flex flex-col gap-2 md:flex-row p-4">
      <div className="flex md:w-1/2 flex-col gap-5 items-centerm border-b-8 border-r-8 border-primary p-2">
        <h2 className="text-2xl font-black">{title}</h2>
        <ul className="flex justify-center gap-4">
          {stack?.map((item) => {
              return <TechStackButton key={item} technology={item} />
            })}
        </ul>
        <p>{description}</p>
        <a href={gitLink} target="_blank"><Button text="GitHub Link" className="p-1"/></a>
      </div>
      <div className="flex flex-col md:w-1/2">
        <img src={image} alt="project image" className="max-w-100% h-auto self-center"/>
      </div>
    </div>
  );
}

export default ProjectCard;
