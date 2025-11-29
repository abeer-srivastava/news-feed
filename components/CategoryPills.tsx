'use client';

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  'ताज़ा समाचार',
  'राजनीति',
  'खेल',
  'मनोरंजन',
  'व्यापार',
  'टेक्नोलॉजी',
  'शिक्षा',
  'स्वास्थ्य',
  'जीवनशैली'
];

export default function CategoryPills() {
  return (
    <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors whitespace-nowrap text-sm font-medium"
            >
              {category}
            </motion.button>
          ))}
          
          <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
