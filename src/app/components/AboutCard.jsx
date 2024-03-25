'use client';

import React, { useState } from "react";

function AboutCard({title, description}) {

const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="border-2 shadow-lg w-fit">
        <div
          onClick={() => {
            setToggle(prev => {
              return !prev;
            });
          }}
        >
          {title}
        </div>
        <div
          className={`p-0 overflow-hidden h-${
            toggle ? "20" : "2"
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  )
}

export default AboutCard;
