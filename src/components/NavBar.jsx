'use client';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Image from 'next/image';
import test_logo from '../../public/test_svg.svg';
import { useScrollPosition } from '@/hooks/useScrollPosition';

function NavBar() {

  const scrollPosition = useScrollPosition();

  const linkHover = "hover:underline hover:text-secondary";

  return (
    <section className={`flex justify-between content-center sticky top-0 z-10 my-4 transition-shadow ${scrollPosition > 0 ? "shadow-xl bg-opacity-80 backdrop-blur-lg" : "shadow-none"}`}>
      {/* future logo */}
      <header className="flex gap-2 m-4">
        <Image className="self-center w-1/12" src={test_logo} alt="Logo" />
        <div className="h-12 border-solid border-secondary border self-center"></div>
        <nav className="flex gap-3 self-center">
          <Link href="#hero" scroll className={`text-xl ${linkHover}`}>Home</Link>
          <Link href="#about" scroll className={`text-xl ${linkHover}`}>About</Link>
          <Link href="#projects" scroll className={`text-xl ${linkHover}`}>Projects</Link>
        </nav>
      </header>
      <Link href="#contact" className="flex justify-end" scroll>
        <Button text="Contact Me!" className="p-1 text-xl m-4"/>
      </Link>
    </section>

  );
}

export default NavBar;
