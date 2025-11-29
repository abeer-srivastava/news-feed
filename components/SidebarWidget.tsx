'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Article } from '@/types/article';

interface SidebarWidgetProps {
  title: string;
  articles: Article[];
}

export default function SidebarWidget({ title, articles }: SidebarWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden"
    >
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-3">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      
      <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
        {articles.map((article, index) => (
          <Link key={article.id} href={`/news/${article.slug}`}>
            <div className="group p-4 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              <div className="flex gap-3">
                <div className="relative w-20 h-16 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {new Date(article.date).toLocaleDateString('hi-IN')}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
