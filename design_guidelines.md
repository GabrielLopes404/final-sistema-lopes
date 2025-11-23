# Design Guidelines: Lopes Designer Portfolio

## Design Approach

**Reference-Based Strategy**: Draw inspiration from award-winning portfolio sites (Awwwards, Behance Pro portfolios, Dribbble showcases) combined with cyberpunk/neon aesthetic principles. Think Cyberpunk 2077 UI meets modern design agency portfolio - bold, edgy, tech-forward while maintaining professional credibility.

**Core Principles**:
- High-contrast, dramatic visual hierarchy
- Generous negative space with intentional density in focal areas
- Sharp, geometric design language with occasional glitch/distortion effects
- Motion-forward interactions that feel premium and tactile

---

## Typography System

**Font Selection**: Use Google Fonts CDN
- **Headings**: Rajdhani or Orbitron (800/700 weights) - geometric, tech-forward aesthetic
- **Body/Subheadings**: Inter or Space Grotesk (400/500/600) - clean, highly readable
- **Accent/Numbers**: Michroma or Audiowide for statistics and special callouts

**Type Scale**:
- Hero Title: 4.5rem (72px) desktop / 2.5rem mobile - ultra-bold, letter-spacing: -0.02em
- Section Headers: 3rem (48px) desktop / 2rem mobile - bold
- Subsection Titles: 1.5rem (24px) - medium weight
- Body Text: 1.125rem (18px) - comfortable reading size
- Small/Meta: 0.875rem (14px)

**Hierarchy Rules**: All caps for hero and major section titles, sentence case for body content. Use letter-spacing strategically: tight for large headings (-0.02em), normal for body, slightly expanded (+0.05em) for small caps labels.

---

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use units of **4, 6, 8, 12, 16, 20, 24** (e.g., p-4, mb-8, gap-12)

**Container Strategy**:
- Full-bleed sections (w-full) for visual impact zones
- Content containers: max-w-7xl (1280px) for standard sections
- Narrow content: max-w-4xl for text-heavy areas
- Asymmetric layouts: 60/40 or 70/30 splits for visual interest

**Grid Systems**:
- Portfolio Gallery: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with gap-6
- Services: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with gap-8
- Testimonials: Single column carousel on mobile, 2-3 visible on desktop

**Section Padding**: py-20 to py-32 desktop, py-12 to py-16 mobile

---

## Component Library

### Navigation
**Fixed Header** (sticky top-0):
- Height: 80px desktop / 64px mobile
- Logo (left): 48px height
- Navigation links (center/right): Uppercase, 14px, letter-spacing 0.1em
- CTA Button (right): "Solicitar Projeto" - prominent, glowing effect on hover
- Backdrop blur on scroll (backdrop-blur-md)

### Hero Section (100vh)
**Asymmetric Split Layout**:
- Left 50%: Large typography "DESIGNER" stacked vertically with glitch text effect treatment
- Right 50%: "GRÁFICO" with animated gradient/neon underline
- Center overlay: Tagline "Por trás de cada arte existe um processo estratégico" (max-w-2xl)
- Bottom: Scroll indicator (animated down arrow)
- Background: Subtle grid pattern or geometric shapes, dark base

**Images**: Large abstract/geometric background texture, low opacity. NO hero photograph - keep it graphical and bold.

### Services Section
**Cards Grid** (grid-cols-3):
- Each card: min-height 400px, p-8
- Icon at top (64px) using Heroicons or custom geometric shapes
- Service title (1.5rem, bold)
- Description (1rem, 2-3 lines)
- "Ver Exemplos" link with arrow
- Hover: Lift effect (scale-105), enhanced border glow
- Border: 1px solid with gradient on hover

### Portfolio Gallery
**Masonry-Inspired Grid**:
- Filterable categories: All, Identidade Visual, Social Media, 3D, Web/App Design
- Filter buttons: Pill-shaped, active state with underline glow
- Grid: Mixed aspect ratios (portrait, landscape, square) for visual rhythm
- Image cards: Overlay on hover revealing project title + category tag
- Lightbox modal: Full-screen view with navigation arrows, project details overlay, close button (X)
- Load more button at bottom (not infinite scroll)

### Before/After Showcase
**Interactive Slider Component**:
- Split-screen layout with vertical divider handle
- Left: "ANTES" label + before image
- Right: "DEPOIS" label + after image
- Draggable divider with center circle handle
- Project name/client below: "LyndaSkin - Transformação de Marca"
- 3-5 before/after examples in carousel format

### Stats Bar
**Horizontal Layout**:
- 3 key metrics: "350+ Projetos Entregues" | "100% Satisfação" | "5 Anos Experiência"
- Large numbers (4rem) with smaller labels below
- Even spacing (grid-cols-3)
- Animated count-up on scroll into view

### Differentiators Section
**Three Columns**:
1. "Seu Estilo, Sua Marca" - Custom icon, 2-line description
2. "Design do Seu Jeito" - Custom icon, 2-line description  
3. "Você no Centro de Tudo" - Custom icon, 2-line description
- Stacked layout mobile, horizontal desktop
- Icons: 80px geometric/line icons from Heroicons

### Testimonials
**Carousel Component**:
- Card design: p-8, min-height 300px
- Quote icon (top-left, 32px)
- Testimonial text (1.125rem, max 3-4 lines)
- Author name + small avatar placeholder (bottom)
- Navigation: Dots below (not arrows), auto-advance every 5s
- Desktop: Show 2 cards simultaneously with gap-6

### FAQ Section
**Accordion List**:
- 4 questions matching original content
- Question (1.25rem, bold) with + icon (right)
- Expanded answer: smooth height transition, p-6 background panel
- One open at a time (collapse others)
- Alternating left-align questions for visual rhythm

### Final CTA Section
**Split Layout** (py-24):
- Left: "Vamos dar vida ao seu projeto" headline (3rem)
- Right: Large CTA button "Pedir Meu Projeto Personalizado" + subtext "Resposta em até 24h"
- Background: Subtle geometric pattern

### Footer
**Multi-Column** (grid-cols-4 desktop, stacked mobile):
- Column 1: Logo + tagline
- Column 2: Links rápidos (Serviços, Portfolio, FAQ)
- Column 3: Contato (Instagram link, Email)
- Column 4: Social proof badge "350+ Projetos"
- Bottom bar: Copyright "© 2025 Lopes Designer" | "Site feito por Lopes"

---

## Images Strategy

**Hero Section**: Abstract geometric background texture (NOT photograph) - think circuit boards, neon grids, or fragmented geometric patterns. Low opacity (20-30%).

**Portfolio Items**: Actual design work thumbnails (logos, social media posts, 3D renders, website mockups) - 15-20 pieces showcasing variety.

**Before/After**: Real client work transformations - 3-5 comparison sets.

**Service Cards**: Icon-based (no photographs), use geometric custom icons or Heroicons at 64px.

**Testimonials**: Small circular avatar placeholders (48px) - can be left as colored circles with initials if no photos available.

**Background Elements**: Subtle grid patterns, gradient meshes, neon line art throughout sections for depth.

---

## Animation Principles

**Micro-Interactions**:
- Button hover: Scale 1.05, glow intensifies
- Card hover: Lift with shadow (translateY -4px)
- Links: Underline slide-in from left

**Scroll Reveals**:
- Fade + slide up (from opacity 0, translateY 20px)
- Stagger children by 100ms delay
- Stats: Count-up animation on visibility

**Hero Animations**:
- Text glitch effect: Occasional subtle distortion (2-3 times on load)
- Gradient shifts on accent elements
- Parallax scroll on background elements (subtle, 0.5x speed)

**Transitions**: All interactions use 200-300ms cubic-bezier easing. Avoid jarring movements - prefer smooth, purposeful motion.

**Performance**: Limit simultaneous animations. Use CSS transforms (not position properties). Lazy-load images below fold.

---

**Final Note**: Every section must feel intentional and complete. Avoid sparse layouts - if a card has room for an icon, description, and link, include all three. The portfolio is the centerpiece - invest in making the gallery filterable, interactive, and impressive. This is a designer's showcase - the site itself must demonstrate design excellence.