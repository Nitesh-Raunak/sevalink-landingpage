'use client';
import { useState } from "react";
import Header from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "bg-gray-950" : "bg-white"}>
      <Header />
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-xl hover:scale-110 transition-all"
        style={{ background: isDark ? "#ffffff" : "#1a1a2e" }}
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      <Footer isDark={isDark} />
    </div>
  );
}