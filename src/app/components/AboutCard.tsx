'use client';

import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../../public/assets/open_arrow.svg";

interface AboutEntry {
  title: string,
  description: string,
  facts: string[]  
}

function AboutCard(aboutEntry: AboutEntry) {

const [toggle, setToggle] = useState(false);



  return (
    <div>
      <article className="flex flex-col justify-between max-w-2xl border-2 shadow-lg hover:cursor-pointer"
        onClick={() => {
          setToggle(prev => {
            return !prev;
          });
        }}>
          <div className="flex justify-center">
            <h3
              className="self-center"
              >{aboutEntry.title}</h3>
              <Image className={`w-5% md:w-3% justify-self-end ${toggle ? "animate-rotate" : ""}`} src={arrow} alt="arrow" />
          </div>
          <p
              className={`p-0 overflow-hidden ${toggle ? "h-20" : "hidden"}`}
            >{aboutEntry.description}</p>
      </article>
    </div>
  )
}

export default AboutCard;
