import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<Props> = ({
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`${centered ? "text-center" : "text-left"} relative`}>
      {/* Script Decoration */}
      <span
        className={`block font-script text-4xl text-champagne-600/80 dark:text-champagne-500/80 mb-2 transform ${
          centered ? "" : "-ml-4"
        } transition-colors duration-700`}
      >
        Rituais
      </span>

      <h2 className="text-5xl md:text-7xl font-display text-midnight-900 dark:text-champagne-100 uppercase tracking-wide leading-tight transition-colors duration-700">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 text-gray-600 dark:text-gray-400 font-light max-w-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } transition-colors duration-700`}
        >
          {subtitle}
        </p>
      )}

      {/* Ornamental Line */}
      <div
        className={`mt-8 h-px bg-gradient-to-r from-champagne-600/50 to-transparent w-24 ${
          centered ? "mx-auto" : ""
        }`}
      ></div>
    </div>
  );
};

export default SectionHeader;
