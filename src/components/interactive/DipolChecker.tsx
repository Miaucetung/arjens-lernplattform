"use client";

import { useState } from "react";

interface DipolQuestion {
  molecule: string;
  formula: string;
  isDipol: boolean;
  explanation: string;
  geometry: string;
}

const questions: DipolQuestion[] = [
  {
    molecule: "Wasser",
    formula: "H₂O",
    isDipol: true,
    explanation: "Wasser hat eine gewinkelte Struktur (104,5°). Die O–H-Bindungen sind polar, und die Dipolmomente heben sich wegen der gewinkelten Form NICHT auf → Dipol!",
    geometry: "gewinkelt",
  },
  {
    molecule: "Kohlenstoffdioxid",
    formula: "CO₂",
    isDipol: false,
    explanation: "CO₂ ist linear. Die beiden C=O-Bindungen sind zwar polar, aber die Dipolmomente zeigen in entgegengesetzte Richtungen und heben sich auf → kein Dipol!",
    geometry: "linear",
  },
  {
    molecule: "Ammoniak",
    formula: "NH₃",
    isDipol: true,
    explanation: "NH₃ hat eine trigonal-pyramidale Struktur. Die N–H-Bindungen sind polar und die Geometrie sorgt dafür, dass sich die Dipolmomente NICHT aufheben → Dipol!",
    geometry: "trigonal-pyramidal",
  },
  {
    molecule: "Methan",
    formula: "CH₄",
    isDipol: false,
    explanation: "CH₄ ist tetraedrisch und symmetrisch. Die C–H-Bindungen sind nur schwach polar und die Dipolmomente heben sich durch die Symmetrie auf → kein Dipol!",
    geometry: "tetraedrisch",
  },
  {
    molecule: "Fluorwasserstoff",
    formula: "HF",
    isDipol: true,
    explanation: "HF hat nur eine Bindung. Fluor ist viel elektronegativer als Wasserstoff, daher gibt es ein klares Dipolmoment → Dipol!",
    geometry: "linear (2 Atome)",
  },
  {
    molecule: "Schwefeldioxid",
    formula: "SO₂",
    isDipol: true,
    explanation: "SO₂ ist gewinkelt mit freiem Elektronenpaar am Schwefel. Die Dipolmomente heben sich nicht auf → Dipol!",
    geometry: "gewinkelt",
  },
];

export function DipolChecker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);

  const q = questions[currentIndex];
  const isCorrect = answer === q.isDipol;

  const handleAnswer = (isDipol: boolean) => {
    setAnswer(isDipol);
    setRevealed(true);
    if (isDipol === q.isDipol) setScore(score + 1);
  };

  const handleNext = () => {
    setAnswer(null);
    setRevealed(false);
    setCurrentIndex((currentIndex + 1) % questions.length);
  };

  return (
    <div className="card-glass p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <h3 className="font-bold text-white">Dipol-Checker</h3>
        </div>
        <span className="badge-xp">{score}/{questions.length}</span>
      </div>

      {/* Progress */}
      <div className="progress-bar mb-4">
        <div
          className="progress-bar-fill"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Molecule Card */}
      <div className="bg-gray-800/50 rounded-xl p-6 text-center mb-4">
        <p className="text-3xl font-bold text-white mb-1">{q.formula}</p>
        <p className="text-gray-400">{q.molecule}</p>
        <p className="text-xs text-gray-500 mt-1">Geometrie: {q.geometry}</p>
      </div>

      {/* Question */}
      <p className="text-center text-gray-300 mb-4 font-medium">
        Ist dieses Molekül ein Dipol?
      </p>

      {/* Answer Buttons */}
      {!revealed && (
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleAnswer(true)}
            className="p-4 rounded-xl border border-gray-700 bg-gray-800/50 hover:border-green-500 hover:bg-green-500/10 transition-all text-center"
          >
            <span className="text-2xl block mb-1">✅</span>
            <span className="font-semibold text-white">Ja, Dipol</span>
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="p-4 rounded-xl border border-gray-700 bg-gray-800/50 hover:border-red-500 hover:bg-red-500/10 transition-all text-center"
          >
            <span className="text-2xl block mb-1">❌</span>
            <span className="font-semibold text-white">Kein Dipol</span>
          </button>
        </div>
      )}

      {/* Result */}
      {revealed && (
        <div className="animate-fade-in">
          <div className={`p-4 rounded-xl mb-3 ${
            isCorrect
              ? "bg-green-500/10 border border-green-500/30"
              : "bg-red-500/10 border border-red-500/30"
          }`}>
            <p className={`font-bold mb-2 ${isCorrect ? "text-green-400" : "text-red-400"}`}>
              {isCorrect ? "🎉 Richtig!" : "❌ Leider falsch!"}
            </p>
            <p className="text-sm text-gray-300">{q.explanation}</p>
          </div>
          <button onClick={handleNext} className="btn-primary w-full">
            Nächstes Molekül →
          </button>
        </div>
      )}
    </div>
  );
}
