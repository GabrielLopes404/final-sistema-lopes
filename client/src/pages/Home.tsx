import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";

const Pricing = lazy(() => import("@/components/Pricing"));
const DesignGraphic = lazy(() => import("@/components/DesignGraphic").then(m => ({ default: m.DesignGraphic })));
const WebDevelopment = lazy(() => import("@/components/WebDevelopment").then(m => ({ default: m.WebDevelopment })));
const TrafficManagement = lazy(() => import("@/components/TrafficManagement").then(m => ({ default: m.TrafficManagement })));
const Portfolio = lazy(() => import("@/components/Portfolio").then(m => ({ default: m.Portfolio })));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfter").then(m => ({ default: m.BeforeAfterSection })));
const Stats = lazy(() => import("@/components/Stats").then(m => ({ default: m.Stats })));
const Differentiators = lazy(() => import("@/components/Differentiators").then(m => ({ default: m.Differentiators })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import("@/components/FinalCTA").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        
        <Suspense fallback={<SectionLoader />}>
          <Differentiators />
          <Portfolio />
          <BeforeAfterSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <DesignGraphic />
          <WebDevelopment />
          <TrafficManagement />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
          <Pricing />
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
