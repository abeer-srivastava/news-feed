'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import { getFeaturedArticle } from '@/lib/data';

export default function HomePage() {
  const featuredArticle = getFeaturedArticle();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection article={featuredArticle} />

      <div className="space-y-0">
        <CategorySection category="Politics" limit={3} />
        <div className="bg-zinc-100 dark:bg-zinc-900">
          <CategorySection category="Sports" limit={3} />
        </div>
        <CategorySection category="Business" limit={3} />
        <div className="bg-zinc-100 dark:bg-zinc-900">
          <CategorySection category="Entertainment" limit={3} />
        </div>
        <CategorySection category="Tech" limit={3} />
        <div className="bg-zinc-100 dark:bg-zinc-900">
          <CategorySection category="Trending" limit={3} />
        </div>
      </div>
    </motion.div>
  );
}
