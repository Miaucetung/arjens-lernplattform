"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useCallback } from "react";
import { useAppStore } from "@/store/useAppStore";
import { bosnischLessons, bosnischLessonOrder } from "@/data/bosnisch/pravopis";
import { LearningBlock } from "@/types";
import {
  PredictionBlock,
  RevealBlock,
  QuizBlock,
  MistakeBlock,
  ScenarioBlock,
  InfoBlock,
  DiagramBlock,
  PracticeBlock,
} from "@/components/blocks";
import { XpPopup } from "@/components/shared";

function BlockRenderer({ block }: { block: LearningBlock }) {
  switch (block.type) {
    case "prediction":
      return <PredictionBlock data={block.data as never} />;
    case "reveal":
      return <RevealBlock data={block.data as never} />;
    case "quiz":
      return <QuizBlock data={block.data as never} />;
    case "mistake":
      return <MistakeBlock data={block.data as never} />;
    case "scenario":
      return <ScenarioBlock data={block.data as never} />;
    case "info":
      return <InfoBlock data={block.data as never} />;
    case "diagram":
      return <DiagramBlock data={block.data as never} />;
    case "practice":
      return <PracticeBlock data={block.data as never} />;
    default:
      return null;
  }
}

export default function BosnischLessonPage() {
  const params = useParams();
  const lessonId = params.lessonId as string;
  const { addXp, completeLesson, updateStreak, progress } = useAppStore();

  const lesson = bosnischLessons[lessonId as keyof typeof bosnischLessons];

  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [showXp, setShowXp] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentOrderIndex = bosnischLessonOrder.indexOf(lessonId as typeof bosnischLessonOrder[number]);
  const nextLessonId = currentOrderIndex < bosnischLessonOrder.length - 1
    ? bosnischLessonOrder[currentOrderIndex + 1]
    : null;

  const handleComplete = useCallback(() => {
    if (!progress.completedLessons.includes(lessonId)) {
      addXp(lesson.xpReward, `Lektion "${lesson.title}" abgeschlossen`);
      completeLesson(lessonId);
      updateStreak();
      setShowXp(true);
      setTimeout(() => setShowXp(false), 2500);
    }
    setCompleted(true);
  }, [lessonId, lesson, addXp, completeLesson, updateStreak, progress.completedLessons]);

  if (!lesson) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="card-glass p-8 text-center">
          <span className="text-5xl block mb-3">🔍</span>
          <h2 className="text-xl font-bold text-white mb-2">Lektion nicht gefunden</h2>
          <Link href="/fach/bosnisch/pravopis" className="btn-secondary inline-block mt-4">
            ← Zurück zum Modul
          </Link>
        </div>
      </main>
    );
  }

  const blocks = lesson.blocks;
  const isLastBlock = currentBlockIndex >= blocks.length - 1;

  return (
    <main className="min-h-screen pb-24">
      <XpPopup amount={lesson.xpReward} visible={showXp} />

      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800/50 sticky top-0 z-40">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <Link href="/fach/bosnisch/pravopis" className="text-sm text-gray-400 hover:text-white">
              ← Zurück
            </Link>
            <span className="text-xs text-gray-500">
              {currentBlockIndex + 1}/{blocks.length}
            </span>
            <span className="badge-xp text-xs">+{lesson.xpReward} XP</span>
          </div>
          {/* Progress bar */}
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${((currentBlockIndex + 1) / blocks.length) * 100}%`,
                background: "linear-gradient(to right, #f97316, #eab308)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Lesson title */}
      <div className="max-w-lg mx-auto px-4 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{lesson.icon}</span>
          <div>
            <h1 className="text-xl font-extrabold text-white">{lesson.title}</h1>
            <p className="text-xs text-gray-400">{lesson.description}</p>
          </div>
        </div>
      </div>

      {/* Current Block */}
      <div className="max-w-lg mx-auto px-4">
        {!completed ? (
          <>
            <BlockRenderer block={blocks[currentBlockIndex]} />

            {/* Navigation */}
            <div className="mt-6 flex gap-3">
              {currentBlockIndex > 0 && (
                <button
                  onClick={() => setCurrentBlockIndex((i) => i - 1)}
                  className="btn-secondary flex-1"
                >
                  ← Zurück
                </button>
              )}
              {!isLastBlock ? (
                <button
                  onClick={() => setCurrentBlockIndex((i) => i + 1)}
                  className="btn-primary flex-1"
                >
                  Weiter →
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  className="btn-primary flex-1"
                  style={{ background: "linear-gradient(to right, #f97316, #eab308)" }}
                >
                  ✅ Lektion abschließen!
                </button>
              )}
            </div>

            {/* Block dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {blocks.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentBlockIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentBlockIndex
                      ? "bg-orange-500 w-4"
                      : i < currentBlockIndex
                      ? "bg-orange-500/40"
                      : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          /* Completion screen */
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-extrabold text-white mb-2">Odlično! Ausgezeichnet!</h2>
            <p className="text-gray-400 mb-4">
              Du hast <span className="text-white font-bold">{lesson.title}</span> abgeschlossen!
            </p>
            <div className="badge-xp text-lg px-6 py-2 inline-block mb-6">
              +{lesson.xpReward} XP
            </div>

            <div className="space-y-3">
              {nextLessonId && (
                <Link
                  href={`/fach/bosnisch/pravopis/${nextLessonId}`}
                  className="btn-primary w-full block"
                  style={{ background: "linear-gradient(to right, #f97316, #eab308)" }}
                  onClick={() => {
                    setCurrentBlockIndex(0);
                    setCompleted(false);
                  }}
                >
                  Nächste Lektion: {bosnischLessons[nextLessonId].title} →
                </Link>
              )}
              <Link href="/fach/bosnisch/pravopis" className="btn-secondary w-full block">
                ← Zurück zum Modul
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
