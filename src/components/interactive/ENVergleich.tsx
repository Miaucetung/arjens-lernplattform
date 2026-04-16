"use client";

import { useState } from "react";

interface ENPair {
  id: string;
  left: { element: string; en: number; symbol: string };
  right: { element: string; en: number; symbol: string };
  explanation: string;
}

const pairs: ENPair[] = [
  {
    id: "1",
    left: { element: "Sauerstoff", en: 3.44, symbol: "O" },
    right: { element: "Wasserstoff", en: 2.20, symbol: "H" },
    explanation: "Sauerstoff (EN 3,44) zieht die Elektronen stärker an als Wasserstoff (EN 2,20). ΔEN = 1,24 → polare Bindung!",
  },
  {
    id: "2",
    left: { element: "Fluor", en: 3.98, symbol: "F" },
    right: { element: "Chlor", en: 3.16, symbol: "Cl" },
    explanation: "Fluor hat die höchste EN aller Elemente (3,98). Chlor kommt mit 3,16 dahinter. Fluor zieht stärker!",
  },
  {
    id: "3",
    left: { element: "Kohlenstoff", en: 2.55, symbol: "C" },
    right: { element: "Stickstoff", en: 3.04, symbol: "N" },
    explanation: "Stickstoff (EN 3,04) ist elektronegativer als Kohlenstoff (EN 2,55). In C–N-Bindungen zieht N die Elektronen zu sich.",
  },
  {
    id: "4",
    left: { element: "Natrium", en: 0.93, symbol: "Na" },
    right: { element: "Chlor", en: 3.16, symbol: "Cl" },
    explanation: "Riesiger EN-Unterschied (ΔEN = 2,23)! Chlor zieht so stark, dass Natrium sein Elektron komplett abgibt → Ionenbindung!",
  },
  {
    id: "5",
    left: { element: "Schwefel", en: 2.58, symbol: "S" },
    right: { element: "Sauerstoff", en: 3.44, symbol: "O" },
    explanation: "Sauerstoff (EN 3,44) ist deutlich elektronegativer als Schwefel (EN 2,58). In S–O-Bindungen ist O der negative Pol.",
  },
];

export function ENVergleich() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<"left" | "right" | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);

  const pair = pairs[currentIndex];
  const strongerSide = pair.left.en > pair.right.en ? "left" : "right";
  const isCorrect = selected === strongerSide;

  const handleSelect = (side: "left" | "right") => {
    setSelected(side);
    setRevealed(true);
    if (side === strongerSide) setScore(score + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setRevealed(false);
    setCurrentIndex((currentIndex + 1) % pairs.length);
  };

  return (
    <div className="card-glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧲</span>
          <h3 className="font-bold text-white">EN-Vergleich</h3>
        </div>
        <span className="badge-xp">{score}/{pairs.length}</span>
      </div>

      <p className="text-gray-300 text-center mb-4 font-medium">
        Welches Atom zieht die Elektronen stärker an?
      </p>

      {/* Element Cards */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {(["left", "right"] as const).map((side) => {
          const el = pair[side];
          let border = "border-gray-700 hover:border-primary-500";
          if (revealed) {
            border = side === strongerSide
              ? "border-green-500 bg-green-500/5"
              : "border-gray-800";
          } else if (selected === side) {
            border = "border-primary-500 bg-primary-500/5";
          }

          return (
            <button
              key={side}
              onClick={() => !revealed && handleSelect(side)}
              disabled={revealed}
              className={`p-5 rounded-xl border transition-all text-center ${border}`}
            >
              <div className="text-4xl font-bold text-white mb-1">{el.symbol}</div>
              <div className="text-sm text-gray-400">{el.element}</div>
              {revealed && (
                <div className="text-xs text-primary-400 mt-2 animate-fade-in font-semibold">
                  EN: {el.en.toFixed(2)}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* VS */}
      {!revealed && (
        <div className="text-center text-gray-600 text-sm mb-4">Tippe auf das stärkere Element!</div>
      )}

      {/* Result */}
      {revealed && (
        <div className="animate-fade-in">
          <div className={`p-4 rounded-xl mb-3 ${
            isCorrect ? "bg-green-500/10 border border-green-500/30" : "bg-red-500/10 border border-red-500/30"
          }`}>
            <p className={`font-bold mb-2 ${isCorrect ? "text-green-400" : "text-red-400"}`}>
              {isCorrect ? "🎉 Richtig!" : "❌ Nicht ganz!"}
            </p>
            <p className="text-sm text-gray-300">{pair.explanation}</p>
          </div>
          <button onClick={handleNext} className="btn-primary w-full">
            Nächstes Paar →
          </button>
        </div>
      )}
    </div>
  );
}
