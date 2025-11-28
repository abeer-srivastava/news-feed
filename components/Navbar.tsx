'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from './Container';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ['Politics', 'Sports', 'Business', 'Entertainment', 'Tech', 'Trending'];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-15 h-10 bg-linear-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">News</span>
            </div>
            <span className="text-xl font-bold text-zinc-900 dark:text-white hidden sm:block">
              Bharat 
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/#${category.toLowerCase()}`}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>

        
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col gap-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/#${category.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition-colors py-2"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
