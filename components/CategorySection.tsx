import React from 'react';
import { Category } from '@/types/article';
import { getArticlesByCategory } from '@/lib/data';
import Container from './Container';
import SectionHeader from './SectionHeader';
import NewsCard from './NewsCard';

interface CategorySectionProps {
  category: Category;
  limit?: number;
}

export default function CategorySection({ category, limit = 3 }: CategorySectionProps) {
  const articles = getArticlesByCategory(category).slice(0, limit);

  if (articles.length === 0) {
    return null;
  }

  return (
    <section id={category.toLowerCase()} className="py-12">
      <Container>
        <SectionHeader title={category} viewAllLink={`/#${category.toLowerCase()}`} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
