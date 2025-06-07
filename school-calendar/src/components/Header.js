'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-500 rounded-full text-white shadow-md m-4">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.webp"
            alt="School Calendar Logo"
            className="w-44 h-auto"
          />
        </Link>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Centered Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium bg-white text-black px-6 py-2 rounded-full shadow-sm mx-auto capitalize">
          <li><Link href="/" className="hover:text-gray-600 transition">Home</Link></li>
          <li><Link href="/about-us" className="hover:text-gray-600 transition">About Us</Link></li>
          <li><Link href="/contact-us" className="hover:text-gray-600 transition">Contact Us</Link></li>
          <li><Link href="/privacy-policy" className="hover:text-gray-600 transition">Privacy Policy</Link></li>
        </ul>
      </nav>

      {/* Mobile Horizontal Slide-in Links */}
      <div className={`md:hidden fixed top-20 right-2 w-full px-2  transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} flex justify-center bg-transparent`}>
        <ul className="capitalize flex space-x-2 text-black border-b-2 shadow-2xl shadow-amber-100 px-4 text-sm font-medium py-3 bg-amber-300/80 rounded-full">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline ">home</Link>
          </li>
          <li>
            <Link href="/about-us" onClick={() => setMenuOpen(false)} className="hover:underline">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us" onClick={() => setMenuOpen(false)} className="hover:underline">Contact Us</Link>
          </li>
          <li>
            <Link href="/privacy-policy" onClick={() => setMenuOpen(false)} className="hover:underline">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
