import { Palette, Globe, TrendingUp, Sparkles, Code2, BarChart3, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Differentiators() {
  const services = [
    {
      icon: Palette,
      title: "Design Gráfico Profissional",
      description: "Identidade visual completa, social media, 3D e motion design que fazem sua marca se destacar",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Sites & Sistemas Web",
      description: "Landing pages, e-commerce e sistemas personalizados com código limpo e design impecável",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Gestão de Tráfego Pago",
      description: "Campanhas estratégicas no Google Ads e Meta Ads que geram leads qualificados e vendas reais",
      color: "text-green-400"
    },
    {
      icon: Sparkles,
      title: "Branding & Identidade",
      description: "Logo premium, manual da marca, papelaria e aplicações completas para fortalecer sua presença",
      color: "text-pink-400"
    },
    {
      icon: Code2,
      title: "Desenvolvimento Full-Stack",
      description: "Aplicações web completas, APIs robustas e integrações com sistemas de pagamento e automações",
      color: "text-cyan-400"
    },
    {
      icon: BarChart3,
      title: "Analytics & Otimização",
      description: "Análise de dados, métricas de performance e otimização contínua para maximizar resultados",
      color: "text-orange-400"
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden" data-testid="section-differentiators">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Expertise Completa</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white px-2">
            Tudo que sua marca
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-green-400">precisa em um só lugar</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Design estratégico, sites profissionais e tráfego qualificado. Solução completa para o seu negócio decolar.
          </p>
        </motion.div>

        {/* Lista Vertical Simples */}
        <div className="space-y-6 md:space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-4 md:gap-6 p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                {/* Ícone Grande */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 md:w-8 md:h-8 ${service.color}`} />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-grow">
                  <h3 className="font-bold text-xl md:text-2xl text-white mb-2 group-hover:text-primary/90 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Número */}
                <div className="hidden md:block flex-shrink-0 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm mb-4">
            Qualidade profissional em cada detalhe
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Entrega rápida e suporte completo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
