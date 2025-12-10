import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { STARDUST_TEXTURE } from "../constants";
import BrandLogo from "./BrandLogo";

interface NavigationProps {
  toggleTheme: () => void;
  isDark: boolean;
}

interface NavLink {
  name: string;
  href: string | null;
  children?: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleDropdownEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150); // Small delay to allow mouse to move to dropdown
  };

  const navLinks: NavLink[] = [
    {
      name: "Tratamentos",
      href: null,
      children: [
        { name: "Essenciais", href: "#individuais" },
        { name: "Terapêutico", href: "#terapeutico" },
        { name: "Face", href: "#facial" },
        { name: "Corpo", href: "#corporais" },
      ],
    },
    { name: "Rituais", href: "#especiais" },
    { name: "Sobre Mim", href: "#sobre" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700
        ${
          scrolled
            ? "py-2 md:py-4 bg-champagne-50/80 dark:bg-midnight-950/80 backdrop-blur-md border-b border-midnight-950/5 dark:border-white/5 shadow-sm"
            : "py-4 md:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          <BrandLogo scrolled={scrolled} />

          <div className="flex items-center gap-8">
            {/* Desktop Minimal Menu */}
            <div className="hidden md:flex gap-12 items-center">
              {navLinks.map((link) => {
                if (link.children) {
                  // Dropdown menu item
                  return (
                    <div
                      key={link.name}
                      ref={dropdownRef}
                      className="relative z-50"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        className={`text-xs uppercase tracking-[0.2em] transition-colors relative group duration-300 flex items-center gap-1
                          ${
                            scrolled
                              ? "text-midnight-900/70 hover:text-champagne-600 dark:text-champagne-100/60 dark:hover:text-champagne-400"
                              : "text-midnight-900/80 hover:text-champagne-600 dark:text-champagne-100/70 dark:hover:text-champagne-400"
                          }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ease-out ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-champagne-600 dark:bg-champagne-400 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                      </button>

                      {/* Invisible bridge to prevent closing when moving mouse to dropdown */}
                      <div
                        className={`absolute top-full left-0 right-0 h-2 z-[99] ${
                          dropdownOpen
                            ? "pointer-events-auto"
                            : "pointer-events-none"
                        }`}
                        onMouseEnter={handleDropdownEnter}
                      />

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ease-out z-[100] ${
                          dropdownOpen
                            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                            : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
                        }`}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <div className="bg-champagne-50/95 dark:bg-midnight-950/95 backdrop-blur-md border border-midnight-950/10 dark:border-white/10 rounded-sm shadow-xl min-w-[180px] py-2 overflow-hidden">
                          {link.children.map((child, idx) => (
                            <a
                              key={child.name}
                              href={child.href || "#"}
                              className="block px-6 py-3 text-xs uppercase tracking-[0.2em] text-midnight-900/70 dark:text-champagne-100/60 hover:text-champagne-600 dark:hover:text-champagne-400 hover:bg-champagne-500/10 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer relative z-10 group/item"
                              onClick={() => setDropdownOpen(false)}
                              style={{
                                animation: dropdownOpen
                                  ? `slideIn 0.3s ease-out ${idx * 0.05}s both`
                                  : "none",
                              }}
                            >
                              <span className="relative inline-block transform group-hover/item:translate-x-1 transition-transform duration-200">
                                {child.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  // Regular menu item
                  return (
                    <a
                      key={link.name}
                      href={link.href || "#"}
                      className={`text-xs uppercase tracking-[0.2em] transition-colors relative group duration-300
                        ${
                          scrolled
                            ? "text-midnight-900/70 hover:text-champagne-600 dark:text-champagne-100/60 dark:hover:text-champagne-400"
                            : "text-midnight-900/80 hover:text-champagne-600 dark:text-champagne-100/70 dark:hover:text-champagne-400"
                        }`}
                    >
                      {link.name}
                      <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-champagne-600 dark:bg-champagne-400 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                    </a>
                  );
                }
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 md:p-2 rounded-full transition-colors z-50 ${
                scrolled
                  ? "hover:bg-midnight-950/5 dark:hover:bg-white/10 text-midnight-950 dark:text-champagne-100"
                  : "text-midnight-950 dark:text-champagne-100 hover:bg-white/10"
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun
                  size={16}
                  strokeWidth={1.5}
                  className="md:w-[18px] md:h-[18px]"
                />
              ) : (
                <Moon
                  size={16}
                  strokeWidth={1.5}
                  className="md:w-[18px] md:h-[18px]"
                />
              )}
            </button>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden z-50 transition-colors ${
                scrolled
                  ? "text-midnight-950 dark:text-champagne-100"
                  : "text-midnight-950 dark:text-champagne-100"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X strokeWidth={1} /> : <Menu strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1)
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        bg-champagne-50 dark:bg-midnight-950 text-midnight-950 dark:text-champagne-100`}
      >
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${STARDUST_TEXTURE})` }}
        ></div>

        <div className="flex flex-col gap-8 text-center relative z-10">
          {navLinks.map((link, idx) => {
            if (link.children) {
              // Mobile dropdown menu item
              return (
                <div key={link.name} className="flex flex-col items-center">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="text-5xl md:text-7xl font-display hover:text-champagne-600 dark:hover:text-champagne-400 hover:italic transition-all duration-500 transform hover:translate-x-4 flex items-center gap-4"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {link.name}
                    <ChevronDown
                      size={32}
                      className={`transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      mobileDropdownOpen
                        ? "max-h-96 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      {link.children.map((child, childIdx) => (
                        <a
                          key={child.name}
                          href={child.href || "#"}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className="text-2xl md:text-4xl font-display hover:text-champagne-600 dark:hover:text-champagne-400 hover:italic transition-all duration-500 transform hover:translate-x-4"
                          style={{
                            transitionDelay: `${idx * 100 + childIdx * 50}ms`,
                          }}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else {
              // Regular mobile menu item
              return (
                <a
                  key={link.name}
                  href={link.href || "#"}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl md:text-7xl font-display hover:text-champagne-600 dark:hover:text-champagne-400 hover:italic transition-all duration-500 transform hover:translate-x-4"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {link.name}
                </a>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
