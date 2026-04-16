"use client";

import { ScenarioData } from "@/types";
import { useState } from "react";

export function ScenarioBlock({ data }: { data: ScenarioData }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userThought, setUserThought] = useState("");

  return (
    <div className="card-glass p-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🔬</span>
        <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
          Reales Beispiel
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{data.title}</h3>
      <p className="text-gray-300 mb-4">{data.scenario}</p>

      {/* Question */}
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <p className="font-medium text-white">❓ {data.question}</p>
      </div>

      {/* User input area */}
      {!showAnswer && (
        <>
          <textarea
            value={userThought}
            onChange={(e) => setUserThought(e.target.value)}
            placeholder="Deine Erklärung..."
            className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-3 text-white placeholder-gray-500 resize-none h-20 mb-4 focus:border-cyan-500 focus:outline-none transition-colors"
          />
          <button
            onClick={() => setShowAnswer(true)}
            className="btn-primary w-full"
          >
            Antwort zeigen
          </button>
        </>
      )}

      {/* Answer */}
      {showAnswer && (
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 animate-fade-in">
          <p className="font-semibold text-cyan-400 mb-2">💡 Erklärung:</p>
          <p className="text-gray-300 mb-2">{data.answer}</p>
          <p className="text-sm text-gray-400">{data.explanation}</p>
        </div>
      )}
    </div>
  );
}
