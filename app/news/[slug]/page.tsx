import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/data';
import Container from '@/components/Container';
import Badge from '@/components/Badge';
import NewsCard from '@/components/NewsCard';
import ArticleContent from './ArticleContent';
import { Category } from '@/types/article';

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} - भारत समाचार`,
    description: article.summary,
    keywords: `${article.category}, भारत समाचार, ${article.author}`,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [article.image],
    },
  };
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.category as Category, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bharat News',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png',
      },
    },
  };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleContent>
        <Container>
          <nav className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="/" className="hover:text-red-600 dark:hover:text-red-500">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/#${article.category.toLowerCase()}`} className="hover:text-red-600 dark:hover:text-red-500">
              {article.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900 dark:text-white">{article.title}</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            <Badge category={article.category as Category} />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mt-4 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
              {article.summary}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 pb-6 border-b border-zinc-200 dark:border-zinc-800">
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
                {new Date(article.date).toLocaleDateString('hi-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readingTime}
              </span>
            </div>

            <div className="relative w-full h-[400px] md:h-[500px] my-8 rounded-2xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-zinc-800 dark:text-zinc-200 leading-relaxed whitespace-pre-line">
                {article.content}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">
                Share this news
              </h3>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <NewsCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </ArticleContent>
    </>
  );
}
