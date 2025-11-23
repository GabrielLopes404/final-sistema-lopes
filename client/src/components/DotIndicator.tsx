import { useEffect, useState, useRef } from "react";

interface DotIndicatorProps {
  containerRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  className?: string;
  itemCount: number;
}

export function DotIndicator({ containerRef, children, className = "", itemCount }: DotIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const localRef = useRef<HTMLDivElement>(null);
  const ref = containerRef || localRef;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
      const newIndex = Math.round(scrollPercentage * (itemCount - 1));
      setActiveIndex(newIndex);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref, itemCount]);

  return (
    <div className={`relative ${className}`}>
      <div ref={ref} className="overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth snap-x snap-mandatory" style={{ touchAction: 'pan-x' }}>
        {children}
      </div>
      
      {/* Dot Indicators */}
      {itemCount > 1 && (
        <div className="flex justify-center gap-2 mt-6 pb-2">
          {Array.from({ length: itemCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = ref.current;
                if (container) {
                  const scrollPosition = (index / (itemCount - 1)) * (container.scrollWidth - container.clientWidth);
                  container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir para item ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
