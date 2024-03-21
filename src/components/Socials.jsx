'use client';

import React from 'react';
import Link from 'next/link';
import {
  LinkedinIcon,
  GithubIcon,
  EmailIcon,
  LinkedinShareButton
} from 'next-share';

function Socials() {

  return (
    <div className="flex justify-center">
      <Link href="https://www.linkedin.com/in/edavidson1410/" target="_blank" className="flex items-center" scroll>
        <LinkedinIcon round={true} size="50" />
      </Link>
      <Link href="https://github.com/edavidson1410" target="_blank" className="flex items-center" scroll>
        <GithubIcon round={true} size="50" />
      </Link>
      <Link href="mailto:edavidson1410@gmail.com" target="_blank" className="flex items-center" scroll>
        <EmailIcon round={true} size="50" />
      </Link>
    </div>
  )
}

export default Socials;
