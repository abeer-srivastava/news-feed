'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Article } from '@/types/article';
import Badge from './Badge';

interface NewsCardProps {
  article: Article;
  priority?: boolean;
}

export default function NewsCard({ article, priority = false }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Link href={`/news/${article.slug}`}>
        <div className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
          <div className="relative w-full h-48 bg-zinc-200 dark:bg-zinc-700">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <Badge category={article.category as any} size="sm" />
            
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-3 mb-2 line-clamp-2 hover:text-red-600 dark:hover:text-red-500 transition-colors">
              {article.title}
            </h3>
            
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 flex-1">
              {article.summary}
            </p>

            <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500 pt-3 border-t border-zinc-200 dark:border-zinc-700">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readingTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
