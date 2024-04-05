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
      <article className="flex flex-col gap-2 justify-between max-w-2xl border-2 shadow-lg hover:cursor-pointer"
        onClick={() => {
          setToggle(prev => {
            return !prev;
          });
        }}>
          <div className="flex justify-between p-3">
            <div id="dummyDiv"></div>
            <h3
              className="self-center"
              >{aboutEntry.title}</h3>
              <Image className={`w-5% md:w-3% ${toggle ? "" : "rotate-180"}`} src={arrow} alt="arrow" />
          </div>
          <div className={`p-0 overflow-hidden ${toggle ? "h-fit" : "hidden"}`}>
            <p>{aboutEntry.description}</p>
            <ul className="flex flex-col gap-2 p-2">
              {aboutEntry.facts.map((fact, index) => {
                return <li key={index}>{fact}</li>;
              })}
            </ul>
          </div>
      </article>
    </div>
  )
}

export default AboutCard;
