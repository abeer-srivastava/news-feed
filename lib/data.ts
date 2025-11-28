import { Article, Category } from '@/types/article';
import newsData from '@/data/news.json';

export function getAllArticles(): Article[] {
    return newsData as Article[];
}

export function getArticleBySlug(slug: string): Article | undefined {
    return newsData.find((article) => article.slug === slug) as Article | undefined;
}

export function getArticlesByCategory(category: Category): Article[] {
    return newsData.filter((article) => article.category === category) as Article[];
}

export function getFeaturedArticle(): Article {
    return newsData[0] as Article;
}

export function getLatestArticles(limit: number = 6): Article[] {
    return newsData.slice(0, limit) as Article[];
}

export function getRelatedArticles(currentSlug: string, category: Category, limit: number = 3): Article[] {
    return newsData
        .filter((article) => article.category === category && article.slug !== currentSlug)
        .slice(0, limit) as Article[];
}
