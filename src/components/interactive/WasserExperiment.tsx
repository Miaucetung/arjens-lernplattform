"use client";

import { useState } from "react";

interface WaterExperiment {
  step: number;
  title: string;
  content: string;
  question?: string;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
  visual: "setup" | "stream" | "deflection" | "explanation";
}

const steps: WaterExperiment[] = [
  {
    step: 1,
    title: "Das Experiment",
    content: "Stell dir vor: Du reibst einen Luftballon an deinem Pullover und hältst ihn neben einen dünnen Wasserstrahl aus dem Wasserhahn.",
    visual: "setup",
  },
  {
    step: 2,
    title: "Was passiert?",
    content: "Der Wasserstrahl wird zum Luftballon hin abgelenkt! Aber warum?",
    question: "Was glaubst du – warum wird der Wasserstrahl abgelenkt?",
    options: [
      "Wasser ist magnetisch",
      "Wasser-Moleküle sind Dipole",
      "Der Luftballon saugt das Wasser an",
      "Statische Elektrizität drückt das Wasser weg",
    ],
    correctAnswer: "Wasser-Moleküle sind Dipole",
    explanation: "Wasser-Moleküle sind Dipole! Der geladene Ballon zieht die positive Seite der Wassermoleküle an.",
    visual: "stream",
  },
  {
    step: 3,
    title: "Die Erklärung",
    content: "Durch Reiben wird der Ballon negativ geladen. Die Wasser-Dipole richten sich mit ihrem positiven Ende (H-Atome) zum Ballon aus. Diese Anziehung lenkt den Wasserstrahl ab!",
    visual: "deflection",
  },
  {
    step: 4,
    title: "Der Zusammenhang",
    content: "Das funktioniert NUR, weil Wasser ein Dipol ist! Bei unpolaren Flüssigkeiten (z.B. Hexan) würde der Strahl NICHT abgelenkt werden.",
    visual: "explanation",
  },
];

export function WasserExperiment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerRevealed, setAnswerRevealed] = useState(false);

  const s = steps[currentStep];
  const isCorrect = selectedAnswer === s.correctAnswer;

  const handleCheck = () => setAnswerRevealed(true);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    setSelectedAnswer(null);
    setAnswerRevealed(false);
  };

  return (
    <div className="card-glass p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧪</span>
          <h3 className="font-bold text-white">Experiment: Wasserstrahl</h3>
        </div>
        <span className="text-sm text-gray-400">{currentStep + 1}/{steps.length}</span>
      </div>

      {/* Progress */}
      <div className="progress-bar mb-4">
        <div
          className="progress-bar-fill"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%`, background: "linear-gradient(to right, #06b6d4, #3b82f6)" }}
        />
      </div>

      {/* Visual */}
      <div className="bg-gray-800/50 rounded-xl p-6 mb-4 flex justify-center">
        <svg viewBox="0 0 200 160" className="w-full max-w-[200px]">
          {/* Faucet */}
          <rect x="80" y="5" width="40" height="15" rx="3" fill="#6b7280" />
          <rect x="95" y="20" width="10" height="10" fill="#6b7280" />

          {/* Water stream */}
          <path
            d={s.visual === "deflection" || s.visual === "explanation"
              ? "M100 30 Q100 80 80 140"
              : "M100 30 L100 140"
            }
            stroke="#60a5fa"
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          />

          {/* Balloon */}
          {(s.visual === "stream" || s.visual === "deflection" || s.visual === "explanation") && (
            <g>
              <ellipse cx="45" cy="90" rx="25" ry="30" fill="#ef4444" opacity="0.7" />
              <text x="45" y="95" textAnchor="middle" fill="white" className="text-[8px] font-bold">
                {s.visual === "deflection" || s.visual === "explanation" ? "−−" : "🎈"}
              </text>
              <line x1="45" y1="120" x2="50" y2="145" stroke="#ef4444" strokeWidth="1.5" />
            </g>
          )}

          {/* Dipole arrows for explanation */}
          {s.visual === "explanation" && (
            <g>
              <text x="120" y="70" fill="#fbbf24" className="text-[7px]">δ+</text>
              <text x="75" y="70" fill="#60a5fa" className="text-[7px]">δ−</text>
              <line x1="110" y1="75" x2="80" y2="75" stroke="#fbbf24" strokeWidth="1" markerEnd="url(#arrow)" />
            </g>
          )}

          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
              <path d="M0,0 L6,2 L0,4" fill="#fbbf24" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <h4 className="font-bold text-white mb-2">{s.title}</h4>
      <p className="text-gray-300 text-sm mb-4">{s.content}</p>

      {/* Question */}
      {s.question && !answerRevealed && (
        <>
          <p className="font-medium text-white mb-3">🤔 {s.question}</p>
          <div className="space-y-2 mb-4">
            {s.options?.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedAnswer(opt)}
                className={`w-full text-left p-3 rounded-xl border text-sm transition-all ${
                  selectedAnswer === opt
                    ? "border-primary-500 bg-primary-500/10 text-primary-300"
                    : "border-gray-700 bg-gray-800/50 text-gray-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            onClick={handleCheck}
            disabled={!selectedAnswer}
            className="btn-primary w-full disabled:opacity-40"
          >
            Überprüfen
          </button>
        </>
      )}

      {/* Answer Result */}
      {answerRevealed && s.explanation && (
        <div className={`p-4 rounded-xl mb-4 animate-fade-in ${
          isCorrect ? "bg-green-500/10 border border-green-500/30" : "bg-amber-500/10 border border-amber-500/30"
        }`}>
          <p className={`font-bold mb-1 ${isCorrect ? "text-green-400" : "text-amber-400"}`}>
            {isCorrect ? "🎉 Genau!" : "💡 Nicht ganz:"}
          </p>
          <p className="text-sm text-gray-300">{s.explanation}</p>
        </div>
      )}

      {/* Next */}
      {((!s.question) || answerRevealed) && currentStep < steps.length - 1 && (
        <button onClick={handleNext} className="btn-primary w-full">
          Weiter →
        </button>
      )}

      {currentStep === steps.length - 1 && (
        <div className="text-center text-green-400 font-semibold animate-bounce-in mt-4">
          ✅ Experiment abgeschlossen! Jetzt weißt du, warum Wasser so besonders ist.
        </div>
      )}
    </div>
  );
}
