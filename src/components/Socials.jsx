'use client';

import React from 'react';
import {
  LinkedinIcon,
  GithubIcon,
  EmailIcon,
  LinkedinShareButton
} from 'next-share';

function Socials() {

  const sharedStyles = "5rem";

  return (
    <div>
      <LinkedinIcon round={true} />
      <GithubIcon round={true}/>
      <EmailIcon round={true}/>
    </div>
  )
}

export default Socials;
