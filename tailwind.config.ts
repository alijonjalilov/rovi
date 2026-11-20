import type { Config } from "tailwindcss";

// Светлая тема VEDUSHIY: тёплый молочный фон, белые карточки,
// винный бордо как основной акцент и шампанское золото для деталей.
//
// Имена старых токенов сохранены, чтобы не ломать компоненты:
//   ink      → фон страницы (молочный)
//   milk     → основной текст (почти чёрный)
//   graphite → поверхности (белые карточки)
//   gold     → основной акцент (винный бордо)
// Новые токены: deep (тёмные панели), champagne (золото), blush (нежный розовый), line (границы).

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", md: "1.5rem", lg: "2rem" }, screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        ink: { DEFAULT: "#F6F2EC", 900: "#F6F2EC", 800: "#EFE9E1", 700: "#E7DFD4" },
        milk: { DEFAULT: "#1F1A1D", dim: "#3A3236" },
        graphite: { DEFAULT: "#FFFFFF", 600: "#FBF9F6", 500: "#F3EEE7", 400: "#E6DFD6" },
        gold: { DEFAULT: "#8E2C48", light: "#A8435F", pale: "#F5E4E9", dark: "#6B1F36" },
        beige: { DEFAULT: "#6E5F65", dark: "#4E4247" },
        deep: { DEFAULT: "#2A1420", 700: "#3B1B2C", 600: "#4E2539" },
        champagne: { DEFAULT: "#C9A24D", light: "#E2C88A", soft: "#F6ECD4", text: "#8A6416" },
        blush: { DEFAULT: "#F3DCE3", soft: "#FAEFF2" },
        line: { DEFAULT: "#E6DFD6", strong: "#D3C9BD" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { luxe: "0.22em" },
      borderRadius: { card: "24px", panel: "32px" },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #A8435F 0%, #8E2C48 50%, #6B1F36 100%)",
        "deep-gradient": "linear-gradient(150deg, #4E2539 0%, #2A1420 55%, #1B0D15 100%)",
        "champagne-gradient": "linear-gradient(135deg, #E2C88A 0%, #C9A24D 60%, #A88232 100%)",
      },
      boxShadow: {
        gold: "0 10px 30px -12px rgba(142,44,72,0.55)",
        card: "0 1px 2px rgba(42,20,32,0.05), 0 18px 40px -18px rgba(42,20,32,0.22)",
        float: "0 2px 4px rgba(42,20,32,0.05), 0 24px 50px -20px rgba(42,20,32,0.28)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(.34,1.56,.64,1)",
        out: "cubic-bezier(.22,1,.36,1)",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(8px)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-fast": "marquee 26s linear infinite",
        float: "float 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
