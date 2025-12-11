import React, { useState, useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const isScrolledDown = currentScrollY > 300;

      // Show button only when scrolling up AND already scrolled down more than 300px
      if (isScrollingUp && isScrolledDown) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    // Initialize lastScrollY
    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-champagne-500/90 dark:bg-champagne-500/80 text-midnight-950 shadow-lg backdrop-blur-sm border border-champagne-400/30 dark:border-champagne-400/20 transition-all duration-500 ease-out hover:bg-champagne-400 dark:hover:bg-champagne-400 hover:scale-110 active:scale-95 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={20} strokeWidth={2} />
    </button>
  );
};

export default ScrollToTop;

