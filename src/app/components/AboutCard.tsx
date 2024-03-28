'use client';

import React, { useState } from "react";

interface AboutEntry {
  title: string,
  description: string,
  facts: string[]  
}

function AboutCard(aboutEntry: AboutEntry) {

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
        >{aboutEntry.title}</h3>
        <p
          className={`p-0 overflow-hidden h-${
            toggle ? "20" : "2"
          }`}
        >{aboutEntry.description}</p>
      </article>
    </div>
  )
}

export default AboutCard;
