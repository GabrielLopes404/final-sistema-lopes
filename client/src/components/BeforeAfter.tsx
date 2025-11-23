import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/whatsapp";
import beforeLogo from "@assets/before-logo.png";
import afterLogo from "@assets/after-logo.png";

const showcaseItem = {
  title: "Transformação de Logotipo - Creche Pequenos Sonhos",
  client: "Creche Pequenos Sonhos",
  beforeImageUrl: beforeLogo,
  afterImageUrl: afterLogo
};

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section className="py-20 md:py-32 bg-background" data-testid="section-before-after">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight" data-testid="text-beforeafter-title">
            Por isso sou um dos <span className="text-primary">melhores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Com anos de experiência e mais de 350 projetos entregues, tenho propriedade para afirmar: sou bom no que faço... e os resultados comprovam isso.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative aspect-video rounded-lg overflow-hidden select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            data-testid="beforeafter-slider"
          >
            <div className="absolute inset-0">
              <img
                src={showcaseItem.afterImageUrl}
                alt="Depois"
                className="w-full h-full object-contain bg-blue-600"
              />
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={showcaseItem.beforeImageUrl}
                alt="Antes"
                className="w-full h-full object-contain bg-blue-600"
              />
            </div>

            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-bold uppercase tracking-wider" data-testid="label-before">Antes</span>
            </div>

            <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-bold uppercase tracking-wider text-primary-foreground" data-testid="label-after">Depois</span>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                  <ChevronLeft className="w-4 h-4 text-primary-foreground" />
                  <ChevronRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center space-y-4">
            <h3 className="font-display font-bold text-2xl" data-testid="text-beforeafter-title-0">
              {showcaseItem.title}
            </h3>
            <p className="text-muted-foreground" data-testid="text-beforeafter-client-0">{showcaseItem.client}</p>

            <div className="pt-4">
              <a
                href={createWhatsAppLink("Olá! Vi a transformação incrível no seu portfólio de Antes/Depois. Quero esse mesmo resultado para minha marca!")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Quero essa transformação
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
