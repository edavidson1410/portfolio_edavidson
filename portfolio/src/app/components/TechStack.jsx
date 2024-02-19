import React from 'react'

function TechStack(props) {

    const { technologies } = props

    const svgs = {
      "React" : "/icons/react.svg",
      "Java" : "/icons/java.svg",
      "MySQL" : "/icons/mysql-icon.svg",
      "Spring" : "/icons/spring-icon.svg",
      "Material UI" : "/icons/material-ui.svg"
    }

  return (
    <ul>
       {technologies.map((tech) => {
          svgs[tech] ? (
            <li>
              <img src="/icons/react.svg" /> 
            </li>
          ) : (
            <li>{tech}</li>
          )
      })}
    </ul>
  )
}

export default TechStack

//       {technologies.map(() => {
//     <li>
//     <img src="/icons/react.svg" /> 
// </li>
// })}
