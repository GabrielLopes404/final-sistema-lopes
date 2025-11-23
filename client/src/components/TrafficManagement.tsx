import { TrendingUp, Target, BarChart3, Zap, DollarSign, Users, LineChart, Search } from "lucide-react";
import { DotIndicator } from "@/components/DotIndicator";

const trafficFeatures = [
  {
    icon: Target,
    title: "Anúncios Estratégicos",
    description: "Campanhas otimizadas no Google Ads e Meta Ads para atingir seu público ideal com precisão cirúrgica.",
    highlight: "ROI Máximo"
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Análise profunda de dados e métricas para tomar decisões baseadas em resultados reais e mensuráveis.",
    highlight: "Dados Reais"
  },
  {
    icon: Users,
    title: "Geração de Leads",
    description: "Estratégias focadas em captar leads qualificados e converter visitantes em clientes pagantes.",
    highlight: "+300% Leads"
  },
  {
    icon: LineChart,
    title: "Otimização Contínua",
    description: "Monitoramento 24/7 e ajustes constantes nas campanhas para garantir o melhor desempenho sempre.",
    highlight: "Melhoria Diária"
  }
];

const platforms = [
  { name: "Google Ads", icon: "🔍", color: "#4285F4" },
  { name: "Meta Ads", icon: "📘", color: "#1877F2" },
  { name: "Instagram Ads", icon: "📸", color: "#E4405F" },
  { name: "LinkedIn Ads", icon: "💼", color: "#0A66C2" },
  { name: "TikTok Ads", icon: "🎵", color: "#000000" },
  { name: "YouTube Ads", icon: "▶️", color: "#FF0000" }
];

const metrics = [
  { value: "85%", label: "Redução no CPA", icon: DollarSign },
  { value: "3.5x", label: "Aumento no ROAS", icon: TrendingUp },
  { value: "200%", label: "Mais Conversões", icon: Target },
  { value: "24/7", label: "Monitoramento", icon: Search }
];

export function TrafficManagement() {
  return (
    <section id="traffic" className="py-16 md:py-20 lg:py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-500/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 mb-4 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
            <span className="text-xs md:text-sm font-medium text-green-400 uppercase tracking-wider">Gestão de Tráfego</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white px-2">
            Multiplique Seus Resultados
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">Com Tráfego Qualificado</span>
          </h2>
          
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Domine o mercado digital com <span className="text-white font-semibold">campanhas estratégicas</span> que trazem 
            clientes reais, aumentam vendas e <span className="text-green-400 font-bold">reduzem custos de aquisição</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl md:rounded-2xl bg-gradient-to-br from-[#131313] to-[#0a0a0a] border border-green-500/20 hover:border-green-500/50 transition-all duration-500 p-4 md:p-6 text-center hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 space-y-1 md:space-y-2">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2 md:mb-3" />
                  <div className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/70 font-semibold">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden mb-16 -mx-4">
          <DotIndicator className="px-4" itemCount={trafficFeatures.length}>
            <div className="flex gap-6 md:gap-8">
              {trafficFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative min-w-[85vw] snap-center rounded-3xl bg-gradient-to-br from-[#131313] to-[#0a0a0a] border border-white/10 hover:border-green-500/50 active:border-green-500/60 transition-all duration-500 p-8 active:shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden"
                  >
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/30 group-hover:border-green-500/60 transition-colors shadow-lg group-hover:shadow-green-500/30">
                      <Icon className="w-7 h-7 text-green-400 group-hover:text-green-300 transition-colors" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase tracking-wide">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                  </div>
                );
              })}
            </div>
          </DotIndicator>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 gap-6 md:gap-8 mb-16">
          {trafficFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-gradient-to-br from-[#131313] to-[#0a0a0a] border border-white/10 hover:border-green-500/50 transition-all duration-500 p-8 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/30 group-hover:border-green-500/60 transition-colors shadow-lg group-hover:shadow-green-500/30">
                      <Icon className="w-7 h-7 text-green-400 group-hover:text-green-300 transition-colors" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase tracking-wide">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-3xl bg-gradient-to-br from-[#131313] via-[#0f0f0f] to-[#0a0a0a] border border-white/10 p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 text-center space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white/80 font-medium">Plataformas Suportadas</span>
              </div>
              
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white">
                Presença em <span className="text-green-400">todas as plataformas</span>
              </h3>
              
              <p className="text-white/60 max-w-2xl mx-auto">
                Gerenciamos suas campanhas nas principais plataformas de anúncios do mercado
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group relative px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:scale-105 backdrop-blur-sm min-w-[140px]"
                  style={{
                    boxShadow: `0 0 20px ${platform.color}20`
                  }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${platform.color}15, transparent)` }}></div>
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="font-semibold text-white/90 text-sm">{platform.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/5561991475054?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Gest%C3%A3o%20de%20Tr%C3%A1fego.%20Preciso%20aumentar%20minhas%20vendas%20e%20alcan%C3%A7ar%20mais%20clientes%20atrav%C3%A9s%20de%20an%C3%BAncios%20estrat%C3%A9gicos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white font-bold text-base rounded-xl uppercase tracking-wide transition-all shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] hover:scale-[1.02] active:scale-[0.98]">
                  <TrendingUp className="w-5 h-5" />
                  <span>AUMENTAR MINHAS VENDAS AGORA</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
