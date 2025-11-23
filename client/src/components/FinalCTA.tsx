import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-card via-card/95 to-background relative overflow-hidden" data-testid="section-final-cta">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-primary/15 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 md:w-[700px] md:h-[700px] bg-primary/20 rounded-full blur-[150px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight leading-none"
              data-testid="text-finalcta-title"
            >
              Vamos dar vida ao{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-primary">
                seu projeto
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              data-testid="text-finalcta-description"
            >
              Transforme sua ideia em realidade. Entre em contato agora e receba uma resposta personalizada em até 24 horas.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <motion.a
              href="https://www.instagram.com/lopes.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto"
              data-testid="button-final-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="w-full lg:w-auto text-sm md:text-base px-6 md:px-10 py-6 md:py-8 bg-gradient-to-r from-primary to-pink-600 hover:from-pink-600 hover:to-primary relative overflow-hidden group shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_80px_rgba(236,72,153,0.6)] transition-all duration-500 border-0"
              >
                <span className="relative z-10 flex items-center gap-3 font-bold uppercase tracking-wide">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs md:text-sm">PEDIR MEU PROJETO PERSONALIZADO</span>
                  <SiInstagram className="w-5 h-5" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.a>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-muted-foreground flex items-center gap-2"
              data-testid="text-finalcta-response-time"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.8)]"></span>
              <span className="text-primary font-bold">Resposta em até 24h</span>
              <span className="text-muted-foreground/60">•</span>
              <span>Orçamento sem compromisso</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
