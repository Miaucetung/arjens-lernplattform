"use client";

import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";
import { bosnischLessons, bosnischLessonOrder } from "@/data/bosnisch/pravopis";

export default function BosnischPage() {
  const { completedLessons } = useAppStore((s) => s.progress);

  const totalXp = bosnischLessonOrder.reduce((sum, id) => {
    return sum + bosnischLessons[id].xpReward;
  }, 0);

  const earnedXp = bosnischLessonOrder.reduce((sum, id) => {
    return sum + (completedLessons.includes(id) ? bosnischLessons[id].xpReward : 0);
  }, 0);

  const completedCount = bosnischLessonOrder.filter((id) =>
    completedLessons.includes(id)
  ).length;

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-lg mx-auto px-4 pt-6 pb-5">
          <Link href="/" className="text-sm text-gray-400 hover:text-white mb-3 inline-block">
            ← Alle Fächer
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-5xl">🇧🇦</span>
            <div>
              <h1 className="text-3xl font-extrabold text-white">Bosnisch</h1>
              <p className="text-sm text-gray-400">Bosanski jezik – Pravopis & Gramatika</p>
            </div>
          </div>

          {/* Overall XP */}
          <div className="mt-4 card-glass p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">
                {completedCount}/{bosnischLessonOrder.length} Lektionen abgeschlossen
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

      {/* Intro */}
      <div className="max-w-lg mx-auto px-4 pt-5 pb-3">
        <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-4">
          <p className="text-sm text-orange-200 leading-relaxed">
            <span className="font-bold text-orange-400">Dobrodošli!</span> Willkommen im
            Bosnisch-Kurs! Hier lernst du die Grundlagen der bosnischen Rechtschreibung –
            von den Sonderzeichen bis zur Ijekavica. Alles basiert auf dem{" "}
            <span className="italic text-orange-300">Pravopis Bosanskoga Jezika</span>{" "}
            von Dr. Senahid Halilović.
          </p>
        </div>
      </div>

      {/* Module: Pravopis */}
      <div className="max-w-lg mx-auto px-4 pt-2">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 px-1">
          Module
        </h2>

        <Link
          href="/fach/bosnisch/pravopis"
          className="card-interactive p-5 flex items-center gap-4 block mb-3"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-2xl flex-shrink-0">
            📖
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-lg">Pravopis</h3>
            <p className="text-sm text-gray-400">Bosnische Rechtschreibung – Grundlagen</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-gray-500">
                {completedCount}/{bosnischLessonOrder.length} Lektionen
              </span>
              <span className="text-xs text-orange-400">bis zu +{totalXp} XP</span>
              <span className="text-xs text-gray-500">~50 Min.</span>
            </div>
            {/* Mini-progress */}
            <div className="progress-bar mt-2">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${bosnischLessonOrder.length > 0 ? (completedCount / bosnischLessonOrder.length) * 100 : 0}%`,
                  background: "linear-gradient(to right, #f97316, #eab308)",
                }}
              />
            </div>
          </div>
          <span className="text-gray-500 flex-shrink-0">→</span>
        </Link>

        {/* Coming soon modules */}
        <div className="space-y-3 mt-2">
          {[
            { icon: "🔤", title: "Gramatika", desc: "Padežsystem, Deklinationen & Konjugationen", tag: "Kommt bald" },
            { icon: "📚", title: "Vokabular", desc: "Thematischer Wortschatz & Phrasen", tag: "Kommt bald" },
            { icon: "✍️", title: "Pisanje", desc: "Aufsatz schreiben auf Bosnisch", tag: "Kommt bald" },
          ].map((mod) => (
            <div key={mod.title} className="card-glass p-4 flex items-center gap-4 opacity-50">
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-xl flex-shrink-0">
                {mod.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-400">{mod.title}</h3>
                  <span className="text-xs text-gray-600 border border-gray-700 rounded px-1.5 py-0.5">
                    {mod.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-0.5">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick facts */}
      <div className="max-w-lg mx-auto px-4 pt-6">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 px-1">
          Wusstest du?
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "🔤", fact: "30 Buchstaben", sub: "mit 6 Sonderzeichen" },
            { icon: "🗣️", fact: "Ijekavica", sub: "Ausspracheform von BiH" },
            { icon: "📍", fact: "Sarajevo", sub: "Hauptstadt Bosniens" },
            { icon: "📜", fact: "Seit 1996", sub: "eigenständige Standardsprache" },
          ].map((item) => (
            <div key={item.fact} className="card-glass p-3 text-center">
              <span className="text-2xl block mb-1">{item.icon}</span>
              <p className="text-sm font-bold text-white">{item.fact}</p>
              <p className="text-xs text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
