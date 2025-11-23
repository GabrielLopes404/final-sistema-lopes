# Lopes Designer Portfolio

## Overview

This is a professional designer portfolio website for "Lopes Designer," a graphic designer specializing in visual identity, social media content, 3D modeling, and web/app design. The application showcases over 350 completed projects through an interactive, modern portfolio with a cyberpunk/neon aesthetic featuring high contrast visuals and dramatic animations.

The project is built as a full-stack web application with a React frontend and Express backend, designed to present portfolio work, services, testimonials, and client communications in an engaging, visually striking manner.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and API caching

**UI Component Strategy:**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui design system with "new-york" style variant
- Custom component library located in `client/src/components/ui/`
- Path aliases configured for clean imports (@/, @shared/, @assets/)

**Styling Approach:**
- Tailwind CSS with custom configuration for the cyberpunk/neon aesthetic
- CSS variables for theme management supporting both light and dark modes
- Custom design tokens defined in `index.css` including primary color (#EE00FF/#FF00C866)
- Typography system using Google Fonts: Rajdhani, Inter, Space Grotesk, Orbitron
- Spacing system based on 4px units (4, 6, 8, 12, 16, 20, 24)
- Custom elevation and hover effects via utility classes

**Page Structure:**
- Single-page application with sectioned layout
- Main sections: Hero, Services, Portfolio, Stats, Before/After, Differentiators, Testimonials, Pricing, FAQ, Final CTA, Footer
- Smooth scroll navigation between sections
- Responsive design with mobile-first approach
- Mobile-optimized grid layouts that stack cards vertically on small screens
- Professional CTA buttons with consistent hover animations and elevation effects

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for API routes
- Dual server configuration: development (with Vite integration) and production modes
- Custom request logging middleware with timestamp formatting
- JSON body parsing with raw body preservation for webhook compatibility

**API Design:**
- RESTful endpoints under `/api/*` prefix
- Resource endpoints: `/api/portfolio`, `/api/services`, `/api/testimonials`, `/api/faqs`, `/api/before-after`
- All endpoints return JSON responses
- Error handling with appropriate HTTP status codes (500 for server errors)

**Data Layer:**
- Storage abstraction interface (`IStorage`) for future database migration
- In-memory storage implementation (`MemStorage`) for development/demo
- Seeded sample data for all portfolio sections
- Schema defined with Drizzle ORM type definitions in `shared/schema.ts`

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using Map data structures for rapid prototyping
- Pre-seeded demonstration data across all content types

**Planned Database Integration:**
- Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless`)
- Schema definitions include:
  - `portfolio_items`: Portfolio work with category, images, descriptions
  - `services`: Service offerings with icons and descriptions
  - `testimonials`: Client testimonials with optional avatars
  - `faqs`: Frequently asked questions ordered by priority
  - `before_after`: Before/after comparison images for case studies
- UUID primary keys generated via `gen_random_uuid()`
- Zod schemas for runtime validation derived from Drizzle schema

**Migration Strategy:**
The application is architected to seamlessly transition from in-memory to database storage by:
1. Implementing a database-backed class that satisfies the `IStorage` interface
2. Swapping the storage instance in `server/storage.ts`
3. Running migrations via `npm run db:push`

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI (@radix-ui/*): Comprehensive set of accessible component primitives
- Embla Carousel: Touch-enabled carousel for testimonials and image galleries
- Lucide React: Icon library for consistent iconography
- React Icons: Additional icon sets (specifically Instagram icon)
- class-variance-authority & clsx: Utility for conditional className composition
- cmdk: Command palette component

**Development & Build Tools:**
- Vite with React plugin for fast development and optimized builds
- Replit-specific plugins: runtime error overlay, cartographer, dev banner
- TypeScript for static type checking across the stack
- PostCSS with Tailwind CSS and Autoprefixer

**Backend Services:**
- Neon Database serverless PostgreSQL (configured but not yet active)
- Drizzle ORM for database operations and migrations
- connect-pg-simple: PostgreSQL session store (prepared for future authentication)

**Utilities:**
- date-fns: Date manipulation and formatting
- nanoid: Unique ID generation
- tailwind-merge: Intelligent Tailwind class merging

**Design Resources:**
- Google Fonts CDN: Rajdhani, Orbitron, Inter, Space Grotesk
- Custom design guidelines in `design_guidelines.md` specifying typography scale, spacing system, color scheme, and layout patterns
- Branding configuration in `attached_assets/branding-1763728016779.json`

## Replit Environment Setup (November 22, 2025)

**Development Configuration:**
- Node.js 20 installed via Replit modules
- Python 3.11 installed for utility scripts
- All npm dependencies installed successfully
- Vite development server configured to run on port 5000 with host 0.0.0.0
- Server properly configured with `allowedHosts: true` for Replit proxy compatibility
- HMR (Hot Module Replacement) configured for WebSocket secure connection on port 443

**Workflow Configuration:**
- Development workflow: `npm run dev` (runs tsx server/index-dev.ts)
- Configured to run on port 5000 with webview output
- Server integrates Vite middleware for development
- All API endpoints responding correctly

**Deployment Configuration:**
- Deployment target: autoscale (stateless web application)
- Build command: `npm run build`
- Production command: `npm start`
- Production uses optimized esbuild bundle with Terser minification

**Project Structure:**
- Frontend: React 18 + TypeScript + Vite served from `/client`
- Backend: Express.js API served from `/server`
- Static assets: `/attached_assets` (served via Express static middleware)
- Shared types: `/shared/schema.ts`

## Recent Changes (November 2025)

**Loading Experience (November 22, 2025):**
- Simplified SectionLoader component to a professional single-circle spinner animation
- Removed complex multi-circle animations for cleaner, faster-loading experience
- Maintained cyberpunk aesthetic with neon primary color gradient

**Mobile Scroll Optimization (November 22, 2025):**
- Implemented ScrollIndicator component with visual chevron indicators for horizontal scrolling
- Added animated gradient overlays on left/right edges to indicate more content
- Pulse-animated chevron icons in neon circles guide users to scroll horizontally
- Applied to Services, TrafficManagement, WebDevelopment, and Pricing sections
- Snap scrolling enabled (snap-x snap-mandatory) for smooth card-by-card navigation

**Touch Feedback Enhancement (November 22, 2025):**
- Added whileTap animations (scale: 0.98) to all mobile cards via Framer Motion
- Implemented CSS active states with enhanced borders and shadows for tactile feedback
- Mobile users now get immediate visual response when tapping cards
- Ensures responsive feel on touch devices without relying on hover states

**Responsive Layout Architecture (November 22, 2025):**
- Completely separated mobile and desktop layouts for better performance
- Mobile: Horizontal scroll with ScrollIndicator (md:hidden) using flex with 85vw card widths
- Desktop: Clean grid layouts (hidden md:grid) with proper multi-column grids
- Eliminated layout conflicts by avoiding shared containers between breakpoints
- Desktop grids maintain hover animations without mobile scroll artifacts

**Navigation Improvements (November 22, 2025):**
- Removed animated underlines from Header navigation links for cleaner interface
- Links maintain hover color transitions without distracting underline effects
- Improved visual hierarchy in navigation menu

**Code Quality:**
- Removed unused ChevronRight icon imports from multiple components
- Cleaned up redundant scroll-related code
- Improved component structure with clear mobile/desktop separation
- Better maintainability through consistent patterns across all scroll sections

**UX/UI Refinements (November 22, 2025 - Latest):**
- Replaced arrow-based ScrollIndicator with clean DotIndicator component for minimal mobile UI
- Fixed card content being cut off at top by adding proper margin (mt-6) to pricing cards
- Removed all hover:underline effects from accordion triggers for cleaner appearance
- Converted pricing card buttons from motion.a to regular <a> tags to prevent scroll interference on mobile
- Cards no longer intercept touch events during vertical scrolling
- Motion Design feature confirmed present in DesignGraphic section with proper visibility
- **Loading Spinner**: Simplified to single circle spinner (removed dual-circle background effect from both App.tsx PageLoader and Home.tsx SectionLoader)
- **Design Graphic Cards**: Separated mobile (horizontal scroll with DotIndicator) and desktop (static 2-column grid) layouts
- **Pricing Cards**: Fixed internal scroll issue by using flexbox layout (flex-col, h-full) with flex-grow on features list
- **Before/After Section**: Updated with real client images - "Pequenos Sonhos" logo transformation (before: simple logo, after: complete brand identity)

**Performance Optimizations (November 22, 2025):**
- Centralized WhatsApp link utility function in client/src/lib/whatsapp.ts
- Removed code duplication across Header, Hero, Footer, ServicesOverview, BeforeAfter, and Pricing components
- Applied React.memo, useCallback, and useMemo to Header and Pricing components
- Removed redundant useEffect for body overflow in Header (handled by Sheet component)
- Deleted temporary image files and cleaned up attached_assets directory
- Improved bundle size and render performance through better memoization
- **Final Cleanup (November 22, 2025)**: Removed all duplicate and temporary files, optimized for production deploy
- Added terser for production minification
- Created Vercel deployment configuration
- Updated .gitignore to prevent temporary files from being committed

**DesignGraphic Section Improvements (November 22, 2025 - Latest):**
- Added DotIndicator component to mobile view for horizontal scroll navigation
- Separated mobile and desktop card layouts for better responsiveness
- Mobile: Horizontal scroll with visual dot indicators showing current position
- Desktop: Static 2-column grid layout with hover effects
- Improved user experience on mobile devices with clear scroll indicators
- Fixed image import issues by using placeholder SVG data URLs for BeforeAfter section