import React from "react";
import { Instagram, MessageCircle } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { getWhatsAppLink, getWhatsAppMessages } from "../utils";

interface FooterProps {
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onNavigateToPrivacy,
  onNavigateToTerms,
}) => {
  return (
    <footer
      className="bg-champagne-100 dark:bg-midnight-900 text-midnight-950 dark:text-champagne-100 pt-32 pb-12 border-t border-midnight-950/5 dark:border-white/5 transition-colors duration-700"
      id="agendamento"
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="font-display text-5xl md:text-7xl mb-8 text-midnight-900 dark:text-champagne-100">
              Vamos Conversar?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={getWhatsAppLink(getWhatsAppMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-champagne-500 text-midnight-950 uppercase tracking-widest text-xs font-bold hover:bg-champagne-400 transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/lays.sonego/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 border border-midnight-950/20 dark:border-white/20 text-midnight-950 dark:text-white uppercase tracking-widest text-xs hover:border-champagne-500 hover:text-champagne-500 transition-colors"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-6 text-champagne-600 dark:text-champagne-400 font-semibold">
              Atendimento
            </h4>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-4">
              Atendimento exclusivo com hora marcada para garantir sua
              privacidade e conforto.
            </p>
            <p className="text-sm text-champagne-700 dark:text-champagne-600 uppercase tracking-wider">
              Reserva mediante sinal de 30%
            </p>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-6 text-champagne-600 dark:text-champagne-400 font-semibold">
              Localização
            </h4>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-balance">
              Av Alexandrina Bertoldi Vercellino, 722
              <br />
              Bairro Vila Ginasial
              <br />
              Boituva/SP
            </p>
          </div>
        </div>

        <div className="border-t border-midnight-950/5 dark:border-white/5 pt-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 text-[10px] text-midnight-950/40 dark:text-white/40">
            {/* Copyright - Left aligned on desktop */}
            <span className="whitespace-nowrap text-center md:text-left">
              © {new Date().getFullYear()}, Lays Sonego. Todos os direitos
              reservados
            </span>
            
            {/* Privacy & Terms - Center on desktop */}
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
              {onNavigateToPrivacy && (
                <>
                  <button
                    onClick={onNavigateToPrivacy}
                    className="hover:text-champagne-600 dark:hover:text-champagne-400 transition-colors whitespace-nowrap"
                  >
                    Política de Privacidade
                  </button>
                </>
              )}
              {onNavigateToTerms && (
                <>
                  {onNavigateToPrivacy && (
                    <span className="text-midnight-950/20 dark:text-white/20">
                      ·
                    </span>
                  )}
                  <button
                    onClick={onNavigateToTerms}
                    className="hover:text-champagne-600 dark:hover:text-champagne-400 transition-colors whitespace-nowrap"
                  >
                    Termos de Uso
                  </button>
                </>
              )}
            </div>
            
            {/* Made with love - Right aligned on desktop */}
            <span className="group inline-flex items-center gap-1 whitespace-nowrap text-center md:text-right justify-center md:justify-end">
              Feito com{" "}
              <span className="inline-block text-red-500 group-hover:animate-pulse">
                ♥
              </span>{" "}
              por{" "}
              <a
                href="https://arielprovasi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne-600 dark:hover:text-champagne-400 transition-colors underline decoration-midnight-950/20 dark:decoration-white/20 hover:decoration-champagne-600 dark:hover:decoration-champagne-400"
              >
                Ariel
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
