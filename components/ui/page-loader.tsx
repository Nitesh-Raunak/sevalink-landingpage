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
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: "#FFF3E0" }}>
      
      {/* SevaLink Logo/Text */}
      <p className="text-2xl font-extrabold text-red-600 tracking-widest uppercase">
        SevaLink
      </p>

      {/* Loader circles */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {[0, 0.3, 0.6, 0.9, 1.2].map((delay, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: "20px",
            height: "20px",
            border: "solid 2px #DC2626",
            borderRadius: "50%",
            margin: "0 10px",
            animation: `circle-keys 2s ease-in-out ${delay}s infinite`,
          }}>
            <div style={{
              position: "absolute",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#DC2626",
              animation: `dot-keys 2s ease-in-out ${delay}s infinite`,
            }} />
            <div style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              animation: `outline-keys 2s ease-in-out ${delay + 0.9}s infinite`,
            }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes circle-keys {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes dot-keys {
          0% { transform: scale(1); }
          50% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        @keyframes outline-keys {
          0% { transform: scale(0); outline: solid 20px #DC2626; outline-offset: 0; opacity: 1; }
          100% { transform: scale(1); outline: solid 0 transparent; outline-offset: 20px; opacity: 0; }
        }
      `}</style>
    </div>
  );
}