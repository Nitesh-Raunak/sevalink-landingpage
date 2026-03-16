'use client';

import { useEffect, useState } from "react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#FFF3E0] flex flex-col items-center justify-center p-4 overflow-hidden"
      style={{ width: '100vw', height: '100vh', left: 0, top: 0 }}
    >
      
      {/* SevaLink Logo/Text */}
      <h1 className="text-2xl sm:text-3xl font-black text-red-600 tracking-[0.2em] uppercase mb-12 text-center">
        SevaLink
      </h1>
      
      {/* Loader circles */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 max-w-full">
        {[0, 0.3, 0.6, 0.9, 1.2].map((delay, i) => (
          <div key={i} className="relative flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 shrink-0 border-2 border-red-600 rounded-full"
            style={{
              animation: `circle-keys 2s ease-in-out ${delay}s infinite`,
            }}>
            <div className="absolute w-2.5 h-2.5 sm:w-4 sm:h-4 bg-red-600 rounded-full"
              style={{
                animation: `dot-keys 2s ease-in-out ${delay}s infinite`,
              }} />
            <div className="absolute inset-0 rounded-full"
              style={{
                animation: `outline-keys 2s ease-in-out ${delay + 0.9}s infinite`,
              }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes circle-keys {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.4; }
        }
        @keyframes dot-keys {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0); }
        }
        @keyframes outline-keys {
          0% { transform: scale(0); outline: solid 15px #DC2626; outline-offset: 0; opacity: 1; }
          100% { transform: scale(1.5); outline: solid 0 transparent; outline-offset: 15px; opacity: 0; }
        }
      `}</style>
    </div>
  );
}