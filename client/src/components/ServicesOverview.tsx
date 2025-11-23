import { Palette, Code2, TrendingUp, Check } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppLink } from "@/lib/whatsapp";

const pillars = [
  {
    id: "design",
    icon: Palette,
    number: "01",
    title: "Design Gráfico",
    description: "Identidade visual, social media, 3D e motion design para marcas que querem se destacar.",
    features: ["Identidade Visual", "Social Media", "Design 3D", "Motion Graphics"],
    color: "from-primary to-pink-600",
    link: "#servicos"
  },
  {
    id: "web",
    icon: Code2,
    number: "02",
    title: "Sites & Sistemas",
    description: "Desenvolvimento web completo, do design ao código, com tecnologias modernas e performance máxima.",
    features: ["Landing Pages", "E-commerce", "Sistemas Web", "Apps Personalizados"],
    color: "from-blue-600 to-cyan-500",
    link: "#web-development"
  },
  {
    id: "traffic",
    icon: TrendingUp,
    number: "03",
    title: "Gestão de Tráfego",
    description: "Estratégias de marketing digital, anúncios pagos e otimização para maximizar seus resultados.",
    features: ["Google Ads", "Meta Ads", "Analytics", "Otimização de ROI"],
    color: "from-green-600 to-emerald-500",
    link: "#traffic"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">Como Trabalhamos</span>
          </motion.div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white px-2">
            Soluções Completas Para
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-green-500">Seu Sucesso Digital</span>
          </h2>
        </motion.div>

        {/* Timeline Vertical */}
        <div className="relative">
          {/* Linha conectora */}
          <div className="absolute left-5 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-blue-500/20 to-green-500/20"></div>

          <div className="space-y-10 md:space-y-12 lg:space-y-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex gap-4 md:gap-8 lg:gap-12 group"
                >
                  {/* Ícone na timeline */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg relative z-10`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                    </motion.div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-20 blur-xl rounded-full`}></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-grow pb-6 md:pb-8 lg:pb-12">
                    <div className="mb-3 md:mb-4">
                      <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 md:mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4 md:mb-6">
                        {pillar.description}
                      </p>

                      {/* Features em lista horizontal */}
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                        {pillar.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-white/80"
                          >
                            <Check className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="whitespace-nowrap">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Botão inline */}
                      <a
                        href={createWhatsAppLink(`Olá! Gostaria de saber mais sobre ${pillar.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-xs md:text-sm font-semibold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                      >
                        Explorar {pillar.title}
                        <span className="text-current">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-12 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm text-white/40 px-4">
            <span>350+ Projetos Entregues</span>
            <div className="w-1 h-1 rounded-full bg-white/30"></div>
            <span>98% de Satisfação</span>
            <div className="w-1 h-1 rounded-full bg-white/30"></div>
            <span>Suporte 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
