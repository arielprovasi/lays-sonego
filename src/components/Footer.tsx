import React from "react";
import { Instagram, MessageCircle } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { getWhatsAppLink, getWhatsAppMessages } from "../utils";

const Footer: React.FC = () => {
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

        <div className="border-t border-midnight-950/5 dark:border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="opacity-60">
            <BrandLogo scrolled={false} />
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-midnight-950/30 dark:text-white/30">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-midnight-950/30 dark:text-white/30">
              Feito com <span className="text-red-500">♥</span> por{" "}
              <a
                href="https://arielprovasi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne-500 transition-colors underline"
              >
                Ariel
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
