import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav>
      <Link href="#hero" scroll>Home</Link>
      <Link href="#projects" scroll>Projects</Link>
      <Link href="#contact" scroll>Contact</Link>
    </nav>
  )
}

export default NavBar
