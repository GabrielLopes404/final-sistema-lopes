import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#050505] relative overflow-hidden" data-testid="section-portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-4 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Meu Trabalho</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white" data-testid="text-portfolio-title">
            Meu Portfolio de <span className="text-primary">Impacto</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-primary">Transformo sua marca com design estratégico, pensado pra atrair, encantar e vender</span> tudo <span className="text-white font-semibold">100% profissional</span> e a <span className="text-white font-semibold">preço justo</span>.
          </p>
          
          {/* Badge Em Breve */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-12 inline-flex flex-col items-center gap-6 p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 shadow-[0_0_50px_rgba(236,72,153,0.3)]"
          >
            <Sparkles className="w-16 h-16 text-primary animate-pulse" />
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-pink-500/20 border-2 border-primary/50 shadow-[0_0_30px_rgba(236,72,153,0.4)]">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(236,72,153,0.8)]"></div>
                <span className="text-2xl md:text-3xl font-black text-primary uppercase tracking-wider">Em Breve</span>
              </div>
              <p className="text-white/60 text-lg max-w-md">
                Estou preparando algo incrível para você. Enquanto isso, entre em contato para ver meu trabalho completo!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
