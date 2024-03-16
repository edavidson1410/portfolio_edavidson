import React from 'react';
import Image from 'next/image';


function TechStack() {

    const svgs = {
      "React" : "/icons/react.svg",
      "Java" : "/icons/java.svg",
      "MySQL" : "/icons/mysql-icon.svg",
      "Spring" : "/icons/spring-icon.svg",
      "MUI" : "/icons/material-ui.svg"
    };

  return (
    // not rendering
    <ul className="container flex justify-center">
      {Object.entries(svgs).map(([key, value]) => (
        <li key={key} className="flex flex-col gap-1">
          <img src={value} alt="tech stack img" className="max-w-1/4 h-1/4 object-fill self-center" />
          <h4>{key}</h4>
        </li>
      ))}
    </ul>
  );
}

export default TechStack;
