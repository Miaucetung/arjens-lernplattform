"use client";

import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";
import { chemistryLessons, chemistryLessonOrder } from "@/data/chemie/atombindung";

export default function AtombindungModulePage() {
  const { completedLessons } = useAppStore((s) => s.progress);

  const totalXp = chemistryLessonOrder.reduce((sum, id) => {
    return sum + chemistryLessons[id].xpReward;
  }, 0);

  const earnedXp = chemistryLessonOrder.reduce((sum, id) => {
    return sum + (completedLessons.includes(id) ? chemistryLessons[id].xpReward : 0);
  }, 0);

  const completedCount = chemistryLessonOrder.filter((id) => completedLessons.includes(id)).length;

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
          <Link href="/fach/chemie" className="text-sm text-gray-400 hover:text-white mb-3 inline-block">
            ← Chemie
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">⚛️</span>
            <div>
              <h1 className="text-2xl font-extrabold text-white">Atombindung</h1>
              <p className="text-sm text-gray-400">Molekulare Stoffe – 9. Klasse</p>
            </div>
          </div>

          {/* Module Progress */}
          <div className="mt-4 card-glass p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">
                {completedCount}/{chemistryLessonOrder.length} Lektionen
              </span>
              <span className="badge-xp text-xs">{earnedXp}/{totalXp} XP</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${(completedCount / chemistryLessonOrder.length) * 100}%`,
                  background: "linear-gradient(to right, #3b82f6, #06b6d4)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="max-w-lg mx-auto px-4 pt-6">
        <div className="space-y-3">
          {chemistryLessonOrder.map((lessonId, index) => {
            const lesson = chemistryLessons[lessonId];
            const isCompleted = completedLessons.includes(lessonId);

            return (
              <div key={lessonId} className="relative">
                {/* Connector line */}
                {index > 0 && (
                  <div className={`absolute -top-3 left-6 w-0.5 h-3 ${
                    isCompleted ? "bg-primary-500/50" : "bg-gray-800"
                  }`} />
                )}

                <Link
                  href={`/fach/chemie/atombindung/${lessonId}`}
                  className="card-interactive p-4 flex items-center gap-4 block"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                    isCompleted
                      ? "bg-green-500/20 border border-green-500/30"
                      : "bg-primary-500/20 border border-primary-500/30"
                  }`}>
                    {isCompleted ? "✅" : lesson.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold ${isCompleted ? "text-green-400" : "text-white"}`}>
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-400 truncate">{lesson.description}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500">⏱ {lesson.estimatedMinutes} Min.</span>
                      <span className="text-xs text-amber-400/60">⭐ {lesson.xpReward} XP</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="text-gray-600 flex-shrink-0">
                    {isCompleted ? "↻" : "→"}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Interactive Tools */}
        <h2 className="text-lg font-bold text-white mt-8 mb-3">🎮 Interaktive Tools</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/fach/chemie/tools/dipol-checker" className="card-interactive p-4 text-center">
            <span className="text-2xl block mb-1">⚡</span>
            <span className="text-sm font-semibold text-white">Dipol-Checker</span>
          </Link>
          <Link href="/fach/chemie/tools/en-vergleich" className="card-interactive p-4 text-center">
            <span className="text-2xl block mb-1">🧲</span>
            <span className="text-sm font-semibold text-white">EN-Vergleich</span>
          </Link>
          <Link href="/fach/chemie/tools/epa-simulator" className="card-interactive p-4 text-center">
            <span className="text-2xl block mb-1">🔮</span>
            <span className="text-sm font-semibold text-white">EPA-Simulator</span>
          </Link>
          <Link href="/fach/chemie/tools/wasser-experiment" className="card-interactive p-4 text-center">
            <span className="text-2xl block mb-1">🧪</span>
            <span className="text-sm font-semibold text-white">Wasserstrahl</span>
          </Link>
        </div>

        {/* Exam Prep */}
        <Link
          href="/fach/chemie/pruefung"
          className="card-interactive p-5 mt-6 block bg-gradient-to-r from-amber-500/5 to-orange-500/5 border-amber-500/20"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">📝</span>
            <div>
              <h3 className="font-bold text-amber-400">Prüfungsvorbereitung</h3>
              <p className="text-sm text-gray-400">Teste dein Wissen unter Zeitdruck</p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
