import Link from 'next/link'
import React from 'react'
import Button from '@/components/Button'

function NavBar() {
  return (
    <section className="flex justify-between">
      <nav className="flex gap-3">
        <Link href="#hero" scroll>Home</Link>
        <Link href="#about" scroll>About</Link>
        <Link href="#projects" scroll>Projects</Link>
      </nav>
      <Link href="#contact" scroll>
        <Button text="Contact Me" />
      </Link>
    </section>

  )
}

export default NavBar
