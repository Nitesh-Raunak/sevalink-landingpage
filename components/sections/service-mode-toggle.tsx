"use client";

import { Ambulance, HousePlus } from "lucide-react";

type ServiceMode = "emergency" | "homecare";

type ServiceModeToggleProps = {
  activeTab: ServiceMode;
  onChange: (mode: ServiceMode) => void;
};

export function ServiceModeToggle({ activeTab, onChange }: ServiceModeToggleProps) {

  return (
    <section className="pt-24 sm:pt-32 mb-1 sm:mb-4">
      <div className="container mx-auto px-4 sm:px-6 flex justify-center">
        <div className="relative inline-grid grid-cols-2 items-center rounded-full border border-gray-200/70 bg-white/90 p-1.5 shadow-md backdrop-blur-sm">
          <span
            aria-hidden
            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] rounded-full shadow-sm transition-all duration-300 ease-in-out ${
              activeTab === "homecare" ? "bg-emerald-600" : "bg-red-600"
            } ${
              activeTab === "emergency" ? "left-1.5" : "left-[calc(50%+0.125rem)]"
            }`}
          />
          <button
            type="button"
            onClick={() => onChange("emergency")}
            className={`inline-flex items-center gap-2 rounded-full px-2 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "emergency"
                ? "relative z-10 text-white"
                : "relative z-10 text-gray-800"
            }`}
          >
            <Ambulance className="h-4 w-4" />
            Emergency
          </button>

          <button
            type="button"
            onClick={() => onChange("homecare")}
            className={`inline-flex items-center gap-2 rounded-full px-2 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "homecare"
                ? "relative z-10 text-white"
                : "relative z-10 text-gray-800"
            }`}
          >
            <HousePlus className="h-4 w-4" />
            Home Care
          </button>
        </div>
      </div>
    </section>
  );
}
