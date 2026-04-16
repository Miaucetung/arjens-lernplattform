"use client";

import { RevealData } from "@/types";
import { useState } from "react";

export function RevealBlock({ data }: { data: RevealData }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [allRevealed, setAllRevealed] = useState(false);

  const handleNext = () => {
    if (currentStep < data.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setAllRevealed(true);
    }
  };

  return (
    <div className="card-glass p-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">📖</span>
        <span className="text-sm font-semibold text-accent-400 uppercase tracking-wide">
          Schritt für Schritt
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-4">{data.title}</h3>

      {/* Steps */}
      <div className="space-y-3">
        {data.steps.map((step, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index <= currentStep
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"
            }`}
          >
            <div className="flex gap-3">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  index < currentStep
                    ? "bg-green-500/20 text-green-400"
                    : index === currentStep
                      ? "bg-primary-500/20 text-primary-400 animate-pulse-glow"
                      : "bg-gray-800 text-gray-600"
                }`}
              >
                {index < currentStep ? "✓" : index + 1}
              </div>
              <div className="flex-1">
                <p className="text-gray-200">{step.content}</p>
                {step.highlight && (
                  <p className="text-sm text-primary-400 mt-1 font-medium">
                    → {step.highlight}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3 mt-4">
        <div className="flex-1 progress-bar">
          <div
            className="progress-bar-fill"
            style={{
              width: `${((currentStep + 1) / data.steps.length) * 100}%`,
              background: "linear-gradient(to right, #a855f7, #d946ef)",
            }}
          />
        </div>
        <span className="text-xs text-gray-500">
          {currentStep + 1}/{data.steps.length}
        </span>
      </div>

      {/* Next Button */}
      {!allRevealed && (
        <button onClick={handleNext} className="btn-primary w-full mt-4">
          {currentStep < data.steps.length - 1 ? "Weiter →" : "Verstanden ✓"}
        </button>
      )}

      {allRevealed && (
        <div className="mt-4 text-center text-green-400 font-semibold animate-bounce-in">
          ✅ Alles verstanden!
        </div>
      )}
    </div>
  );
}
