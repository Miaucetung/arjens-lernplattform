"use client";

import { QuizData } from "@/types";
import { useState } from "react";

export function QuizBlock({ data }: { data: QuizData }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const selectedOption = data.options.find((o) => o.id === selectedId);
  const isCorrect = selectedOption?.correct ?? false;

  const handleAnswer = () => {
    if (selectedId) setAnswered(true);
  };

  const difficultyColors = {
    easy: "text-green-400 bg-green-500/10",
    medium: "text-amber-400 bg-amber-500/10",
    hard: "text-red-400 bg-red-500/10",
  };

  const difficultyLabels = {
    easy: "Leicht",
    medium: "Mittel",
    hard: "Schwer",
  };

  return (
    <div className="card-glass p-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">❓</span>
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
            Quiz
          </span>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${difficultyColors[data.difficulty]}`}
        >
          {difficultyLabels[data.difficulty]}
        </span>
      </div>

      {/* Question */}
      <h3 className="text-lg font-bold text-white mb-4">{data.question}</h3>

      {/* Options */}
      <div className="space-y-2 mb-4">
        {data.options.map((opt) => {
          let style =
            "border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600";

          if (answered) {
            if (opt.correct) {
              style = "border-green-500 bg-green-500/10 text-green-300";
            } else if (opt.id === selectedId) {
              style = "border-red-500 bg-red-500/10 text-red-300";
            } else {
              style = "border-gray-800 bg-gray-900/50 text-gray-600";
            }
          } else if (opt.id === selectedId) {
            style = "border-primary-500 bg-primary-500/10 text-primary-300";
          }

          return (
            <button
              key={opt.id}
              onClick={() => !answered && setSelectedId(opt.id)}
              disabled={answered}
              className={`w-full text-left p-3 rounded-xl border transition-all duration-200 ${style}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    answered && opt.correct
                      ? "border-green-500 bg-green-500 text-white"
                      : answered && opt.id === selectedId
                        ? "border-red-500 bg-red-500 text-white"
                        : opt.id === selectedId
                          ? "border-primary-500 bg-primary-500"
                          : "border-gray-600"
                  }`}
                >
                  {answered && opt.correct && "✓"}
                  {answered && opt.id === selectedId && !opt.correct && "✗"}
                </div>
                <span>{opt.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Submit Button */}
      {!answered && (
        <button
          onClick={handleAnswer}
          disabled={!selectedId}
          className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Antwort prüfen
        </button>
      )}

      {/* Result */}
      {answered && (
        <div
          className={`mt-4 p-4 rounded-xl animate-fade-in ${
            isCorrect
              ? "bg-green-500/10 border border-green-500/30"
              : "bg-red-500/10 border border-red-500/30"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{isCorrect ? "🎉" : "❌"}</span>
            <span
              className={`font-bold ${isCorrect ? "text-green-400" : "text-red-400"}`}
            >
              {isCorrect ? "Richtig!" : "Leider falsch"}
            </span>
          </div>
          <p className="text-sm text-gray-300">{data.explanation}</p>
        </div>
      )}
    </div>
  );
}
