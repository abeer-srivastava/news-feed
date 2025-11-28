import React from 'react';
import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
}

export default function SectionHeader({ title, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-red-600"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
          {title}
        </h2>
      </div>
      {viewAllLink && (
        <Link
          href={viewAllLink}
          className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 font-semibold text-sm transition-colors"
        >
          See all
        </Link>
      )}
    </div>
  );
}
