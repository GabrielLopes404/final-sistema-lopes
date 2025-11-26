import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string | null;
  client: string | null;
  order: number;
}

const categories = ["Todos", "Identidade Visual", "Social Media", "Web Design", "3D Modeling"];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: portfolioItems = [], isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const filteredItems = selectedCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: PortfolioItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 bg-[#050505] relative overflow-hidden" data-testid="section-portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/40 mb-2 sm:mb-4 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Meu Trabalho</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white" data-testid="text-portfolio-title">
            Meu Portfolio de <span className="text-primary">Impacto</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
            <span className="font-bold text-primary">Transformo sua marca com design estratégico, pensado pra atrair, encantar e vender</span> tudo <span className="text-white font-semibold">100% profissional</span> e a <span className="text-white font-semibold">preço justo</span>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/5] bg-white/5 rounded-xl animate-pulse"></div>
            ))}
          </div>
        ) : filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 sm:py-16"
          >
            <p className="text-white/60 text-base sm:text-lg">Nenhum projeto encontrado nesta categoria.</p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                  <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-2 sm:px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 line-clamp-2">{item.title}</h3>
                    {item.client && (
                      <p className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-3">Cliente: {item.client}</p>
                    )}
                    <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-semibold">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Ver detalhes</span>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </>
          )}

          <motion.div
            key={selectedImage.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] sm:max-h-[80vh] object-contain rounded-lg sm:rounded-xl shadow-2xl"
            />
            <div className="mt-4 sm:mt-6 text-center px-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1">{selectedImage.title}</h3>
              {selectedImage.client && (
                <p className="text-white/70 text-sm sm:text-base">Cliente: {selectedImage.client}</p>
              )}
            </div>
          </motion.div>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); setSelectedImage(filteredItems[index]); }}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6 sm:w-8" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
