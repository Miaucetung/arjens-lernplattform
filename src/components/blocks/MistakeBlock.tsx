"use client";

import { MistakeData } from "@/types";
import { useState } from "react";

export function MistakeBlock({ data }: { data: MistakeData }) {
  const [showCorrect, setShowCorrect] = useState(false);

  return (
    <div className="card-glass p-5 animate-slide-up border-red-500/20">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">⚠️</span>
        <span className="text-sm font-semibold text-red-400 uppercase tracking-wide">
          Typischer Fehler
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-4">{data.title}</h3>

      {/* Wrong Answer */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">❌</span>
          <span className="font-semibold text-red-400">Falsch:</span>
        </div>
        <p className="text-gray-300">{data.wrongAnswer}</p>
        <p className="text-sm text-red-400/80 mt-2">→ {data.whyWrong}</p>
      </div>

      {/* Reveal correct */}
      {!showCorrect ? (
        <button
          onClick={() => setShowCorrect(true)}
          className="btn-secondary w-full"
        >
          Wie ist es richtig? →
        </button>
      ) : (
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">✅</span>
            <span className="font-semibold text-green-400">Richtig:</span>
          </div>
          <p className="text-gray-300">{data.correctAnswer}</p>
          <p className="text-sm text-green-400/80 mt-2">→ {data.whyCorrect}</p>
        </div>
      )}
    </div>
  );
}
