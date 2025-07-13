'use client';

import Link from 'next/link';
import InfoButton from '@/components/ui/info-button/info-button';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-6 bg-transparent border-b border-gray-200">
      <div className="flex-1">
        <h1 className="text-3xl font-bold bg-transparent">Uknow</h1>
      </div>
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/main/dashboard" className="text-lg hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/main/posts" className="text-lg hover:text-blue-400 transition-colors">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex flex-1 justify-end">
        <InfoButton />
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-gray-900">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className='border-b border-indigo-500 text-center'>
              <Link href="/main/dashboard" className="text-lg hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className='border-b border-indigo-500 text-center'>
              <Link href="/main/posts" className="text-lg hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
                Explore
              </Link>
            </li>
            <li className='border-b border-indigo-500 text-center'>
              <Link href="/contact" className="text-lg hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <InfoButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
