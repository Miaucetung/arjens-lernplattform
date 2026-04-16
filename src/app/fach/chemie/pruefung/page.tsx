"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";

interface ExamQuestion {
  id: string;
  question: string;
  options: { id: string; text: string; correct: boolean }[];
  explanation: string;
  topic: string;
}

const examQuestions: ExamQuestion[] = [
  {
    id: "ex1", topic: "Elektronenpaarbindung",
    question: "Was ist eine kovalente Bindung?",
    options: [
      { id: "a", text: "Übertragung von Elektronen", correct: false },
      { id: "b", text: "Gemeinsame Nutzung von Elektronenpaaren", correct: true },
      { id: "c", text: "Anziehung zwischen Ionen", correct: false },
      { id: "d", text: "Metallische Bindung", correct: false },
    ],
    explanation: "Bei einer kovalenten (Elektronenpaar-)Bindung teilen sich zwei Atome ein oder mehrere Elektronenpaare.",
  },
  {
    id: "ex2", topic: "Lewis-Schreibweise",
    question: "Wie viele freie Elektronenpaare hat Stickstoff in NH₃?",
    options: [
      { id: "a", text: "0", correct: false },
      { id: "b", text: "1", correct: true },
      { id: "c", text: "2", correct: false },
      { id: "d", text: "3", correct: false },
    ],
    explanation: "N hat 5 Außenelektronen. 3 davon bilden Bindungen mit H, die restlichen 2 bilden 1 freies Elektronenpaar.",
  },
  {
    id: "ex3", topic: "EPA-Modell",
    question: "Welche Geometrie hat H₂O?",
    options: [
      { id: "a", text: "Linear", correct: false },
      { id: "b", text: "Tetraedrisch", correct: false },
      { id: "c", text: "Gewinkelt", correct: true },
      { id: "d", text: "Trigonal-planar", correct: false },
    ],
    explanation: "H₂O hat 2 bindende + 2 freie Elektronenpaare → gewinkelt (104,5°).",
  },
  {
    id: "ex4", topic: "Elektronegativität",
    question: "Welches Element hat die höchste Elektronegativität?",
    options: [
      { id: "a", text: "Sauerstoff", correct: false },
      { id: "b", text: "Chlor", correct: false },
      { id: "c", text: "Fluor", correct: true },
      { id: "d", text: "Stickstoff", correct: false },
    ],
    explanation: "Fluor hat mit 3,98 die höchste EN aller Elemente im Periodensystem.",
  },
  {
    id: "ex5", topic: "Polare Moleküle",
    question: "Warum ist CO₂ KEIN Dipol, obwohl es polare Bindungen hat?",
    options: [
      { id: "a", text: "Weil CO₂ keine polaren Bindungen hat", correct: false },
      { id: "b", text: "Weil die Dipolmomente sich wegen der linearen Form aufheben", correct: true },
      { id: "c", text: "Weil C nicht elektronegativ ist", correct: false },
      { id: "d", text: "Weil CO₂ ein Gas ist", correct: false },
    ],
    explanation: "CO₂ ist linear und symmetrisch. Die beiden C=O-Dipole zeigen in entgegengesetzte Richtungen und heben sich auf → kein Gesamtdipol.",
  },
  {
    id: "ex6", topic: "Zwischenmolekulare Kräfte",
    question: "Welche zwischenmolekulare Kraft ist am stärksten?",
    options: [
      { id: "a", text: "Van-der-Waals-Kräfte", correct: false },
      { id: "b", text: "Dipol-Dipol-Kräfte", correct: false },
      { id: "c", text: "Wasserstoffbrückenbindungen", correct: true },
      { id: "d", text: "Alle gleich stark", correct: false },
    ],
    explanation: "H-Brücken > Dipol-Dipol > Van-der-Waals. H-Brücken treten auf, wenn H an F, O oder N gebunden ist.",
  },
  {
    id: "ex7", topic: "Wasser",
    question: "Warum wird ein Wasserstrahl von einem geladenen Ballon abgelenkt?",
    options: [
      { id: "a", text: "Wasser ist magnetisch", correct: false },
      { id: "b", text: "Wasser-Dipole richten sich im elektrischen Feld aus", correct: true },
      { id: "c", text: "Der Ballon saugt Wasser an", correct: false },
      { id: "d", text: "Statische Aufladung des Wassers", correct: false },
    ],
    explanation: "Wasser-Moleküle sind Dipole. Im elektrischen Feld des Ballons richten sich die positiven Enden (H) zum negativen Ballon aus → Ablenkung.",
  },
  {
    id: "ex8", topic: "Lewis-Schreibweise",
    question: "Welcher Bindungstyp liegt in N₂ vor?",
    options: [
      { id: "a", text: "Einfachbindung", correct: false },
      { id: "b", text: "Doppelbindung", correct: false },
      { id: "c", text: "Dreifachbindung", correct: true },
      { id: "d", text: "Ionenbindung", correct: false },
    ],
    explanation: "Stickstoff (N) hat 5 Außenelektronen und braucht 3 mehr für das Oktett. Zwei N-Atome teilen sich 3 Elektronenpaare → Dreifachbindung (N≡N).",
  },
  {
    id: "ex9", topic: "Elektronegativität",
    question: "Was bedeutet δ+ und δ–?",
    options: [
      { id: "a", text: "Volle positive und negative Ladung", correct: false },
      { id: "b", text: "Partialladungen durch ungleiche Elektronenverteilung", correct: true },
      { id: "c", text: "Magnetische Pole", correct: false },
      { id: "d", text: "Oxidationszahlen", correct: false },
    ],
    explanation: "δ (delta) steht für 'teilweise'. δ+ bedeutet teilweise positiv (das Atom, das Elektronen weniger stark anzieht), δ– teilweise negativ.",
  },
  {
    id: "ex10", topic: "Wasser",
    question: "Was bedeutet 'Similia similibus solvuntur'?",
    options: [
      { id: "a", text: "Gegensätze ziehen sich an", correct: false },
      { id: "b", text: "Gleiches löst sich in Gleichem", correct: true },
      { id: "c", text: "Wasser löst alles", correct: false },
      { id: "d", text: "Alle Stoffe sind löslich", correct: false },
    ],
    explanation: "Polare Stoffe lösen sich in polaren Lösemitteln (z.B. Salz in Wasser), unpolare in unpolaren (z.B. Fett in Benzin).",
  },
];

export default function ExamPage() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 min
  const [xpAwarded, setXpAwarded] = useState(false);
  const { addXp, updateStreak } = useAppStore();

  useEffect(() => {
    if (!started || finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, started, finished]);

  const selectAnswer = (questionId: string, optionId: string) => {
    if (finished) return;
    setAnswers({ ...answers, [questionId]: optionId });
  };

  const handleFinish = useCallback(() => {
    setFinished(true);
    if (xpAwarded) return;
    const correct = examQuestions.filter(
      (q) => q.options.find((o) => o.id === answers[q.id])?.correct
    ).length;
    const xp = correct * 15;
    if (xp > 0) {
      addXp(xp, `Prüfung: ${correct}/${examQuestions.length} richtig`);
      updateStreak();
    }
    setXpAwarded(true);
  }, [answers, addXp, updateStreak, xpAwarded]);

  const correctCount = examQuestions.filter(
    (q) => q.options.find((o) => o.id === answers[q.id])?.correct
  ).length;

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // ── Start Screen ──
  if (!started) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="card-glass p-8 max-w-md text-center">
          <span className="text-6xl block mb-4">📝</span>
          <h1 className="text-2xl font-extrabold text-white mb-2">Prüfungsmodus</h1>
          <p className="text-gray-400 mb-6">
            {examQuestions.length} Fragen · 10 Minuten · Alle Themen
          </p>

          <div className="space-y-2 text-left mb-6">
            {["Elektronenpaarbindung", "Lewis-Strukturen", "EPA-Modell", "Elektronegativität", "Dipole", "Zwischenmolekulare Kräfte", "Wasser"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-primary-400">✓</span> {t}
              </div>
            ))}
          </div>

          <button onClick={() => setStarted(true)} className="btn-primary w-full text-lg">
            🚀 Prüfung starten
          </button>
          <Link href="/fach/chemie/atombindung" className="text-sm text-gray-500 hover:text-gray-300 mt-4 inline-block">
            ← Zurück
          </Link>
        </div>
      </main>
    );
  }

  // ── Results Screen ──
  if (finished) {
    const percent = Math.round((correctCount / examQuestions.length) * 100);
    const grade = percent >= 90 ? "1" : percent >= 75 ? "2" : percent >= 60 ? "3" : percent >= 45 ? "4" : percent >= 30 ? "5" : "6";

    return (
      <main className="min-h-screen pb-20">
        <div className="max-w-lg mx-auto px-4 pt-8">
          <div className="card-glass p-8 text-center mb-6 animate-bounce-in">
            <span className="text-6xl block mb-4">
              {percent >= 75 ? "🎉" : percent >= 50 ? "👍" : "💪"}
            </span>
            <h1 className="text-2xl font-extrabold text-white mb-2">Ergebnis</h1>

            <div className="text-5xl font-black text-gradient my-4">
              {correctCount}/{examQuestions.length}
            </div>

            <p className="text-gray-400">
              {percent}% richtig · Note: {grade}
            </p>

            <div className="badge-xp text-lg mx-auto mt-4">
              ⭐ +{correctCount * 15} XP
            </div>
          </div>

          {/* Question Review */}
          <h2 className="text-lg font-bold text-white mb-3">Auswertung</h2>
          <div className="space-y-3">
            {examQuestions.map((q, i) => {
              const userAnswer = answers[q.id];
              const correct = q.options.find((o) => o.id === userAnswer)?.correct;
              return (
                <div key={q.id} className={`card-glass p-4 border-l-4 ${
                  correct ? "border-l-green-500" : !userAnswer ? "border-l-gray-600" : "border-l-red-500"
                }`}>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">{correct ? "✅" : !userAnswer ? "⏭️" : "❌"}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{i + 1}. {q.question}</p>
                      {!correct && (
                        <p className="text-xs text-gray-400 mt-1">{q.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                setStarted(false);
                setFinished(false);
                setCurrentQ(0);
                setAnswers({});
                setTimeLeft(600);
                setXpAwarded(false);
              }}
              className="btn-primary flex-1"
            >
              🔄 Nochmal
            </button>
            <Link href="/fach/chemie/atombindung" className="btn-secondary flex-1 text-center">
              ← Zurück
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Exam Mode ──
  const q = examQuestions[currentQ];

  return (
    <main className="min-h-screen pb-20">
      {/* Timer Bar */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              Frage {currentQ + 1}/{examQuestions.length}
            </span>
            <span className={`text-sm font-bold ${timeLeft < 60 ? "text-red-400 animate-pulse" : "text-white"}`}>
              ⏱ {formatTime(timeLeft)}
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${((currentQ + 1) / examQuestions.length) * 100}%`,
                background: "linear-gradient(to right, #f59e0b, #ef4444)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Topic */}
        <span className="text-xs text-gray-500 mb-2 block">{q.topic}</span>

        {/* Question */}
        <h2 className="text-lg font-bold text-white mb-4">{q.question}</h2>

        {/* Options */}
        <div className="space-y-2 mb-6">
          {q.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => selectAnswer(q.id, opt.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                answers[q.id] === opt.id
                  ? "border-primary-500 bg-primary-500/10 text-primary-300"
                  : "border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600"
              }`}
            >
              {opt.text}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          {currentQ > 0 && (
            <button
              onClick={() => setCurrentQ(currentQ - 1)}
              className="btn-secondary flex-1"
            >
              ← Zurück
            </button>
          )}

          {currentQ < examQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentQ(currentQ + 1)}
              className="btn-primary flex-1"
            >
              Weiter →
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="btn-success flex-1"
            >
              ✅ Abgeben
            </button>
          )}
        </div>

        {/* Quick Nav Dots */}
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          {examQuestions.map((eq, i) => (
            <button
              key={eq.id}
              onClick={() => setCurrentQ(i)}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                i === currentQ
                  ? "bg-primary-500 text-white"
                  : answers[eq.id]
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-gray-800 text-gray-500 border border-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
