import React from "react";
import { ServiceItem } from "../types";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, getWhatsAppMessages } from "../utils";

interface Props {
  item: ServiceItem;
}

const ServiceCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="group py-6 border-b border-midnight-950/5 dark:border-white/5 hover:border-champagne-500/30 transition-colors duration-500">
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl md:text-2xl font-gloock text-midnight-900 dark:text-champagne-100 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 transition-colors duration-300">
          {item.name}
        </h3>
        <span className="font-gloock text-lg text-champagne-700 dark:text-champagne-300 transition-colors duration-300">
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-500 font-light italic max-w-xl mb-3">
          {item.description}
        </p>
        <a
          href={getWhatsAppLink(
            getWhatsAppMessages.service(item.name, item.price)
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-champagne-600 dark:text-champagne-400 hover:text-champagne-700 dark:hover:text-champagne-300 transition-colors"
        >
          <MessageCircle size={12} /> Agendar
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
