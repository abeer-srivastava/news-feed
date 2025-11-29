# News Portal - Design Document

## Table of Contents
1. [Wireframes](#wireframes)
2. [Layout Decisions](#layout-decisions)
3. [Color Palette & Spacing](#color-palette--spacing)
4. [Typography](#typography)
5. [Design Originality](#design-originality)

---

## Wireframes
```
### Desktop Layout
┌──────────────────────────────────────────────────────────────────────────────┐
│ [Logo] Bharat News      Politics | Sports | Business ...                     │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│   ┌─────────────────────┐   ┌─────────────────────────────────────────────┐  │
│   │ Featured Image       │   │ [Politics Badge]                           │  │
│   │ (Large)              │   │ Headline: भारत ने G20 शिखर सम्मेलन...      │  │
│   │                      │   │ Summary text...                            │  │
│   │                      │   │ 👤 Author  📅 Date  ⏱️ Reading Time        │  │
│   └─────────────────────┘   │ [पूरी खबर पढ़ें →]                         │  │
│                             └─────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ ━━ Politics                                                   सभी देखें →    │
│   [3-Card Grid: Image → Badge → Title → Summary → Meta Info]                 │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ ━━ Sports                                                     सभी देखें →     │
│   [3-Card Grid]                                                             │
└──────────────────────────────────────────────────────────────────────────────┘
```
### Mobile Layout

```
┌───────────────────────────────┐
│ [☰] भारत समाचार                [🌙] │
└───────────────────────────────┘

┌───────────────────────────────┐
│ Featured Image (Full Width)   │
└───────────────────────────────┘

[Badge]  
Headline  
Summary  
👤 Author | 📅 Date  

[पूरी खबर पढ़ें →]

Section: Politics  
[Single Column Cards...]

```

### Article Detail Page

```
[Navbar]

Breadcrumb: Home / Politics / Article Title

[Category Badge]
Headline (Large)
Summary Paragraph

Author | Date | Reading Time

[Main Article Image]

Article Content (Multiple Paragraphs)

Share Section:
[Facebook] [Twitter] [WhatsApp]

Related Articles (3 Cards)

```

---

## Layout Decisions

### Grid System
- **Container Max Width**: `1280px` (max-w-7xl)
- **Responsive Breakpoints**:
  - Mobile: `< 768px` (1 column)
  - Tablet: `768px - 1024px` (2 columns)
  - Desktop: `> 1024px` (3 columns)
  - Large Desktop: `> 1280px` (4 columns for some sections)

### Hero Section
- **Two-Column Layout** on desktop (50/50 split)
- **Image on Right**, Content on Left (reversed from traditional layouts)
- **Gradient Overlay** on image for better text readability
- **Large Typography** for maximum impact
- **Single Featured Article** instead of carousel (cleaner, more focused)

### Category Sections
- **Alternating Backgrounds**: White/Light Gray for visual separation
- **3-Column Grid** on desktop, responsive down to 1 column on mobile
- **Section Headers** with red accent line (brand identity)
- **"View All" Links** for easy navigation

### Card Design
- **Vertical Cards** with image on top
- **Fixed Aspect Ratio** for images (16:9)
- **Generous Padding** (16px) for breathing room
- **Rounded Corners** (12px) for modern feel
- **Shadow on Hover** for interactivity feedback

### Navigation
- **Sticky Header** with blur backdrop
- **Horizontal Categories** on desktop
- **Hamburger Menu** on mobile
- **Dark Mode Toggle** always visible

---

## Color Palette & Spacing

### Color Palette

#### Light Mode
```css
Primary Red:     #DC2626  /* Main accent color */
Background:      #FAFAFA  /* Page background */
Card Background: #FFFFFF  /* Card/component background */
Text Primary:    #18181B  /* Main text */
Text Secondary:  #71717A  /* Meta info, descriptions */
Border:          #E4E4E7  /* Dividers, borders */
```

#### Dark Mode
```css
Primary Red:     #EF4444  /* Slightly brighter for dark bg */
Background:      #09090B  /* Page background */
Card Background: #18181B  /* Card/component background */
Text Primary:    #FAFAFA  /* Main text */
Text Secondary:  #A1A1AA  /* Meta info */
Border:          #27272A  /* Dividers, borders */
```

#### Category Badge Colors
```css
Politics:      Blue   (#3B82F6 / #1E40AF)
Sports:        Green  (#10B981 / #047857)
Business:      Purple (#A855F7 / #7C3AED)
Entertainment: Pink   (#EC4899 / #BE185D)
Tech:          Cyan   (#06B6D4 / #0891B2)
Trending:      Orange (#F97316 / #EA580C)
```

### Spacing Scale (Tailwind)
```
xs:  4px   (gap-1)
sm:  8px   (gap-2)
md:  16px  (gap-4)
lg:  24px  (gap-6)
xl:  32px  (gap-8)
2xl: 48px  (gap-12)
3xl: 64px  (gap-16)
```

### Component Spacing
- **Card Padding**: 16px (p-4)
- **Section Padding**: 48px vertical (py-12)
- **Container Padding**: 16px mobile, 24px tablet, 32px desktop
- **Grid Gap**: 24px (gap-6)

---

## Typography

### Font Family
**Inter** (Google Fonts) - Modern, highly readable sans-serif font
- Excellent for both Hindi and English text
- Wide range of weights (400, 500, 600, 700)
- Optimized for screen reading

### Type Scale

#### Headlines
```css
Hero Title (H1):      48px / 56px / 64px (text-3xl / 4xl / 5xl)
Section Title (H2):   24px / 28px / 32px (text-2xl / 3xl)
Card Title (H3):      18px / 20px (text-lg / xl)
```

#### Body Text
```css
Article Body:         18px (text-lg)
Card Summary:         14px (text-sm)
Meta Info:            12px / 14px (text-xs / sm)
```

#### Font Weights
```css
Regular:  400 (font-normal)
Medium:   500 (font-medium)
Semibold: 600 (font-semibold)
Bold:     700 (font-bold)
```

### Line Heights
- **Headlines**: 1.2 - 1.3 (tight, impactful)
- **Body Text**: 1.75 (comfortable reading)
- **UI Elements**: 1.5 (balanced)

---

## Design Originality

### How This Design Differs from LiveHindustan.com

#### 1. **Color Scheme**
- **LiveHindustan**: Uses specific brand colors (maroon/burgundy)
- **Our Design**: Modern red (#DC2626) with zinc/slate grays
- **Difference**: Cleaner, more contemporary color palette

#### 2. **Layout Structure**
- **LiveHindustan**: Dense, traditional news layout with multiple columns
- **Our Design**: Spacious card-based grid with generous whitespace
- **Difference**: Modern, breathing room, better mobile experience

#### 3. **Hero Section**
- **LiveHindustan**: Multiple featured items in carousel/grid
- **Our Design**: Single large hero with 50/50 split layout
- **Difference**: More focused, magazine-style presentation

#### 4. **Card Design**
- **LiveHindustan**: Compact, list-style items with small thumbnails
- **Our Design**: Large image cards with rounded corners and shadows
- **Difference**: More visual, modern aesthetic

#### 5. **Typography**
- **LiveHindustan**: Traditional news typography
- **Our Design**: Inter font family with larger sizes
- **Difference**: More readable, contemporary feel

#### 6. **Spacing & Density**
- **LiveHindustan**: High information density, tight spacing
- **Our Design**: Generous padding (16px cards, 24px gaps)
- **Difference**: Less cluttered, easier to scan

#### 7. **Modern Features (Not on LiveHindustan)**
- ✅ **Dark Mode** with system detection
- ✅ **Framer Motion Animations** (fade-in, hover effects)
- ✅ **Glassmorphism** (navbar backdrop blur)
- ✅ **Skeleton Loading States**
- ✅ **Smooth Transitions** throughout
- ✅ **Modern Shadows** and depth

#### 8. **Navigation**
- **LiveHindustan**: Traditional top nav with many links
- **Our Design**: Minimal sticky nav with blur effect
- **Difference**: Cleaner, more modern approach

#### 9. **Mobile Experience**
- **LiveHindustan**: Desktop-first approach
- **Our Design**: Mobile-first responsive design
- **Difference**: Better mobile UX with hamburger menu

#### 10. **Visual Hierarchy**
- **LiveHindustan**: Equal weight to many items
- **Our Design**: Clear hierarchy (hero → sections → cards)
- **Difference**: Easier to understand content priority

### Design Inspiration Sources
While inspired by LiveHindustan's news focus, our design draws from:
- **Medium**: Clean card layouts, generous whitespace
- **The Verge**: Modern tech news aesthetic
- **BBC News**: Clear typography and hierarchy
- **Modern UI Trends**: Glassmorphism, dark mode, micro-animations

### Unique Design Elements
1. **Red Accent Line** on section headers (brand identity)
2. **Gradient Overlay** on hero image
3. **Category Color System** (6 distinct colors)
4. **Alternating Section Backgrounds** (visual rhythm)
5. **Hover Animations** on cards (lift effect)
6. **Breadcrumb Navigation** on article pages
7. **Share Buttons** with brand colors
8. **Related Articles** section

---

## Accessibility Considerations

### WCAG Compliance
- ✅ **Color Contrast**: All text meets WCAG AA standards
- ✅ **Keyboard Navigation**: Full keyboard support
- ✅ **ARIA Labels**: Proper labels on interactive elements
- ✅ **Semantic HTML**: Proper heading hierarchy
- ✅ **Alt Text**: All images have descriptive alt text
- ✅ **Focus Indicators**: Visible focus states

### Responsive Design
- ✅ **Mobile-First**: Optimized for small screens
- ✅ **Touch Targets**: Minimum 44px for touch elements
- ✅ **Readable Text**: Minimum 14px font size
- ✅ **Flexible Layouts**: Adapts to any screen size

---

## Performance Optimizations

### Image Optimization
- Next.js `<Image>` component with automatic optimization
- WebP format with fallbacks
- Lazy loading for below-fold images
- Proper sizing with `sizes` attribute
- Blur placeholder for better perceived performance

### CSS Optimization
- Tailwind CSS v4 with minimal bundle size
- CSS-in-JS avoided for better performance
- Critical CSS inlined
- Unused styles purged

### JavaScript Optimization
- Code splitting by route
- Client components only where needed
- Framer Motion tree-shaken
- Minimal JavaScript for static content

---

## Conclusion

This design successfully creates an **original, modern news portal** that is:
- ✅ Inspired by LiveHindustan but completely unique
- ✅ Clean and contemporary
- ✅ Responsive and mobile-friendly
- ✅ Accessible and performant
- ✅ Visually engaging with animations
- ✅ SEO-optimized
- ✅ Ready for production
