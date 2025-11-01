import { useTheme } from "./ThemeContext";

export default function Card({ title, children }) {
  const { dark, colors } = useTheme(); // 🎨 get theme state and colors

  return (
    <div
      style={{
        backgroundColor: colors.card,     // switchable color
        color: colors.text,
        border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`, // dark/light border
        boxShadow: dark
          ? "0 2px 8px rgba(0,0,0,0.4)"
          : "0 2px 6px rgba(0,0,0,0.1)",
        borderRadius: "0.75rem",
        padding: "1rem",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
