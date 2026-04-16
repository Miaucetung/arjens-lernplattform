"use client";

import { subjects } from "@/data/subjects";
import { useAppStore } from "@/store/useAppStore";
import { LEVELS } from "@/types";
import Link from "next/link";

function XpBar() {
  const { totalXp, level, streak } = useAppStore((s) => s.progress);
  const currentLevel = LEVELS.find((l) => l.level === level) ?? LEVELS[0];
  const nextLevel = LEVELS.find((l) => l.level === level + 1);
  const progressPercent = nextLevel
    ? ((totalXp - currentLevel.minXp) /
        (nextLevel.minXp - currentLevel.minXp)) *
      100
    : 100;

  return (
    <div className="card-glass p-4 mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{currentLevel.icon}</span>
          <div>
            <p className="font-bold text-white">
              Level {level} – {currentLevel.name}
            </p>
            <p className="text-sm text-gray-400">{totalXp} XP gesamt</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {streak > 0 && (
            <div className="flex items-center gap-1.5">
              <span className="text-xl">🔥</span>
              <span className="font-bold text-orange-400">{streak}</span>
            </div>
          )}
          <div className="badge-xp">⭐ {totalXp} XP</div>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${Math.min(progressPercent, 100)}%` }}
        />
      </div>
      {nextLevel && (
        <p className="text-xs text-gray-500 mt-1">
          Noch {nextLevel.minXp - totalXp} XP bis Level {nextLevel.level}
        </p>
      )}
    </div>
  );
}

function SubjectCard({ subject }: { subject: (typeof subjects)[0] }) {
  const completedModules = useAppStore((s) => s.progress.completedModules);
  const moduleCount = subject.modules.length;
  const completedCount = subject.modules.filter((m) =>
    completedModules.includes(m.id),
  ).length;

  return (
    <Link
      href={subject.available ? `/fach/${subject.id}` : "#"}
      className={`card-interactive p-5 block relative overflow-hidden group ${
        !subject.available ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {/* Gradient glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <span className="text-4xl">{subject.icon}</span>
          {!subject.available && (
            <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
              Bald verfügbar
            </span>
          )}
          {subject.available && moduleCount > 0 && (
            <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full">
              {completedCount}/{moduleCount} Module
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-1">{subject.name}</h3>
        <p className="text-sm text-gray-400">{subject.description}</p>

        {subject.available && moduleCount > 0 && (
          <div className="progress-bar mt-3">
            <div
              className="progress-bar-fill"
              style={{
                width: `${moduleCount > 0 ? (completedCount / moduleCount) * 100 : 0}%`,
                background: `linear-gradient(to right, ${subject.color}, ${subject.color}cc)`,
              }}
            />
          </div>
        )}
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-lg mx-auto px-4 pt-8 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🧪</span>
            <h1 className="text-2xl font-extrabold text-gradient">
              Arjens Lernplattform
            </h1>
          </div>
          <p className="text-gray-400 text-sm">
            Verstehen statt Auswendiglernen – interaktiv & visuell
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* XP Bar */}
        <XpBar />

        {/* Subject Grid */}
        <h2 className="text-lg font-bold text-white mb-3">Deine Fächer</h2>
        <div className="grid grid-cols-2 gap-3">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </main>
  );
}
