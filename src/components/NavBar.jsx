import Link from 'next/link'
import React from 'react'
import Button from './Button'

function NavBar() {
  return (
    <section className="flex justify-between content-center">
      {/* future logo */}
      <header className="flex gap-2">
        <div className="self-center">Logo</div>
        <div className="h-6 border-solid border-secondary border self-center"></div>
        <nav className="flex gap-3 self-center">
          <Link href="#hero" scroll>Home</Link>
          <Link href="#about" scroll>About</Link>
          <Link href="#projects" scroll>Projects</Link>
        </nav>
      </header>
      <Link href="#contact" scroll>
        <Button text="Contact Me!" className="p-2"/>
      </Link>
    </section>

  )
}

export default NavBar
