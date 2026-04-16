"use client";

import { subjects } from "@/data/subjects";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function SubjectPage() {
  const params = useParams();
  const subjectId = params.id as string;
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) return notFound();

  // Wenn Fach noch nicht verfügbar
  if (!subject.available) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="card-glass p-8 max-w-md text-center">
          <span className="text-6xl block mb-4">{subject.icon}</span>
          <h1 className="text-2xl font-bold text-white mb-2">{subject.name}</h1>
          <p className="text-gray-400 mb-2">{subject.description}</p>

          <div className="bg-gray-800/50 rounded-xl p-4 my-6">
            <span className="text-3xl block mb-2">🚧</span>
            <p className="text-lg font-semibold text-white mb-1">Kommt bald!</p>
            <p className="text-sm text-gray-400">
              Dieses Fach wird gerade entwickelt. Schau bald wieder vorbei!
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3 text-left bg-gray-800/30 rounded-lg p-3">
              <span className="text-xl">📚</span>
              <div>
                <p className="text-sm font-medium text-gray-300">Inhalte</p>
                <p className="text-xs text-gray-500">Werden noch erstellt</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left bg-gray-800/30 rounded-lg p-3">
              <span className="text-xl">🎮</span>
              <div>
                <p className="text-sm font-medium text-gray-300">
                  Interaktive Übungen
                </p>
                <p className="text-xs text-gray-500">In Planung</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left bg-gray-800/30 rounded-lg p-3">
              <span className="text-xl">📝</span>
              <div>
                <p className="text-sm font-medium text-gray-300">
                  Prüfungsvorbereitung
                </p>
                <p className="text-xs text-gray-500">Kommt mit Release</p>
              </div>
            </div>
          </div>

          <Link href="/" className="btn-secondary mt-6 inline-block">
            ← Zurück zur Übersicht
          </Link>
        </div>
      </main>
    );
  }

  // Verfügbares Fach (z.B. Chemie)
  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <div
        className={`bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50`}
      >
        <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white mb-3 inline-block"
          >
            ← Alle Fächer
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{subject.icon}</span>
            <div>
              <h1 className="text-2xl font-extrabold text-white">
                {subject.name}
              </h1>
              <p className="text-sm text-gray-400">{subject.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6">
        {subject.modules.length === 0 ? (
          <div className="space-y-3">
            <Link
              href={`/fach/${subject.id}/atombindung`}
              className="card-interactive p-5 flex items-center gap-4 block"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.gradient} flex items-center justify-center text-xl`}
              >
                ⚛️
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white">Atombindung</h3>
                <p className="text-sm text-gray-400">
                  Molekulare Stoffe – Kovalente Bindung
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  7 Lektionen · ca. 55 Min.
                </p>
              </div>
              <span className="text-gray-500">→</span>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {subject.modules.map((mod, index) => (
              <Link
                key={mod.id}
                href={`/fach/${subject.id}/${mod.id}`}
                className="card-interactive p-4 flex items-center gap-4 block"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${subject.gradient} flex items-center justify-center text-lg font-bold`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{mod.title}</h3>
                  <p className="text-sm text-gray-400">{mod.description}</p>
                </div>
                <span className="text-gray-600">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
