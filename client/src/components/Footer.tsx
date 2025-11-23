import { SiInstagram } from "react-icons/si";
import { Award } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2" data-testid="logo-footer">
              <img 
                src="/assets/branding/logo.png" 
                alt="Lopes Agency" 
                className="h-10 w-auto drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
              />
              <span className="font-display font-black text-xl uppercase tracking-tight text-white">
                LOPES <span className="text-primary">AGENCY</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-description">
              Transformo marcas com design estratégico, gestão de tráfego inteligente e sites profissionais que convertem.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wide" data-testid="text-footer-quicklinks-title">
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-2">
              <a
                href={createWhatsAppLink("Olá! Gostaria de saber mais sobre os serviços.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-link-services"
              >
                Serviços
              </a>
              <a
                href={createWhatsAppLink("Olá! Gostaria de ver o portfolio de trabalhos realizados.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-link-portfolio"
              >
                Portfolio
              </a>
              <a
                href={createWhatsAppLink("Olá! Gostaria de esclarecer algumas dúvidas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="footer-link-faq"
              >
                FAQ
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wide" data-testid="text-footer-contact-title">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5561991475054?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                data-testid="footer-link-whatsapp"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                (61) 99147-5054
              </a>
              <a
                href="https://www.instagram.com/lopes.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                data-testid="footer-link-instagram"
              >
                <SiInstagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                @lopes.agency
              </a>
              <p className="text-sm text-muted-foreground" data-testid="text-footer-response-time">
                Resposta em até 24h
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wide" data-testid="text-footer-credibility-title">
              Credibilidade
            </h3>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20" data-testid="card-footer-credibility">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <div className="font-display font-bold text-2xl text-primary" data-testid="text-footer-projects-count">350+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide" data-testid="text-footer-projects-label">
                  Projetos Entregues
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © {currentYear} Lopes Agency. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-credits">
              Site feito por <span className="text-primary font-semibold">Lopes</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
