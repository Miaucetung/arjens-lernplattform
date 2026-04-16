"use client";

import { useState } from "react";

interface EPAMolecule {
  name: string;
  formula: string;
  bindingPairs: number;
  freePairs: number;
  geometry: string;
  angle: string;
  explanation: string;
  svgPoints: { x: number; y: number; label: string; type: "atom" | "free" }[];
}

const molecules: EPAMolecule[] = [
  {
    name: "Methan",
    formula: "CH₄",
    bindingPairs: 4,
    freePairs: 0,
    geometry: "tetraedrisch",
    angle: "109,5°",
    explanation: "4 bindende Elektronenpaare stoßen sich gleichmäßig ab → tetraedrische Anordnung mit 109,5°-Winkeln.",
    svgPoints: [
      { x: 150, y: 100, label: "C", type: "atom" },
      { x: 100, y: 50, label: "H", type: "atom" },
      { x: 200, y: 50, label: "H", type: "atom" },
      { x: 100, y: 150, label: "H", type: "atom" },
      { x: 200, y: 150, label: "H", type: "atom" },
    ],
  },
  {
    name: "Wasser",
    formula: "H₂O",
    bindingPairs: 2,
    freePairs: 2,
    geometry: "gewinkelt",
    angle: "104,5°",
    explanation: "2 bindende + 2 freie Elektronenpaare. Die freien Paare brauchen mehr Platz und drücken die H-Atome zusammen → gewinkelter Bau (104,5° statt 109,5°)!",
    svgPoints: [
      { x: 150, y: 120, label: "O", type: "atom" },
      { x: 90, y: 160, label: "H", type: "atom" },
      { x: 210, y: 160, label: "H", type: "atom" },
      { x: 120, y: 60, label: ":", type: "free" },
      { x: 180, y: 60, label: ":", type: "free" },
    ],
  },
  {
    name: "Kohlenstoffdioxid",
    formula: "CO₂",
    bindingPairs: 2,
    freePairs: 0,
    geometry: "linear",
    angle: "180°",
    explanation: "2 Doppelbindungen (zählen wie 2 Elektronenpaare) stoßen sich ab → maximaler Abstand = linear, 180°.",
    svgPoints: [
      { x: 150, y: 100, label: "C", type: "atom" },
      { x: 70, y: 100, label: "O", type: "atom" },
      { x: 230, y: 100, label: "O", type: "atom" },
    ],
  },
  {
    name: "Ammoniak",
    formula: "NH₃",
    bindingPairs: 3,
    freePairs: 1,
    geometry: "trigonal-pyramidal",
    angle: "107°",
    explanation: "3 bindende + 1 freies Elektronenpaar. Das freie Paar drückt die 3 H-Atome nach unten → Pyramidenform!",
    svgPoints: [
      { x: 150, y: 100, label: "N", type: "atom" },
      { x: 90, y: 155, label: "H", type: "atom" },
      { x: 150, y: 170, label: "H", type: "atom" },
      { x: 210, y: 155, label: "H", type: "atom" },
      { x: 150, y: 45, label: ":", type: "free" },
    ],
  },
];

export function EPASimulator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(0); // 0=question, 1=predict, 2=reveal
  const [userGuess, setUserGuess] = useState("");

  const mol = molecules[currentIndex];

  const geometryOptions = ["linear", "gewinkelt", "trigonal-planar", "tetraedrisch", "trigonal-pyramidal"];

  return (
    <div className="card-glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔮</span>
          <h3 className="font-bold text-white">EPA-Simulator</h3>
        </div>
        <span className="text-sm text-gray-400">{currentIndex + 1}/{molecules.length}</span>
      </div>

      {/* Step 0: Show info */}
      {step === 0 && (
        <div className="animate-fade-in">
          <div className="bg-gray-800/50 rounded-xl p-6 text-center mb-4">
            <p className="text-3xl font-bold text-white mb-1">{mol.formula}</p>
            <p className="text-gray-400">{mol.name}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-blue-400">{mol.bindingPairs}</p>
              <p className="text-xs text-gray-400">Bindende Paare</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-purple-400">{mol.freePairs}</p>
              <p className="text-xs text-gray-400">Freie Paare</p>
            </div>
          </div>

          <button onClick={() => setStep(1)} className="btn-primary w-full">
            Welche Geometrie hat das Molekül? 🤔
          </button>
        </div>
      )}

      {/* Step 1: Predict */}
      {step === 1 && (
        <div className="animate-fade-in">
          <p className="text-gray-300 mb-4 text-center font-medium">
            {mol.formula} hat {mol.bindingPairs} bindende und {mol.freePairs} freie Elektronenpaare.
            <br />Welche Form hat das Molekül?
          </p>

          <div className="space-y-2 mb-4">
            {geometryOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setUserGuess(opt)}
                className={`w-full text-left p-3 rounded-xl border transition-all ${
                  userGuess === opt
                    ? "border-primary-500 bg-primary-500/10 text-primary-300"
                    : "border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!userGuess}
            className="btn-primary w-full disabled:opacity-40"
          >
            Überprüfen
          </button>
        </div>
      )}

      {/* Step 2: Reveal */}
      {step === 2 && (
        <div className="animate-fade-in">
          {/* Result */}
          <div className={`p-4 rounded-xl mb-4 ${
            userGuess === mol.geometry
              ? "bg-green-500/10 border border-green-500/30"
              : "bg-amber-500/10 border border-amber-500/30"
          }`}>
            <p className={`font-bold mb-1 ${
              userGuess === mol.geometry ? "text-green-400" : "text-amber-400"
            }`}>
              {userGuess === mol.geometry ? "🎉 Richtig!" : `💡 Die richtige Antwort ist: ${mol.geometry}`}
            </p>
            <p className="text-sm text-gray-300">Winkel: {mol.angle}</p>
          </div>

          {/* Visual */}
          <div className="bg-gray-800/50 rounded-xl p-4 mb-4 flex justify-center">
            <svg viewBox="0 0 300 200" className="w-full max-w-xs">
              {/* Lines from center atom */}
              {mol.svgPoints.slice(1).map((p, i) => (
                <line
                  key={i}
                  x1={mol.svgPoints[0].x}
                  y1={mol.svgPoints[0].y}
                  x2={p.x}
                  y2={p.y}
                  stroke={p.type === "free" ? "#a855f7" : "#94a3b8"}
                  strokeWidth="2"
                  strokeDasharray={p.type === "free" ? "4 4" : "none"}
                />
              ))}
              {/* Atoms */}
              {mol.svgPoints.map((p, i) => (
                <g key={i}>
                  {p.type === "atom" ? (
                    <>
                      <circle cx={p.x} cy={p.y} r="18" fill={i === 0 ? "#3b82f6" : "#6b7280"} opacity="0.2" />
                      <circle cx={p.x} cy={p.y} r="15" fill="transparent" stroke={i === 0 ? "#3b82f6" : "#94a3b8"} strokeWidth="2" />
                      <text x={p.x} y={p.y + 5} textAnchor="middle" fill={i === 0 ? "#60a5fa" : "#d1d5db"} className="text-sm font-bold">
                        {p.label}
                      </text>
                    </>
                  ) : (
                    <>
                      <circle cx={p.x} cy={p.y} r="12" fill="#a855f7" opacity="0.15" />
                      <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#a855f7" className="text-xs font-bold">
                        {p.label}
                      </text>
                    </>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Explanation */}
          <p className="text-sm text-gray-300 mb-4">{mol.explanation}</p>

          <button
            onClick={() => {
              setStep(0);
              setUserGuess("");
              setCurrentIndex((currentIndex + 1) % molecules.length);
            }}
            className="btn-primary w-full"
          >
            Nächstes Molekül →
          </button>
        </div>
      )}
    </div>
  );
}
