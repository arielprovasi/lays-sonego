import React from "react";

interface BrandLogoProps {
  scrolled: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ scrolled }) => {
  return (
    <a href="#" className="relative group z-50">
      <span
        className={`text-xl md:text-2xl font-display font-normal tracking-widest uppercase transition-colors duration-500 ${
          scrolled
            ? "text-midnight-950 dark:text-champagne-100"
            : "text-midnight-950 dark:text-champagne-100"
        }`}
      >
        Lays Sonego
      </span>
      <span
        className={`block text-[9px] md:text-[10px] tracking-[0.4em] font-sans mt-1 tracking-[0.5em] text-center ${
          scrolled
            ? "text-champagne-600 dark:text-champagne-400"
            : "text-champagne-600 dark:text-champagne-400"
        }`}
      >
        ESTÉTICA & ALMA
      </span>
    </a>
  );
};

export default BrandLogo;
