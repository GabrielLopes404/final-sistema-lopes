import { useEffect, useRef, useState } from "react";
import { TrendingUp, Award, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const stats = [
    {
      icon: TrendingUp,
      value: 350,
      suffix: "+",
      label: "Projetos Entregues",
      description: "Com qualidade comprovada",
    },
    {
      icon: Award,
      value: 100,
      suffix: "%",
      label: "Aprovado por Todos",
      description: "Satisfação garantida",
    },
    {
      icon: Clock,
      value: 5,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Expertise consolidada",
    },
  ];

  function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden" data-testid="section-stats">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isInView ? 0.1 : 0, scale: isInView ? 1 : 0.8 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-center space-y-6 group"
              data-testid={`stat-${index}`}
            >
              {/* Icon Container with Glow */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent border-2 border-primary/30 group-hover:border-primary/60 shadow-[0_0_40px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_60px_rgba(236,72,153,0.5)] transition-all duration-500 mb-6 relative"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl"
                />
                <stat.icon className="w-12 h-12 md:w-14 md:h-14 text-primary relative z-10" />
              </motion.div>
              
              {/* Animated Number */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-display font-black text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-primary via-pink-500 to-primary/80 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(236,72,153,0.4)]"
                data-testid={`text-stat-value-${index}`}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </motion.div>
              
              {/* Labels */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="space-y-2"
              >
                <div className="font-display font-bold text-xl md:text-2xl uppercase tracking-wide text-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
                <div className="text-sm md:text-base text-muted-foreground" data-testid={`text-stat-desc-${index}`}>
                  {stat.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
