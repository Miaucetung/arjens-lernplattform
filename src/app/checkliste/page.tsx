"use client";

import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";

export default function ChecklistPage() {
  const { checklistItems } = useAppStore((s) => s.progress);
  const toggleChecklist = useAppStore((s) => s.toggleChecklist);

  const completedCount = checklistItems.filter((c) => c.completed).length;

  return (
    <main className="min-h-screen pb-20">
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50">
        <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
          <Link href="/" className="text-sm text-gray-400 hover:text-white mb-3 inline-block">
            ← Startseite
          </Link>
          <h1 className="text-2xl font-extrabold text-white">📋 Ich kann...</h1>
          <p className="text-sm text-gray-400">Checkliste für die Klassenarbeit</p>

          <div className="mt-3 progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${(completedCount / checklistItems.length) * 100}%`,
                background: "linear-gradient(to right, #22c55e, #16a34a)",
              }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {completedCount}/{checklistItems.length} Kompetenzen
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6 space-y-2">
        {checklistItems.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleChecklist(item.id)}
            className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
              item.completed
                ? "border-green-500/30 bg-green-500/5"
                : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
            }`}
          >
            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
              item.completed
                ? "bg-green-500 border-green-500 text-white"
                : "border-gray-600"
            }`}>
              {item.completed && "✓"}
            </div>
            <span className={`${item.completed ? "text-green-400" : "text-gray-300"}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </main>
  );
}
