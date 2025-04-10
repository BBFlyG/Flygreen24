'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="white" strokeWidth="2"/>
            <path d="M30 20L15 13V19L22 20L15 21V27L30 20Z" fill="#00E676"/>
          </svg>
          <span className="font-bold text-2xl">FlyGreen</span>
        </div>
        
        <div className="hidden md:flex nav-links gap-8">
          <Link href="/" className={`${isMenuOpen ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/how-it-works" className={`${isMenuOpen ? 'active' : ''}`}>
            How It Works
          </Link>
          <Link href="/technology" className={`${isMenuOpen ? 'active' : ''}`}>
            Technology
          </Link>
          <Link href="/impact" className={`${isMenuOpen ? 'active' : ''}`}>
            Impact
          </Link>
          <Link href="/community" className={`${isMenuOpen ? 'active' : ''}`}>
            Community
          </Link>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4 px-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="py-2">
              Home
            </Link>
            <Link href="/how-it-works" className="py-2">
              How It Works
            </Link>
            <Link href="/technology" className="py-2">
              Technology
            </Link>
            <Link href="/impact" className="py-2">
              Impact
            </Link>
            <Link href="/community" className="py-2">
              Community
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <button className="btn-secondary">Login</button>
              <button className="btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
