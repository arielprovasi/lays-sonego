import { SectionData, PackageItem } from "./types";
import packageFlutua from "./assets/images/package-flutua.webp";
import packageNoiva from "./assets/images/package-noiva.webp";
import packageAniversario from "./assets/images/package-aniversario.webp";
import packageSublime from "./assets/images/package-sublime.webp";
import laysImageHero from "./assets/images/lays_1.webp";
import laysImage from "./assets/images/lays.webp";
import massagemImage from "./assets/images/massagem.webp";
import serviceOracular from "./assets/images/service-oracular.webp";
import serviceSpaFacial from "./assets/images/service-spa-facial.webp";
import serviceLimpeza from "./assets/images/service-limpeza.webp";
import serviceMassagem from "./assets/images/service-massagem.webp";

// Local images - using imports for better bundling and optimization
export const HERO_IMAGE = laysImageHero;
export const LAYS_IMAGE = laysImage; // Image for "Sobre Mim" section
export const MASSAGE_IMAGE = massagemImage;
export const TAROT_IMAGE = serviceOracular; // Using oracular service image for tarot section
export const FACIAL_IMAGE = serviceSpaFacial;
export const BRIDE_IMAGE = packageNoiva; // Using bride package image
export const CANDLE_OIL_IMAGE = packageFlutua; // Using flutua package image for candle/oil

// Textures - optimized Unsplash URLs with appropriate sizes and formats
// Using smaller widths for backgrounds to reduce file size while maintaining quality
export const SILK_TEXTURE =
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=75&w=1200&auto=format&fit=crop&fm=webp"; // Silk texture - optimized for background
export const SERVICE_CLEANING_IMAGE = serviceLimpeza; // Service cleaning/skin care image
export const SERVICE_MASSAGE_IMAGE = serviceMassagem; // Service massage image
export const CRYSTAL_DETAIL =
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=75&w=1200&auto=format&fit=crop&fm=webp"; // Crystals or light reflection - optimized
export const STARDUST_TEXTURE =
  "https://www.transparenttextures.com/patterns/stardust.png"; // Stardust pattern for navigation

export const INDIVIDUAL_SERVICES: SectionData = {
  id: "individuais",
  title: "Essenciais",
  subtitle: "O cuidado diário elevado à experiência de luxo.",
  items: [
    {
      name: "Limpeza de pele",
      price: 120.0,
      description: "Purificação profunda e renovação celular.",
    },
    {
      name: "Massagem relaxante",
      price: 130.0,
      description: "Técnicas manuais para alívio de tensão.",
    },
    {
      name: "Drenagem linfática",
      price: 90.0,
      description: "Redução de retenção e contorno corporal.",
    },
    {
      name: "Clareamento de axilas",
      price: 80.0,
      description: "Tratamento uniformizador da pele.",
    },
  ],
};

export const THERAPEUTIC_SERVICES: SectionData = {
  id: "terapeutico",
  title: "Alquimia Terapêutica",
  subtitle: "Onde a estética encontra a energia.",
  coverImage: TAROT_IMAGE,
  items: [
    {
      name: "Massagem + Reiki",
      price: 150.0,
      description: "Equilíbrio físico e energético em uma única sessão.",
    },
    {
      name: "Ritual Completo",
      price: 160.0,
      description: "Massagem, Reiki e Escalda Pés para relaxamento total.",
    },
    {
      name: "Consulta Oracular",
      price: 80.0,
      description: "Direcionamento e clareza através das cartas.",
    },
  ],
};

export const FACIAL_SERVICES: SectionData = {
  id: "facial",
  title: "Face & Glow",
  subtitle: "Tecnologia e toque para revelar sua luz.",
  coverImage: FACIAL_IMAGE,
  items: [
    {
      name: "Spa Facial",
      price: 80.0,
      description: "Hidratação e revitalização express.",
    },
    {
      name: "Spa dos Lábios",
      price: 60.0,
      description: "Esfoliação e hidratação profunda dos lábios.",
    },
    {
      name: "Protocolo Olheiras",
      price: 750.0,
      highlight: true,
      description:
        "Tratamento transformador. Inclui limpeza, 6 revitalizações e 6 peelings.",
    },
  ],
};

export const BODY_PACKAGES: SectionData = {
  id: "corporais",
  title: "Corporais",
  items: [
    { name: "Drenagem (4 sessões)", price: 320.0 },
    { name: "Drenagem (6 sessões)", price: 480.0 },
    { name: "Drenagem (8 sessões)", price: 640.0 },
    { name: "Clareamento Axilas (4 sessões)", price: 280.0 },
    { name: "Clareamento Axilas (6 sessões)", price: 420.0 },
  ],
};

export const SPECIAL_PACKAGES: PackageItem[] = [
  {
    id: "flutua",
    title: "Ritual Flutua",
    price: 240.0,
    description:
      "Uma experiência de leveza absoluta. Massagem, gomage, Reiki e escalda pés.",
    imageUrl: packageFlutua,
    tags: ["Relaxamento", "Energia"],
  },
  {
    id: "noiva",
    title: "Noiva Radiante",
    price: 380.0,
    description:
      "O preparo perfeito para o grande dia. Spa completo + espumante.",
    imageUrl: packageNoiva,
    tags: ["Dia da Noiva", "Luxo"],
  },
  {
    id: "aniversario",
    title: "Volta ao Sol",
    price: 380.0,
    description:
      "Celebre seu novo ciclo com renovação total. Inclui café especial.",
    imageUrl: packageAniversario,
    tags: ["Celebração", "Presente"],
  },
  {
    id: "sublime",
    title: "Sublime",
    price: 280.0,
    description:
      "Conexão interior e cuidado exterior. Massagem, Reiki e Oráculo.",
    imageUrl: packageSublime,
    tags: ["Místico", "Exclusivo"],
  },
];
