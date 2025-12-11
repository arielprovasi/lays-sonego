import React from "react";
import { ArrowDown } from "lucide-react";
import { HERO_IMAGE, SILK_TEXTURE } from "../constants";

const Hero: React.FC = () => {
  // Signature Information - Edit name and specialization here
  const signatureName = "Lays Sonego";
  const signatureTitle = "Esteticista & Terapeuta";

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById("sobre");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-screen flex items-center bg-sky-50 dark:bg-slate-950 overflow-hidden transition-colors duration-700 w-full">
      {/* Background Silk Texture (Parallax feel) */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20 bg-cover bg-center mix-blend-multiply dark:mix-blend-screen animate-pulse"
        style={{
          backgroundImage: `url(${SILK_TEXTURE})`,
          animationDuration: "10s",
        }}
      ></div>

      <div className="w-full max-w-[88rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 h-full items-center pt-24 md:pt-20 relative z-10">
        {/* Left Typography - High Editorial */}
        <div className="md:col-span-7 flex flex-col justify-center items-center md:items-start relative z-20 order-2 md:order-1 -mt-72 md:mt-0">
          <div
            className="animate-reveal relative"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Script Text */}
            <span className="font-script text-3xl md:text-6xl text-champagne-700 dark:text-champagne-400 block mb-0 md:mb-4 ml-2 transition-colors duration-700  drop-shadow-md md:drop-shadow-lg dark:drop-shadow-none">
              Alquimia da
            </span>

            {/* Main Title 1 */}
            <h1 className="text-[22vw] md:text-[9rem] leading-[0.8] md:leading-[0.8] font-display text-midnight-950 dark:text-champagne-100 tracking-tighter mix-blend-hard-light md:mix-blend-normal dark:mix-blend-normal transition-colors duration-700 drop-shadow-lg dark:drop-shadow-none">
              BELEZA
            </h1>

            {/* Main Title 2 (Indented) */}
            <h1 className="text-[22vw] md:text-[9rem] leading-[0.8] md:leading-[0.8] font-display text-transparent bg-clip-text bg-gradient-to-r from-champagne-500 to-champagne-900 dark:from-champagne-200 dark:to-champagne-500 tracking-tighter pl-8 md:pl-24 -mt-[0.22em] md:-mt-8 transition-all duration-700 pb-2 drop-shadow-lg dark:drop-shadow-none">
              & ALMA
            </h1>
          </div>

          <div
            className="mt-4 md:mt-8 md:pl-28 max-w-md animate-reveal"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-light tracking-wide leading-relaxed border-l border-champagne-600/60 dark:border-champagne-500/30 pl-6 transition-colors duration-700 text-balance">
              Um santuário onde a estética avançada encontra rituais
              terapêuticos. Descubra a sua versão mais radiante, guiada pela
              essência de{" "}
              <a
                href="#sobre"
                onClick={scrollToAbout}
                className="text-champagne-700 dark:text-champagne-300 font-medium hover:text-champagne-800 dark:hover:text-champagne-200 transition-all duration-300 cursor-pointer"
              >
                {signatureName}
              </a>
              .
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#individuais"
                className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-champagne-700 dark:text-champagne-400 hover:text-midnight-950 dark:hover:text-white transition-colors"
              >
                Explorar o Menu
                <span className="hidden md:inline-block w-12 h-px bg-champagne-700 dark:bg-champagne-400 group-hover:w-20 transition-all duration-500"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Portrait - The "Cover Star" */}
        <div className="md:col-span-5 relative h-[50vh] md:h-[calc(100vh-8rem)] max-h-[500px] order-1 md:order-2 flex items-end justify-center md:justify-end -mt-12 md:mt-0">
          {/* Decorative Arch */}
          <div className="absolute top-10 right-10 w-[80%] h-[90%] border border-champagne-600/20 dark:border-champagne-500/20 rounded-t-[10rem] animate-float transition-colors duration-700"></div>

          {/* Floating Signature - Mobile */}
          <a
            href="#sobre"
            onClick={scrollToAbout}
            className="absolute -top-4 right-4 z-30 bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-black/40 dark:via-black/30 dark:to-black/20 backdrop-blur-xl px-4 py-2 border border-white/40 dark:border-white/20 rounded-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.2)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] transform rotate-2 block md:hidden hover:scale-105 hover:rotate-3 transition-all duration-300 cursor-pointer"
          >
            <span className="block font-display font-bold text-xl text-midnight-950 dark:text-white transition-colors duration-700 drop-shadow-sm">
              {signatureName}
            </span>
            <span className="text-[8px] uppercase tracking-widest text-midnight-900 dark:text-champagne-200 transition-colors duration-700 block text-right drop-shadow-sm">
              {signatureTitle}
            </span>
          </a>

          {/* Image Mask/Container */}
          <div className="relative w-full h-full overflow-hidden rounded-t-[10rem] md:rounded-t-none md:rounded-tl-[12rem] md:rounded-br-[5rem]">
            <div className="absolute inset-0 bg-gradient-to-t from-champagne-100 via-champagne-50/30 to-transparent dark:from-midnight-950 dark:via-transparent dark:to-transparent z-10 opacity-80 dark:opacity-60 transition-colors duration-700"></div>

            {/* USER IMAGE: Portrait of Lays */}
            <img
              src={HERO_IMAGE}
              alt={`Retrato de ${signatureName}, ${signatureTitle}`}
              width={800}
              height={1200}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[2s] ease-out"
            />

            {/* Floating Signature - Desktop */}
            <a
              href="#sobre"
              onClick={scrollToAbout}
              className="absolute bottom-8 left-8 z-30 bg-gradient-to-br from-white/80 via-white/60 to-white/40 dark:from-black/40 dark:via-black/30 dark:to-black/20 backdrop-blur-xl px-6 py-4 border border-white/40 dark:border-white/20 rounded-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.2)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] hidden md:block hover:scale-105 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer"
            >
              <span className="block font-display font-bold text-2xl text-midnight-950 dark:text-white transition-colors duration-700 drop-shadow-sm">
                {signatureName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-midnight-900 dark:text-champagne-200 transition-colors duration-700 block text-left drop-shadow-sm">
                {signatureTitle}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-champagne-600/50 dark:text-champagne-400/50 animate-bounce">
        <ArrowDown size={20} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;
