"use client";

import { PredictionData } from "@/types";
import { useState } from "react";

export function PredictionBlock({ data }: { data: PredictionData }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [userInput, setUserInput] = useState("");

  const isCorrect = data.options
    ? selected === data.correctAnswer
    : userInput.trim().toLowerCase() === data.correctAnswer.toLowerCase();

  const handleCheck = () => {
    setRevealed(true);
  };

  return (
    <div className="card-glass p-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🤔</span>
        <span className="text-sm font-semibold text-primary-400 uppercase tracking-wide">
          Was denkst du?
        </span>
      </div>

      {/* Question */}
      <h3 className="text-lg font-bold text-white mb-4">{data.question}</h3>

      {/* Hint */}
      {data.hint && !revealed && (
        <p className="text-sm text-gray-400 bg-gray-800/50 rounded-lg p-3 mb-4">
          💡 Tipp: {data.hint}
        </p>
      )}

      {/* Options or Free Input */}
      {data.options ? (
        <div className="space-y-2 mb-4">
          {data.options.map((opt) => (
            <button
              key={opt}
              onClick={() => !revealed && setSelected(opt)}
              disabled={revealed}
              className={`w-full text-left p-3 rounded-xl border transition-all duration-200 ${
                revealed && opt === data.correctAnswer
                  ? "border-green-500 bg-green-500/10 text-green-300"
                  : revealed && opt === selected && opt !== data.correctAnswer
                    ? "border-red-500 bg-red-500/10 text-red-300"
                    : selected === opt
                      ? "border-primary-500 bg-primary-500/10 text-primary-300"
                      : "border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={revealed}
          placeholder="Schreib deine Vermutung..."
          className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-3 text-white placeholder-gray-500 resize-none h-20 mb-4 focus:border-primary-500 focus:outline-none transition-colors"
        />
      )}

      {/* Check Button */}
      {!revealed && (
        <button
          onClick={handleCheck}
          disabled={!selected && !userInput.trim()}
          className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Überprüfen
        </button>
      )}

      {/* Result */}
      {revealed && (
        <div
          className={`mt-4 p-4 rounded-xl animate-fade-in ${
            isCorrect
              ? "bg-green-500/10 border border-green-500/30"
              : "bg-amber-500/10 border border-amber-500/30"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{isCorrect ? "✅" : "💡"}</span>
            <span
              className={`font-bold ${isCorrect ? "text-green-400" : "text-amber-400"}`}
            >
              {isCorrect ? "Richtig!" : "Nicht ganz – aber gut gedacht!"}
            </span>
          </div>
          <p className="text-sm text-gray-300">{data.explanation}</p>
        </div>
      )}
    </div>
  );
}
