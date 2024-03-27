'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import test_logo from '../../public/assets/test_svg.svg';
import burger_menu from '../../public/assets/burger_menu.svg';
import close from '../../public/assets/close.svg';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Socials from './Socials';

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  const linkHover = "hover:underline hover:text-secondary";

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className={`flex justify-between content-center sticky top-0 z-20 transition-shadow ${scrollPosition > 0 ? "shadow-md bg-opacity-80 backdrop-blur-lg" : "shadow-none bg-eggShell"}`}>
      {/* future logo */}
      <header className="hidden md:flex gap-2 m-3">
        <Image className="self-center w-1/12" src={test_logo} alt="Logo" />
        <div className="h-12 border-solid border-secondary border self-center"></div>
        <nav className="flex gap-3 self-center">
          <Link href="#hero" scroll className={`text-xl ${linkHover}`}>Home</Link>
          <Link href="#about" scroll className={`text-xl ${linkHover}`}>About</Link>
          <Link href="#projects" scroll className={`text-xl ${linkHover}`}>Projects</Link>
        </nav>
      </header>
      <header className="hidden md:flex">
        <Socials />
        <Link href="#contact" className="flex justify-end" scroll>
          <Button text="Contact Me!" className="p-1 text-xl m-3"/>
        </Link>
      </header>
    {/* hamburger menu */}
      <Image className="md:hidden self-center w-1/6" src={test_logo} alt="Logo" />
      <nav className="md:hidden z-20 flex w-100">
        <button className="md:hidden">
          <Image onClick={handleClick} className="w-1/4" src={isOpen ? close : burger_menu} alt="hamburger" /> 
            <nav className={`absolute flex flex-col gap-3 z-20 self-center bg-accentPink w-full right-0 mt-3 p-8 rounded-b-lg ${isOpen ? "" : "hidden"}`}>
              <Socials onClick={handleClick} />
              <Link onClick={handleClick} href="#hero" scroll className={`text-xl ${linkHover}`}>Home</Link>
              <Link onClick={handleClick} href="#about" scroll className={`text-xl ${linkHover}`}>About</Link>
              <Link onClick={handleClick} href="#projects" scroll className={`text-xl ${linkHover}`}>Projects</Link>
            </nav>
        </button>
        <Link href="#contact" className="flex justify-end" scroll>
          <Button text="Contact Me!" className="p-1 text-xl m-3"/>
        </Link>  
      </nav>

    </section>
  );
}

export default NavBar;
