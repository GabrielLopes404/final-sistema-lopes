import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DotIndicator } from "@/components/DotIndicator";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: any;
}

const designTiers: PricingTier[] = [
  {
    name: "Essencial",
    price: "R$ 49 - 97",
    description: "Perfeito para começar",
    icon: Sparkles,
    features: [
      "Logo Simples ou Posts para redes",
      "1-2 revisões",
      "Entrega em 2-3 dias",
      "Arquivos em alta resolução"
    ]
  },
  {
    name: "Profissional",
    price: "R$ 147 - 347",
    description: "Ideal para sua marca crescer",
    icon: Zap,
    popular: true,
    features: [
      "Identidade Visual Completa",
      "Logo + Manual da Marca",
      "Aplicações em mockups",
      "Revisões ilimitadas",
      "Suporte prioritário"
    ]
  },
  {
    name: "Premium",
    price: "R$ 397+",
    description: "Para marcas que querem destaque",
    icon: Crown,
    features: [
      "Branding completo 360°",
      "Motion Design + Animações",
      "Modelagem 3D",
      "Materiais gráficos diversos",
      "Consultoria estratégica"
    ]
  }
];

const webTiers: PricingTier[] = [
  {
    name: "Landing Page",
    price: "R$ 297 - 697",
    description: "Presença digital profissional",
    icon: Sparkles,
    features: [
      "Design moderno e responsivo",
      "Otimização SEO básica",
      "Formulário de contato",
      "Integração WhatsApp"
    ]
  },
  {
    name: "Site Institucional",
    price: "R$ 497 - 1.497",
    description: "Site completo para seu negócio",
    icon: Zap,
    popular: true,
    features: [
      "Até 6 páginas",
      "Design premium personalizado",
      "SEO avançado",
      "Google Analytics",
      "Blog integrado (opcional)"
    ]
  },
  {
    name: "E-commerce / Sistema",
    price: "R$ 1.297+",
    description: "Soluções sob medida",
    icon: Crown,
    features: [
      "Loja virtual completa ou sistema web",
      "Painel administrativo",
      "Integrações de pagamento",
      "Gestão de estoque/conteúdo",
      "Suporte e manutenção"
    ]
  }
];

const trafficTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "R$ 497 - 797",
    description: "Comece a atrair clientes",
    icon: Sparkles,
    features: [
      "Gestão Google Ads ou Meta Ads",
      "Até R$ 1.500 em anúncios/mês",
      "Otimização de campanhas",
      "Relatório mensal detalhado"
    ]
  },
  {
    name: "Growth",
    price: "R$ 897 - 1.297",
    description: "Acelere seu crescimento",
    icon: Zap,
    popular: true,
    features: [
      "Google Ads + Meta Ads",
      "Até R$ 3.500 em anúncios/mês",
      "Testes A/B avançados",
      "Relatórios semanais",
      "Consultoria estratégica"
    ]
  },
  {
    name: "Scale",
    price: "R$ 1.497+",
    description: "Domine seu mercado",
    icon: Crown,
    features: [
      "Gestão completa multicanal",
      "Orçamento ilimitado de anúncios",
      "Automações avançadas",
      "Análise preditiva",
      "Gerente dedicado 24/7"
    ]
  }
];

const additionalServices = [
  { name: "Tráfego Pago (Configuração Inicial)", price: "R$ 97 - 147", items: ["Google Ads", "Meta Ads", "Configuração", "Pixel/Conversões"] },
  { name: "Manutenção de Site", price: "R$ 97 - 297/mês", items: ["Atualizações", "Backup", "Suporte", "Ajustes"] },
  { name: "Hospedagem Gerenciada", price: "R$ 49 - 147/mês", items: ["Servidor otimizado", "SSL/HTTPS", "99.9% uptime", "CDN"] }
];

function PricingCard({ tier, index, category }: { tier: PricingTier; index: number; category: PricingTab }) {
  const Icon = tier.icon;
  
  const categoryColors = {
    designer: {
      gradient: 'from-primary/20 via-primary/10',
      border: 'border-primary',
      shadow: 'shadow-[0_0_50px_rgba(238,0,255,0.3)]',
      badgeGradient: 'from-primary to-pink-500',
      hoverBorder: 'hover:border-primary/50',
      buttonGradient: 'from-primary to-pink-500',
      buttonHover: 'hover:shadow-[0_0_20px_rgba(238,0,255,0.5)]'
    },
    gestao: {
      gradient: 'from-green-500/20 via-green-500/10',
      border: 'border-green-500',
      shadow: 'shadow-[0_0_50px_rgba(34,197,94,0.3)]',
      badgeGradient: 'from-green-500 to-emerald-500',
      hoverBorder: 'hover:border-green-500/50',
      buttonGradient: 'from-green-500 to-emerald-500',
      buttonHover: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]'
    },
    sites: {
      gradient: 'from-blue-500/20 via-blue-500/10',
      border: 'border-blue-500',
      shadow: 'shadow-[0_0_50px_rgba(59,130,246,0.3)]',
      badgeGradient: 'from-blue-500 to-cyan-500',
      hoverBorder: 'hover:border-blue-500/50',
      buttonGradient: 'from-blue-500 to-cyan-500',
      buttonHover: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
    }
  };

  const colors = categoryColors[category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-3xl p-8 mt-6 flex flex-col w-full ${
        tier.popular
          ? `bg-gradient-to-br ${colors.gradient} to-transparent border-2 ${colors.border} ${colors.shadow}`
          : 'bg-gradient-to-br from-white/5 to-transparent border border-white/10'
      } backdrop-blur-sm ${colors.hoverBorder} transition-all duration-300 group`}
      style={{ touchAction: 'pan-x pinch-zoom' }}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className={`px-6 py-2 bg-gradient-to-r ${colors.badgeGradient} rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-2`}>
            <span className="text-base">⭐</span>
            <span className="tracking-wider">MAIS POPULAR</span>
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-2xl ${
          tier.popular ? 'bg-primary/20' : 'bg-white/10'
        } group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
          <p className="text-sm text-gray-400">{tier.description}</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-black text-primary">{tier.price}</div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={createWhatsAppLink(`Olá! Gostaria de saber mais sobre: ${tier.name}`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 flex-shrink-0 ${
          tier.popular
            ? `bg-gradient-to-r ${colors.buttonGradient} text-white shadow-lg ${colors.buttonHover}`
            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
        }`}
      >
        Solicitar Orçamento
      </a>
    </motion.div>
  );
}

type PricingTab = 'designer' | 'gestao' | 'sites';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<PricingTab>('designer');

  const tabs: { id: PricingTab; label: string; gradient: string }[] = [
    { id: 'designer', label: 'Designer', gradient: 'from-primary to-pink-500' },
    { id: 'gestao', label: 'Gestão', gradient: 'from-green-500 to-emerald-500' },
    { id: 'sites', label: 'Sites', gradient: 'from-blue-500 to-cyan-500' }
  ];

  return (
    <section id="precos" className="py-20 md:py-32 bg-[#050505] text-white relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>💰 INVESTIMENTO INTELIGENTE</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Planos que <span className="text-primary">Cabem no seu Bolso</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para transformar seu negócio. Transparência total, sem taxas escondidas.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300
                  ${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'}
                `}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} rounded-xl shadow-lg`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          {activeTab === 'designer' && (
            <>
              {/* Mobile Scroll */}
              <div className="md:hidden -mx-4">
                <DotIndicator className="px-4" itemCount={designTiers.length}>
                  <div className="flex gap-6 items-stretch">
                    {designTiers.map((tier, index) => (
                      <div key={tier.name} className="min-w-[85vw] snap-center flex">
                        <PricingCard tier={tier} index={index} category="designer" />
                      </div>
                    ))}
                  </div>
                </DotIndicator>
              </div>
              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {designTiers.map((tier, index) => (
                  <PricingCard key={tier.name} tier={tier} index={index} category="designer" />
                ))}
              </div>
            </>
          )}

          {activeTab === 'gestao' && (
            <>
              {/* Mobile Scroll */}
              <div className="md:hidden -mx-4">
                <DotIndicator className="px-4" itemCount={trafficTiers.length}>
                  <div className="flex gap-6 items-stretch">
                    {trafficTiers.map((tier, index) => (
                      <div key={tier.name} className="min-w-[85vw] snap-center flex">
                        <PricingCard tier={tier} index={index} category="gestao" />
                      </div>
                    ))}
                  </div>
                </DotIndicator>
              </div>
              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {trafficTiers.map((tier, index) => (
                  <PricingCard key={tier.name} tier={tier} index={index} category="gestao" />
                ))}
              </div>
            </>
          )}

          {activeTab === 'sites' && (
            <>
              {/* Mobile Scroll */}
              <div className="md:hidden -mx-4">
                <DotIndicator className="px-4" itemCount={webTiers.length}>
                  <div className="flex gap-6 items-stretch">
                    {webTiers.map((tier, index) => (
                      <div key={tier.name} className="min-w-[85vw] snap-center flex">
                        <PricingCard tier={tier} index={index} category="sites" />
                      </div>
                    ))}
                  </div>
                </DotIndicator>
              </div>
              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {webTiers.map((tier, index) => (
                  <PricingCard key={tier.name} tier={tier} index={index} category="sites" />
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Serviços Adicionais - Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
            Serviços Adicionais
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {additionalServices.map((service, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-2xl px-6 bg-white/5 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-lg font-semibold text-white hover:text-primary">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span>{service.name}</span>
                    <span className="text-primary font-black">{service.price}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href={createWhatsAppLink(`Olá! Gostaria de saber mais sobre: ${service.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
                  >
                    Solicitar <ArrowRight className="w-4 h-4" />
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-pink-500/10 border border-primary/20"
        >
          <h3 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Cada projeto é único. Vamos criar uma solução personalizada que atenda exatamente suas necessidades e orçamento.
          </p>
          <motion.a
            href={createWhatsAppLink("Orçamento Personalizado")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(238,0,255,0.5)] transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Solicitar Orçamento Personalizado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
