# 🗞️ भारत समाचार - News Portal

A modern, SEO-optimized news portal built with **Next.js 16**, **TypeScript**, and **TailwindCSS**. Features dark mode, animations, and a responsive design inspired by Indian news websites.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 Design
- ✅ **Modern UI** with clean card-based layout
- ✅ **Dark Mode** with system detection
- ✅ **Responsive Design** (mobile-first)
- ✅ **Framer Motion Animations** (page transitions, hover effects)
- ✅ **Glassmorphism** effects on navigation
- ✅ **Skeleton Loading** states

### 🚀 Performance
- ✅ **Static Site Generation (SSG)** for optimal performance
- ✅ **Image Optimization** with Next.js Image component
- ✅ **Code Splitting** by route
- ✅ **Minimal JavaScript** bundle (~95 kB)

### 🔍 SEO
- ✅ **Metadata API** for all pages
- ✅ **OpenGraph** tags
- ✅ **Twitter Cards**
- ✅ **JSON-LD** structured data
- ✅ **Semantic HTML**
- ✅ **Proper heading hierarchy**

### 📱 Content
- ✅ **12 Indian News Articles** in Hindi
- ✅ **6 Categories**: Politics, Sports, Business, Entertainment, Tech, Trending
- ✅ **Dynamic Routing** for article pages
- ✅ **Related Articles** section
- ✅ **Breadcrumb Navigation**

## 📸 Screenshots

### Homepage (Light Mode)
![Homepage Light](docs/screenshots/homepage-light.png)

### Homepage (Dark Mode)
![Homepage Dark](docs/screenshots/homepage-dark.png)

### Article Page
![Article Page](docs/screenshots/article-page.png)

## 🏗️ Project Structure

```
news-feed/
├── app/                    # Next.js 16 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── news/[slug]/       # Dynamic article pages
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation with dark mode
│   ├── Footer.tsx        # Footer component
│   ├── HeroSection.tsx   # Featured article hero
│   ├── NewsCard.tsx      # Article card
│   └── ...               # More components
├── data/                  # Static data
│   └── news.json         # 12 news articles
├── lib/                   # Utilities
│   └── data.ts           # Data fetching functions
├── types/                 # TypeScript definitions
│   └── article.ts        # Article interface
└── public/images/         # Article images
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/news-feed.git
cd news-feed
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety

### Styling
- **TailwindCSS 4** - Utility-first CSS
- **Framer Motion** - Animations

### Features
- **next-themes** - Dark mode support
- **next/font** - Font optimization (Inter)
- **next/image** - Image optimization

## 🎯 Key Components

### Navbar
- Sticky navigation with blur backdrop
- Dark mode toggle
- Mobile hamburger menu
- Category links

### HeroSection
- Featured article showcase
- Two-column layout
- Gradient image overlay
- Framer Motion animations

### NewsCard
- Reusable article card
- Image optimization
- Category badges
- Hover animations
- Author & reading time metadata

### CategorySection
- Articles filtered by category
- Responsive grid layout
- "View All" links

## 📊 Data Model

```typescript
interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  category: 'Politics' | 'Sports' | 'Business' | 'Entertainment' | 'Tech' | 'Trending';
  slug: string;
  author: string;
  readingTime: string;
}
```

## 🔍 SEO Implementation

### Metadata
```typescript
export const metadata: Metadata = {
  title: 'भारत समाचार - ताज़ा खबरें और अपडेट',
  description: '...',
  openGraph: { ... },
  twitter: { ... },
};
```

### Dynamic Metadata
```typescript
export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  return {
    title: `${article.title} - भारत समाचार`,
    // ... more metadata
  };
}
```

### JSON-LD Structured Data
```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: article.title,
  // ... more schema
};
```

## 🎨 Design Decisions

### Color Palette
- **Primary**: Red (#DC2626)
- **Background**: Zinc/Slate grays
- **Dark Mode**: Automatic with system detection

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive (text-sm to text-5xl)
- **Weights**: 400, 500, 600, 700

### Spacing
- **Container**: max-w-7xl
- **Grid Gap**: 24px
- **Card Padding**: 16px

## 📈 Performance

### Build Output
```
Route (app)                              Size     First Load JS
┌ ○ /                                   5.2 kB         95.3 kB
└ ● /news/[slug]                        3.8 kB         93.9 kB
```

### Lighthouse Scores (Expected)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🔄 Data Fetching Strategy

**Chosen**: Static Site Generation (SSG)

### Why SSG?
✅ Best performance (pre-rendered HTML)  
✅ Optimal SEO (fully rendered for crawlers)  
✅ No API costs or rate limits  
✅ Scalable (CDN-friendly)  

### Implementation
```typescript
export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
```

**Result**: All 12 article pages pre-rendered at build time

## 🎯 Design Originality

### Inspired by LiveHindustan, but completely original:

1. **Different Color Scheme** - Modern red (#DC2626) vs their brand colors
2. **Card-Based Layout** - Spacious cards vs dense list layout
3. **Modern Features** - Dark mode, animations, glassmorphism
4. **Typography** - Inter font vs their custom fonts
5. **Spacing** - Generous whitespace vs high density
6. **Hero Design** - Single large hero vs multiple featured items

## 📚 Documentation

- **[DESIGN.md](DESIGN.md)** - Design decisions, wireframes, color palette
- **[TECHNICAL.md](TECHNICAL.md)** - Architecture, components, SEO, challenges

## 🚧 Future Improvements

- [ ] Pagination for category pages
- [ ] Search functionality
- [ ] User comments
- [ ] Newsletter subscription
- [ ] Real-time updates
- [ ] Advanced filtering (date, author, tags)
- [ ] Progressive Web App (PWA)
- [ ] Internationalization (i18n)
- [ ] Video support
- [ ] Social sharing with counts

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Inspired by LiveHindustan.com
- Built with Next.js 16
- Icons from Heroicons
- Fonts from Google Fonts

## 📞 Support

For support, email your.email@example.com or open an issue on GitHub.

---

**Made with ❤️ in India**
