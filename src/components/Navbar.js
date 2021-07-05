import React from 'react'

export default function Navbar() {
  return (
    <nav
      className="flex flex-row content-center justify-between w-full font-sans text-center shadow sm:items-baseline"
    >
      <div className="self-center">
        <a
          className="nav-link"
          aria-label="home nav link"
        >
          <div className="flex mx-2">
            <img
              className="mx-2"
              src="./../../../assets/unsplash.png"
              width="30" height="30"
              alt="Unsplash image of butterfly"
            />
            <p className="pt-1 text-xl">Unsplash</p>
          </div>
        </a>
      </div>

      <div className="self-center">
        <a
          className="nav-right nav-link"
          aria-label="about nav link"
          routerLink="/about"
        >About</a
        >
        <a
          className="nav-right nav-link"
          aria-label="contact nav link"
          routerLink="/contact"
        >Contact</a
        >
      </div>
    </nav>
  )
}
