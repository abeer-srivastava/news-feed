'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Article, Category } from '@/types/article';
import Badge from './Badge';
import Button from './Button';
import Container from './Container';

interface HeroSectionProps {
  article: Article;
}

export default function HeroSection({ article }: HeroSectionProps) {
  return (
    <section className="relative bg-zinc-900 dark:bg-black overflow-hidden">
      <Container className="py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <Badge category={article.category as Category} />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>
            
            <p className="text-lg text-zinc-300 line-clamp-3">
              {article.summary}
            </p>

            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.date).toLocaleDateString('hi-IN')}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readingTime}
              </span>
            </div>

            <Link href={`/news/${article.slug}`}>
              <Button variant="primary" size="lg">
                Read more
              </Button>
            </Link>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-black/60 via-transparent to-transparent z-10"></div>
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
