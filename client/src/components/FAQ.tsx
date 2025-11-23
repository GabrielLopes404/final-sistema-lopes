import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@shared/schema";

export function FAQ() {
  const { data: faqs = [], isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  if (isLoading) {
    return (
      <section id="faq" className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-64 mx-auto bg-muted animate-pulse rounded mb-16" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight px-2" data-testid="text-faq-title">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-lg px-4 md:px-6 bg-card hover-elevate"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left font-display font-bold text-base md:text-lg hover:text-primary transition-colors py-4 md:py-6" data-testid={`button-faq-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4 md:pb-6 text-sm md:text-base" data-testid={`text-faq-answer-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
