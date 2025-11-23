import { Code2, Smartphone, Rocket, Zap, Globe, Database } from "lucide-react";
import { DotIndicator } from "@/components/DotIndicator";

const webFeatures = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description: "Landing pages e sites institucionais modernos, responsivos e otimizados para conversão.",
    highlight: "100% Responsivo"
  },
  {
    icon: Smartphone,
    title: "E-commerce & Lojas",
    description: "Lojas virtuais completas com painel administrativo, pagamentos integrados e gestão de produtos.",
    highlight: "Vendas 24/7"
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description: "Plataformas personalizadas, dashboards e sistemas de gestão sob medida para seu negócio.",
    highlight: "Automação Total"
  },
  {
    icon: Zap,
    title: "Performance Máxima",
    description: "Sites rápidos com tecnologias modernas, SEO otimizado e carregamento instantâneo.",
    highlight: "Carrega em 1s"
  }
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "TailwindCSS", color: "#06B6D4" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Vite", color: "#646CFF" }
];

export function WebDevelopment() {
  return (
    <section id="web-development" className="py-16 md:py-20 lg:py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-primary/20 border border-blue-500/40 mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <Code2 className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
            <span className="text-xs md:text-sm font-medium text-blue-400 uppercase tracking-wider">Desenvolvimento Web</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white px-2">
            Sites e Sistemas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-pink-500">que transformam seu negócio</span>
          </h2>
          
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Do design à programação — crio <span className="text-white font-semibold">experiências digitais completas</span> com código limpo, 
            design impecável e tecnologias modernas.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden mb-16 -mx-4">
          <DotIndicator className="px-4" itemCount={webFeatures.length}>
            <div className="flex gap-6">
              {webFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative min-w-[85vw] snap-center rounded-3xl bg-gradient-to-br from-[#131313] to-[#0a0a0a] border border-white/10 hover:border-blue-500/50 active:border-blue-500/60 transition-all duration-500 p-8 active:shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden"
                  >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-primary/20 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500/60 transition-colors shadow-lg group-hover:shadow-blue-500/30">
                      <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wide">
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
          {webFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-gradient-to-br from-[#131313] to-[#0a0a0a] border border-white/10 hover:border-blue-500/50 transition-all duration-500 p-8 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-primary/20 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500/60 transition-colors shadow-lg group-hover:shadow-blue-500/30">
                      <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wide">
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
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 text-center space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/80 font-medium">Tecnologias Modernas</span>
              </div>
              
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white">
                Desenvolvido com as <span className="text-primary">melhores ferramentas</span>
              </h3>
              
              <p className="text-white/60 max-w-2xl mx-auto">
                Utilizo tecnologias de ponta para garantir sites rápidos, seguros e escaláveis
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group relative px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:scale-105 backdrop-blur-sm"
                  style={{
                    boxShadow: `0 0 20px ${tech.color}20`
                  }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${tech.color}15, transparent)` }}></div>
                  <span className="relative z-10 font-mono font-semibold text-white/90 text-sm" style={{ color: tech.color }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/5561991475054?text=Ol%C3%A1!%20Gostaria%20de%20desenvolver%20um%20site%20profissional.%20Preciso%20de%20uma%20presen%C3%A7a%20online%20que%20converta%20visitantes%20em%20clientes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-primary hover:from-primary hover:to-blue-600 text-white font-bold text-base rounded-xl uppercase tracking-wide transition-all shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] hover:scale-[1.02] active:scale-[0.98]">
                  <Code2 className="w-5 h-5" />
                  <span>SOLICITAR MEU SITE PROFISSIONAL</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
