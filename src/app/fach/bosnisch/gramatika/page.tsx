"use client";

import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";
import { gramatikLessons, gramatikLessonOrder } from "@/data/bosnisch/gramatika";

export default function GramatikaPage() {
  const { completedLessons } = useAppStore((s) => s.progress);

  const completedCount = gramatikLessonOrder.filter((id) =>
    completedLessons.includes(id)
  ).length;

  const totalXp = gramatikLessonOrder.reduce(
    (sum, id) => sum + gramatikLessons[id].xpReward,
    0
  );

  const earnedXp = gramatikLessonOrder.reduce(
    (sum, id) =>
      sum + (completedLessons.includes(id) ? gramatikLessons[id].xpReward : 0),
    0
  );

  const allDone = completedCount === gramatikLessonOrder.length;

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-lg mx-auto px-4 pt-6 pb-5">
          <Link
            href="/fach/bosnisch"
            className="text-sm text-gray-400 hover:text-white mb-3 inline-block"
          >
            ← Bosnisch
          </Link>
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
            >
              🔤
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white">Gramatika</h1>
              <p className="text-sm text-gray-400">Bosnische Grammatik – Grundstufe A1</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-4 card-glass p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">
                {completedCount}/{gramatikLessonOrder.length} Lektionen
              </span>
              <span className="badge-xp text-xs">
                {earnedXp}/{totalXp} XP
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${
                    gramatikLessonOrder.length > 0
                      ? (completedCount / gramatikLessonOrder.length) * 100
                      : 0
                  }%`,
                  background: "linear-gradient(to right, #3b82f6, #06b6d4)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Intro banner */}
      <div className="max-w-lg mx-auto px-4 pt-5 pb-3">
        <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
          <p className="text-sm text-blue-200 leading-relaxed">
            <span className="font-bold text-blue-400">Šta ćeš naučiti?</span> Was lernst
            du hier? Grundgrammatik für echte Gespräche: Geschlecht der Wörter, Plural,
            die Verben <span className="italic text-blue-300">biti</span> und{" "}
            <span className="italic text-blue-300">imati</span>, Fragen stellen und
            Besitz ausdrücken. Alles A1-Niveau – Schritt für Schritt.
          </p>
        </div>
      </div>

      {/* Completion banner */}
      {allDone && (
        <div className="max-w-lg mx-auto px-4 pb-4">
          <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-center">
            <span className="text-3xl block mb-2">🏆</span>
            <p className="text-green-400 font-bold">Čestitam! Gramatika A1 abgeschlossen!</p>
            <p className="text-sm text-gray-400 mt-1">Du hast alle {totalXp} XP gesammelt!</p>
          </div>
        </div>
      )}

      {/* Lessons */}
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 px-1">
          Lektionen
        </h2>
        <div className="space-y-3">
          {gramatikLessonOrder.map((lessonId, index) => {
            const lesson = gramatikLessons[lessonId];
            const isCompleted = completedLessons.includes(lessonId);
            const prevCompleted =
              index === 0 || completedLessons.includes(gramatikLessonOrder[index - 1]);
            const isUnlocked = index === 0 || prevCompleted;

            return (
              <div key={lessonId}>
                {isUnlocked ? (
                  <Link
                    href={`/fach/bosnisch/gramatika/${lessonId}`}
                    className="card-interactive p-4 flex items-center gap-4 block"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: isCompleted
                          ? "linear-gradient(135deg, #22c55e, #16a34a)"
                          : "linear-gradient(135deg, #3b82f6, #06b6d4)",
                      }}
                    >
                      {isCompleted ? "✅" : lesson.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-bold text-white">{lesson.title}</h3>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{lesson.description}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-xs text-gray-500">
                          ~{lesson.estimatedMinutes} Min.
                        </span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#3b82f6" }}
                        >
                          +{lesson.xpReward} XP
                        </span>
                        {isCompleted && (
                          <span className="text-xs text-green-400 font-semibold">
                            ✓ Abgeschlossen
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-500 flex-shrink-0">→</span>
                  </Link>
                ) : (
                  <div className="card-glass p-4 flex items-center gap-4 opacity-40">
                    <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-xl flex-shrink-0">
                      🔒
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-semibold text-gray-500">{lesson.title}</h3>
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5">{lesson.description}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning path hint */}
      <div className="max-w-lg mx-auto px-4 pt-6">
        <div className="rounded-xl bg-gray-800/40 border border-gray-700/30 p-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            💡 <span className="text-gray-400">Tipp:</span> Schließe jede Lektion ab, um
            die nächste freizuschalten. Nach Gramatika A1 folgen Vokabular (Thematischer
            Wortschatz) und Pisanje (Schreiben auf Bosnisch).
          </p>
        </div>
      </div>
    </main>
  );
}
