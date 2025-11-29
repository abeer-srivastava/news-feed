'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import CategoryPills from '@/components/CategoryPills';
import FeaturedNewsGrid from '@/components/FeaturedNewsGrid';
import SidebarWidget from '@/components/SidebarWidget';
import Container from '@/components/Container';
import { getAllArticles } from '@/lib/data';

export default function HomePage() {
  const allArticles = getAllArticles();
  const mainFeaturedArticle = allArticles[0];
  const sideArticles = allArticles.slice(1, 4);
  const sidebarArticles = allArticles.slice(4, 8);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <HeroSection article={mainFeaturedArticle} />

      {/* Category Pills */}
      <CategoryPills />

      {/* Main Content Area with Sidebar */}
      <div className="bg-zinc-50 dark:bg-zinc-900 py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              {/* Section Header */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-red-600"></div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Top Hindi News</h2>
              </div>

              {/* Featured News Grid */}
              <FeaturedNewsGrid 
                mainArticle={mainFeaturedArticle} 
                sideArticles={sideArticles} 
              />
            </div>

            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1 space-y-6">
              <SidebarWidget title="ताज़ा ख़बरें" articles={sidebarArticles} />
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
