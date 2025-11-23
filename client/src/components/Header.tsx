import { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { SiInstagram } from "react-icons/si";
import { Sparkles, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const menuItems = useMemo(() => [
    { id: "web-development", label: "Sites", testId: "link-web" },
    { id: "traffic", label: "Tráfego", testId: "link-traffic" },
    { id: "portfolio", label: "Portfolio", testId: "link-portfolio" },
    { id: "precos", label: "Preços", testId: "link-pricing" },
    { id: "depoimentos", label: "Depoimentos", testId: "link-testimonials" },
  ], []);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: useTransform(
            headerBgOpacity,
            (value) => `rgba(5, 5, 5, ${value})`
          ),
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md border-b border-primary/20 shadow-[0_4px_20px_rgba(236,72,153,0.1)]" : ""
        }`}
        data-testid="header-main"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
              data-testid="logo-container"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="cursor-pointer flex items-center gap-2"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img
                  src="/assets/branding/logo.png"
                  alt="Lopes Agency"
                  className="h-8 sm:h-10 w-auto drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                />
                <span className="font-display font-black text-base sm:text-lg md:text-xl uppercase tracking-tight text-white">
                  LOPES <span className="text-primary">AGENCY</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex items-center gap-4 lg:gap-6"
              data-testid="nav-main"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors group"
                  data-testid={item.testId}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.nav>

            {/* CTA Button - Desktop */}
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              href="https://www.instagram.com/lopes.agency/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-cta-header"
              className="hidden md:block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="relative overflow-hidden group bg-gradient-to-r from-primary to-pink-600 hover:from-pink-600 hover:to-primary border-0 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all" size="default">
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="hidden lg:inline">Solicitar Projeto</span>
                    <SiInstagram className="w-4 h-4 lg:hidden" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-primary transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-l border-primary/20 z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-8">
                {/* Close Button */}
                <div className="flex justify-end">
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-primary transition-colors"
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-4 py-4 text-lg font-semibold uppercase tracking-wide text-white hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                      data-testid={item.testId}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="pt-6 border-t border-primary/20"
                >
                  <a
                    href="https://www.instagram.com/lopes.agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-primary to-pink-600 hover:from-pink-600 hover:to-primary border-0 shadow-[0_0_20px_rgba(236,72,153,0.3)] py-6 text-base" size="lg">
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Solicitar Projeto
                      </span>
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
