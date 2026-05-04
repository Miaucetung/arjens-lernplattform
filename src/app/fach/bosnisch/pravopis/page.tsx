"use client";

import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";
import { bosnischLessons, bosnischLessonOrder } from "@/data/bosnisch/pravopis";

export default function PravopisModulePage() {
  const { completedLessons } = useAppStore((s) => s.progress);

  const totalXp = bosnischLessonOrder.reduce((sum, id) => {
    return sum + bosnischLessons[id].xpReward;
  }, 0);

  const earnedXp = bosnischLessonOrder.reduce((sum, id) => {
    return sum + (completedLessons.includes(id) ? bosnischLessons[id].xpReward : 0);
  }, 0);

  const completedCount = bosnischLessonOrder.filter((id) => completedLessons.includes(id)).length;

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
          <Link href="/fach/bosnisch" className="text-sm text-gray-400 hover:text-white mb-3 inline-block">
            ← Bosnisch
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">📖</span>
            <div>
              <h1 className="text-2xl font-extrabold text-white">Pravopis</h1>
              <p className="text-sm text-gray-400">Bosnische Rechtschreibung – Grundlagen</p>
            </div>
          </div>

          {/* Module Progress */}
          <div className="mt-4 card-glass p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">
                {completedCount}/{bosnischLessonOrder.length} Lektionen
              </span>
              <span className="badge-xp text-xs">{earnedXp}/{totalXp} XP</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${bosnischLessonOrder.length > 0 ? (completedCount / bosnischLessonOrder.length) * 100 : 0}%`,
                  background: "linear-gradient(to right, #f97316, #eab308)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Intro Banner */}
      <div className="max-w-lg mx-auto px-4 pt-5">
        <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-4 mb-5">
          <p className="text-sm text-orange-200 leading-relaxed">
            <span className="font-bold text-orange-400">Zašto pravopis?</span> Die Rechtschreibung
            ist das Fundament jeder Sprache. Im Bosnischen gibt es besondere Laute und Regeln,
            die du nirgendwo sonst findest. Lern sie jetzt – Lektion für Lektion!
          </p>
        </div>
      </div>

      {/* Lessons List */}
      <div className="max-w-lg mx-auto px-4">
        <div className="space-y-3">
          {bosnischLessonOrder.map((lessonId, index) => {
            const lesson = bosnischLessons[lessonId];
            const isCompleted = completedLessons.includes(lessonId);

            return (
              <div key={lessonId} className="relative">
                {/* Connector line */}
                {index > 0 && (
                  <div className={`absolute -top-3 left-6 w-0.5 h-3 ${
                    isCompleted ? "bg-orange-500/50" : "bg-gray-800"
                  }`} />
                )}

                <Link
                  href={`/fach/bosnisch/pravopis/${lessonId}`}
                  className="card-interactive p-4 flex items-center gap-4 block"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
                    isCompleted
                      ? "bg-green-500/20 border border-green-500/30"
                      : "bg-orange-500/10 border border-orange-500/20"
                  }`}>
                    {isCompleted ? "✅" : lesson.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-sm truncate">
                        {lesson.title}
                      </h3>
                      {isCompleted && (
                        <span className="text-xs text-green-400 flex-shrink-0">Fertig</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5 truncate">{lesson.description}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-gray-500">⏱ {lesson.estimatedMinutes} min</span>
                      <span className="text-xs text-orange-400">+{lesson.xpReward} XP</span>
                      <span className="text-xs text-gray-500">{lesson.blocks.length} Blöcke</span>
                    </div>
                  </div>

                  <span className="text-gray-600 flex-shrink-0">→</span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Completion Banner */}
        {completedCount === bosnischLessonOrder.length && bosnischLessonOrder.length > 0 && (
          <div className="mt-6 rounded-xl bg-green-500/10 border border-green-500/20 p-5 text-center">
            <span className="text-4xl block mb-2">🏆</span>
            <h3 className="text-lg font-bold text-white">Čestitam! Glückwunsch!</h3>
            <p className="text-sm text-gray-400 mt-1">
              Du hast alle Lektionen der bosnischen Grundrechtschreibung abgeschlossen!
            </p>
            <p className="text-orange-400 font-bold mt-2">+{totalXp} XP verdient</p>
          </div>
        )}
      </div>
    </main>
  );
}
