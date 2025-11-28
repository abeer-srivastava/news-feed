export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  author: string;
  readingTime: string;
}

export type Category = 'Politics' | 'Sports' | 'Business' | 'Entertainment' | 'Tech' | 'Trending';
