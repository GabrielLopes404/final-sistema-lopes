import { useQuery } from "@tanstack/react-query";
import { Palette, Image, Box, Monitor, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DotIndicator } from "@/components/DotIndicator";
import type { Service } from "@shared/schema";

const iconMap: Record<string, any> = {
  palette: Palette,
  image: Image,
  box: Box,
  monitor: Monitor,
  sparkles: Sparkles,
};

export function Services() {
  const { data: services = [], isLoading, isError } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isError) {
    return (
      <section id="servicos" className="py-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
            <p className="text-red-400 text-lg">Erro ao carregar serviços. Tente novamente mais tarde.</p>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section id="servicos" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 w-64 mx-auto bg-muted animate-pulse rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-96 bg-muted animate-pulse rounded-lg" data-testid={`skeleton-service-${i}`} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden" data-testid="section-services">
      {/* Animated Backgrounds */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/15 rounded-full blur-[100px]"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white" data-testid="text-services-title">
            Veja o que posso transformar
            <br />
            <span className="text-primary">na sua marca</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Transformo sua marca com design estratégico, pensado pra atrair, encantar e vender — tudo com visual profissional e preço acessível.
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden -mx-4">
          <DotIndicator className="px-4" itemCount={services.length}>
            <div className="flex gap-6">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon] || Sparkles;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="group rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#0a0a0a] border border-white/10 hover:border-primary/50 active:border-primary/60 transition-all duration-500 p-8 min-h-[380px] flex flex-col relative overflow-hidden shadow-[0_0_0_rgba(236,72,153,0)] active:shadow-[0_0_50px_rgba(236,72,153,0.3)] w-[85vw] flex-shrink-0 snap-center"
                    data-testid={`card-service-mobile-${index}`}
                  >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="mb-6 p-4 w-fit rounded-2xl bg-gradient-to-br from-primary/20 to-pink-500/20 group-hover:from-primary/30 group-hover:to-pink-500/30 transition-all duration-500 shadow-[0_0_30px_rgba(236,72,153,0.3)] group-hover:shadow-[0_0_50px_rgba(236,72,153,0.6)]">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-primary transition-colors duration-300" data-testid={`text-service-title-mobile-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed flex-grow" data-testid={`text-service-description-mobile-${index}`}>
                      {service.description}
                    </p>
                  </div>
                  </motion.div>
                );
              })}
            </div>
          </DotIndicator>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#0a0a0a] border border-white/10 hover:border-primary/50 transition-all duration-500 p-8 min-h-[380px] flex flex-col relative overflow-hidden shadow-[0_0_0_rgba(236,72,153,0)] hover:shadow-[0_0_70px_rgba(236,72,153,0.4)]"
                data-testid={`card-service-${index}`}
              >
                {/* Animated Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(236,72,153,0.15), transparent 60%)"
                  }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-6 w-fit"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center border-2 border-primary/40 group-hover:border-primary transition-all duration-500 shadow-[0_0_25px_rgba(236,72,153,0.3)] group-hover:shadow-[0_0_50px_rgba(236,72,153,0.6)]">
                      <Icon className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                    </div>
                  </motion.div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-white group-hover:text-primary transition-colors duration-300" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>

                  <p className="text-base text-white/70 leading-relaxed flex-grow" data-testid={`text-service-desc-${index}`}>
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-8 inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide w-fit"
                    whileHover={{ gap: 12 }}
                  >
                    VER EXEMPLOS
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
            })}
        </div>
      </div>
    </section>
  );
}
