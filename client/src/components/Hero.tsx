import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Award, TrendingUp, Zap } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [800, 1200], [1, 0]);

  const stats = [
    { value: "350+", label: "Projetos Entregues", icon: Award },
    { value: "98%", label: "Satisfação", icon: TrendingUp },
    { value: "24h", label: "Suporte", icon: Zap }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden" 
      data-testid="section-hero"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/30 rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        style={{ y: useTransform(y, (value) => -value * 0.5) }}
        className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/30 rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Design • Sites • Tráfego
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-center mb-6 px-2"
          >
            <h1 
              className="font-display font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight max-w-6xl mx-auto"
              data-testid="text-hero-title"
            >
              <motion.span 
                className="inline-block text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transforme seu{" "}
              </motion.span>
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.4 }}
              >
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-primary animate-gradient">
                    negócio
                  </span>
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-pink-500/20 blur-2xl -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </motion.span>
              <br />
              <motion.span 
                className="inline-block text-white/90 mt-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                com soluções digitais
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-4"
            data-testid="text-hero-subtitle"
          >
            Design profissional, sites modernos e tráfego qualificado.
            <br className="hidden sm:block" />
            <span className="text-white font-semibold">Tudo em um só lugar.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-16 md:mb-20 px-4"
          >
            <motion.a
              href={createWhatsAppLink("Olá! Quero crescer meu negócio com soluções digitais completas.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-cta-hero"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-pink-600 text-white font-bold text-base md:text-lg rounded-xl shadow-[0_0_40px_rgba(238,0,255,0.3)] hover:shadow-[0_0_80px_rgba(238,0,255,0.6)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Começar Agora
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(238,0,255,0.3)",
                    "0 0 40px rgba(238,0,255,0.5)",
                    "0 0 20px rgba(238,0,255,0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
            
            <motion.a
              href={createWhatsAppLink("Olá! Gostaria de ver o portfolio e saber mais sobre os serviços.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-base md:text-lg rounded-xl border border-white/10 hover:border-primary/50 backdrop-blur-sm transition-all duration-300"
            >
              Ver Portfolio
            </motion.a>
          </motion.div>

          {/* Stats Bar - Horizontal Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative px-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring" }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-black text-2xl sm:text-3xl md:text-4xl text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="hidden sm:block w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent ml-6 md:ml-8 lg:ml-12" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] via-[#0a0a0a]/50 to-transparent pointer-events-none" />
    </section>
  );
}
