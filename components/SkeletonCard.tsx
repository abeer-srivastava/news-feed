import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md animate-pulse">
      <div className="w-full h-48 bg-zinc-300 dark:bg-zinc-700"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-20"></div>
        <div className="h-6 bg-zinc-300 dark:bg-zinc-700 rounded w-full"></div>
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-full"></div>
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4"></div>
        <div className="flex items-center gap-4 pt-2">
          <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded w-24"></div>
          <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
}
