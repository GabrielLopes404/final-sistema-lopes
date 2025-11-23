import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import type { Testimonial } from "@shared/schema";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  const handleDragEnd = (_e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  if (isLoading) {
    return (
      <section id="depoimentos" className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-64 mx-auto bg-muted animate-pulse rounded mb-16" />
          <div className="grid grid-cols-1 gap-6">
            <div className="h-80 bg-muted animate-pulse rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden" data-testid="section-testimonials">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-[60px] md:blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-primary/10 rounded-full blur-[80px] md:blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-primary text-primary" />
            ))}
          </motion.div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight" data-testid="text-testimonials-title">
            Quem Já Contratou <span className="text-primary">Recomenda</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0">
            Veja o que dizem aqueles que já confiaram no nosso trabalho e transformaram suas ideias em projetos de sucesso.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-auto min-h-[400px] sm:min-h-[350px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute w-full cursor-grab active:cursor-grabbing"
              >
                <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-background/95 to-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-[0_0_50px_rgba(236,72,153,0.15)] hover:shadow-[0_0_80px_rgba(236,72,153,0.25)] transition-all duration-500 relative overflow-hidden group">
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.3), transparent)",
                    }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute top-4 sm:top-6 left-4 sm:left-6"
                  >
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary/15" />
                  </motion.div>

                  <div className="relative z-10 pt-12 sm:pt-14 md:pt-16">
                    {/* Testimonial Text */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-foreground font-medium min-h-[120px] sm:min-h-[100px]"
                      data-testid={`text-testimonial-${currentIndex}`}
                    >
                      "{currentTestimonial.text}"
                    </motion.p>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-primary/20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Avatar className="w-12 h-12 sm:w-14 sm:h-14 ring-2 ring-primary/30 ring-offset-2 ring-offset-background" data-testid={`avatar-testimonial-${currentIndex}`}>
                          <AvatarImage src={currentTestimonial.avatarUrl || undefined} />
                          <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-bold text-lg">
                            {currentTestimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <div className="font-display font-bold text-base sm:text-lg text-foreground" data-testid={`text-testimonial-author-${currentIndex}`}>
                          {currentTestimonial.author}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                          Cliente Satisfeito
                          <span className="inline-flex gap-0.5 ml-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                            ))}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Hidden on mobile, shown on desktop */}
          {testimonials.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="hidden lg:flex absolute -left-16 xl:-left-20 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/40 text-primary hover:bg-primary hover:text-white transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="hidden lg:flex absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/40 text-primary hover:bg-primary hover:text-white transition-all shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {testimonials.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8 sm:w-10 shadow-[0_0_10px_rgba(236,72,153,0.6)]"
                    : "bg-muted w-2 sm:w-2.5 hover:bg-primary/40"
                }`}
                data-testid={`dot-testimonial-${index}`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
