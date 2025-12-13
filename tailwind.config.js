/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#050505", // Pure elegance black/navy hybrid
          900: "#0a0a0a",
          800: "#121212",
          100: "#E0E7FF", // Very light blue for light mode accents
        },
        champagne: {
          50: "#FCFAF7", // Cream background for light mode
          100: "#FBF7F0", // Silk white
          200: "#F0E6D2",
          300: "#E6D5B8",
          400: "#D4B88C", // Muted Gold
          500: "#C19D6C", // Rich Bronze/Gold
          600: "#9E7C4F",
          700: "#7A6240",
          800: "#5D4A2F",
          900: "#4A3B22", // Dark gold for text in light mode
        },
        sky: {
          50: "#f5feff", // Pastel blue
          950: "#082f49", // Dark sky blue
        },
        slate: {
          900: "#0a0d14", // Black with subtle blue tint
          950: "#0a0d14",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        display: ["Italiana", "serif"],
        script: ["Pinyon Script", "cursive"],
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "silk-texture":
          "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=75&w=1200&auto=format&fit=crop&fm=webp')",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "slow-spin": "spin 20s linear infinite",
        reveal: "reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideIn: "slideIn 0.3s ease-out both",
        pulse: "pulse 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
}

