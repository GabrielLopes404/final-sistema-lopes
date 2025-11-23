import { Palette, Sparkles, Layers, ImageIcon, Shapes, PenTool } from "lucide-react";
import { DotIndicator } from "@/components/DotIndicator";

const designFeatures = [
  {
    icon: Palette,
    title: "Identidade Visual Completa",
    description: "Logotipos marcantes, manual de marca e toda identidade visual para fazer seu negócio se destacar.",
    highlight: "Marca Forte"
  },
  {
    icon: ImageIcon,
    title: "Posts para Redes Sociais",
    description: "Conteúdo visual profissional para Instagram, Facebook e demais redes que convertem e engajam.",
    highlight: "+300% Engajamento"
  },
  {
    icon: Layers,
    title: "Modelagem 3D",
    description: "Criação de modelos tridimensionais realistas para produtos, mockups e apresentações impactantes.",
    highlight: "Hiper-realista"
  },
  {
    icon: Shapes,
    title: "Motion Design",
    description: "Animações profissionais, vídeos explicativos e conteúdo em movimento que prendem a atenção.",
    highlight: "Atenção Máxima"
  }
];

const designTools = [
  { name: "Photoshop", color: "#31A8FF" },
  { name: "Illustrator", color: "#FF9A00" },
  { name: "Figma", color: "#F24E1E" },
  { name: "After Effects", color: "#9999FF" },
  { name: "Blender 3D", color: "#F5792A" },
  { name: "InDesign", color: "#FF3366" }
];

export function DesignGraphic() {
  return (
    <section id="design-graphic" className="py-16 md:py-20 lg:py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-primary/20 to-pink-500/20 border border-primary/40 mb-4 shadow-[0_0_30px_rgba(238,0,255,0.3)]">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">Design Gráfico</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white px-2">
            Transforme Ideias em
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-primary">Arte Visual Impactante</span>
          </h2>
          
          <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
            Do conceito à execução — crio <span className="text-white font-semibold">identidades visuais memoráveis</span> que 
            fazem sua marca se destacar e <span className="text-primary font-bold">conquistar o mercado</span>.
          </p>
        </div>

        {/* Mobile Scroll with Dot Indicator */}
        <div className="md:hidden mb-16 -mx-4">
          <DotIndicator className="px-4" itemCount={designFeatures.length}>
            <div className="flex gap-6 px-4">
              {designFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative min-w-[85vw] snap-center rounded-3xl bg-gradient-to-br from-[#131313] to-[#0a0a0a] border border-white/10 hover:border-primary/50 transition-all duration-500 p-8 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                    
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors shadow-lg group-hover:shadow-primary/30">
                          <Icon className="w-7 h-7 text-primary group-hover:text-pink-400 transition-colors" />
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

        {/* Desktop Grid - Static */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {designFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-gradient-to-br from-[#131313] to-[#0a0a0a] border border-white/10 hover:border-primary/50 transition-all duration-500 p-8 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors shadow-lg group-hover:shadow-primary/30">
                      <Icon className="w-7 h-7 text-primary group-hover:text-pink-400 transition-colors" />
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
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 text-center space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <PenTool className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/80 font-medium">Ferramentas Profissionais</span>
              </div>
              
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white">
                Domínio completo das <span className="text-primary">melhores ferramentas</span>
              </h3>
              
              <p className="text-white/60 max-w-2xl mx-auto">
                Utilizo softwares profissionais do mercado para garantir qualidade máxima
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              {designTools.map((tool, index) => (
                <div
                  key={index}
                  className="group relative px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:scale-105 backdrop-blur-sm"
                  style={{
                    boxShadow: `0 0 20px ${tool.color}20`
                  }}
                >
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${tool.color}15, transparent)` }}></div>
                  <span className="relative z-10 font-semibold text-white/90 text-sm" style={{ color: tool.color }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/5561991475054?text=Ol%C3%A1!%20Quero%20criar%20uma%20identidade%20visual%20profissional%20para%20minha%20marca.%20Preciso%20de%20um%20design%20que%20se%20destaque%20e%20conquiste%20meu%20p%C3%BAblico."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-pink-600 hover:from-pink-600 hover:to-primary text-white font-bold text-base rounded-xl uppercase tracking-wide transition-all shadow-[0_0_40px_rgba(238,0,255,0.4)] hover:shadow-[0_0_60px_rgba(238,0,255,0.6)] hover:scale-[1.02] active:scale-[0.98]">
                  <Sparkles className="w-5 h-5" />
                  <span>CRIAR MINHA IDENTIDADE VISUAL</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
