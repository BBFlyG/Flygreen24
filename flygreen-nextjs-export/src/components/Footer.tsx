'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-20 px-8">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="white" strokeWidth="2"/>
              <path d="M30 20L15 13V19L22 20L15 21V27L30 20Z" fill="#00E676"/>
            </svg>
            <span className="font-bold text-2xl">FlyGreen</span>
          </div>
          <p>Sustainable Aviation Made Simple</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-[#00E676] mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/technology">Technology</Link>
              <Link href="/impact">Impact</Link>
              <Link href="/community">Community</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#00E676] mb-6">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link href="/terms">Terms of Use</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/imprint">Imprint</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#00E676] mb-6">Connect</h4>
            <div className="flex flex-col gap-3">
              <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
              <Link href="https://twitter.com" target="_blank">Twitter</Link>
              <Link href="https://instagram.com" target="_blank">Instagram</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#00E676] mb-6">Newsletter</h4>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-3 rounded-md bg-gray-800 text-white border-none"
              />
              <button type="submit" className="btn-secondary">Sign Up</button>
            </form>
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          <p>© 2025 FlyGreen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
