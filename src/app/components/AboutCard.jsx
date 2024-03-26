'use client';

import React, { useState } from "react";

function AboutCard({title, description, facts}) {

const [toggle, setToggle] = useState(false);

  return (
    <div>
      <article className="border-2 shadow-lg w-fit">
        <h3
          onClick={() => {
            setToggle(prev => {
              return !prev;
            });
          }}
        >{title}</h3>
        <p
          className={`p-0 overflow-hidden h-${
            toggle ? "20" : "2"
          }`}
        >{description}</p>
      </article>
    </div>
  )
}

export default AboutCard;
