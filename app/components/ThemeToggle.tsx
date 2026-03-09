'use client';
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.body.style.backgroundColor = "#030712";
      document.body.style.color = "#ffffff";
      document.querySelector('footer')?.setAttribute('style', 'background-color: #030712 !important');
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#111827";
      document.querySelector('footer')?.setAttribute('style', 'background-color: #ffffff !important');
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-xl hover:scale-110 transition-all"
      style={{ background: isDark ? "#ffffff" : "#1a1a2e" }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}