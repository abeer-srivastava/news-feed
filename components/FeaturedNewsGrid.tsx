'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Article } from '@/types/article';

interface FeaturedNewsGridProps {
  mainArticle: Article;
  sideArticles: Article[];
}

export default function FeaturedNewsGrid({ mainArticle, sideArticles }: FeaturedNewsGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Featured Article - Takes 2 columns */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2"
      >
        <Link href={`/news/${mainArticle.slug}`}>
          <div className="group relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={mainArticle.image}
              alt={mainArticle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 line-clamp-3 group-hover:text-red-400 transition-colors">
                {mainArticle.title}
              </h2>
              <p className="text-sm md:text-base text-zinc-200 line-clamp-2 mb-3">
                {mainArticle.summary}
              </p>
              <div className="flex items-center gap-4 text-xs text-zinc-300">
                <span>{mainArticle.author}</span>
                <span>•</span>
                <span>{new Date(mainArticle.date).toLocaleDateString('hi-IN')}</span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Side Articles - Takes 1 column */}
      <div className="space-y-4">
        {sideArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/news/${article.slug}`}>
              <div className="group flex gap-3 bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 p-3">
                <div className="relative w-32 h-24 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="128px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-white line-clamp-2 mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>{new Date(article.date).toLocaleDateString('hi-IN')}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
