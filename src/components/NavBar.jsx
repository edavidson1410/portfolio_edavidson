import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Image from 'next/image';
import test_logo from '../../public/test_svg.svg';

function NavBar() {
  return (
    <section className="flex justify-between content-center">
      {/* future logo */}
      <header className="flex gap-2">
        <Image className="self-center w-1/12" src={test_logo} alt="Logo" />
        <div className="h-12 border-solid border-secondary border self-center"></div>
        <nav className="flex gap-3 self-center">
          <Link href="#hero" scroll className="text-xl">Home</Link>
          <Link href="#about" scroll className="text-xl">About</Link>
          <Link href="#projects" scroll className="text-xl">Projects</Link>
        </nav>
      </header>
      <Link href="#contact" className="flex" scroll>
        <Button text="Contact Me!" className="p-1"/>
      </Link>
    </section>

  );
}

export default NavBar;
