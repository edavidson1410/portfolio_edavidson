import React from 'react'

function TechStack() {

    const svgs = {
      "React" : "/icons/react.svg",
      "Java" : "/icons/java.svg",
      "MySQL" : "/icons/mysql-icon.svg",
      "Spring" : "/icons/spring-icon.svg",
      "MUI" : "/icons/material-ui.svg"
    }

  return (
    // not rendering
    <ul className="container flex">
      {Object.entries(svgs).map(([key, value]) => (
        <li key={key} className="flex flex-col gap-1">
          <img src={value} alt="tech stack img" className="w-1/2 h-1/2 object-fill self-center" />
          <h4>{key}</h4>
        </li>
      ))}
    </ul>
  )
}

export default TechStack
