import React from 'react';
import { Category } from '@/types/article';

interface BadgeProps {
  category: Category;
  size?: 'sm' | 'md';
}

const categoryColors: Record<Category, string> = {
  Politics: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Sports: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Business: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  Entertainment: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  Tech: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  Trending: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
};

export default function Badge({ category, size = 'md' }: BadgeProps) {
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-block font-semibold rounded-full ${categoryColors[category]} ${sizeStyles[size]}`}
    >
      {category}
    </span>
  );
}
