import React from "react";
import { PackageItem } from "../types";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppLink, getWhatsAppMessages } from "../utils";

interface Props {
  item: PackageItem;
}

const PackageCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="group relative w-full h-[500px] overflow-hidden bg-midnight-950 cursor-pointer">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0">
        <img
          src={item.imageUrl}
          alt={`Imagem do pacote ${item.title}: ${item.description}`}
          width={400}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50"
        />
        {/* Always use dark gradient overlay for text readability on images */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-950/20 to-midnight-950"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Floating Tags */}
        <div className="absolute top-8 left-8 flex gap-2">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-champagne-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Price - Always Light text because card background is image/dark */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl font-gloock text-champagne-100 mb-2 italic">
            {item.title}
          </h3>
          <p className="text-2xl font-gloock text-champagne-400 mb-6">
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          {/* Revealed Description */}
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
            <p className="text-gray-300 font-light text-sm leading-relaxed mb-6 border-l border-champagne-500/50 pl-4">
              {item.description}
            </p>
            <a
              href={getWhatsAppLink(
                getWhatsAppMessages.package(item.title, item.price)
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white hover:text-champagne-400 transition-colors"
            >
              <MessageCircle size={14} /> Agendar Experiência{" "}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
