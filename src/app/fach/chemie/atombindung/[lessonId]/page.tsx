"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useCallback } from "react";
import { useAppStore } from "@/store/useAppStore";
import { chemistryLessons, chemistryLessonOrder } from "@/data/chemie/atombindung";
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

export default function LessonPage() {
  const params = useParams();
  const lessonId = params.lessonId as string;
  const { addXp, completeLesson, updateStreak, progress } = useAppStore();

  const lesson = chemistryLessons[lessonId as keyof typeof chemistryLessons];

  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [showXp, setShowXp] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentOrderIndex = chemistryLessonOrder.indexOf(lessonId as typeof chemistryLessonOrder[number]);
  const nextLessonId = currentOrderIndex < chemistryLessonOrder.length - 1
    ? chemistryLessonOrder[currentOrderIndex + 1]
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
          <Link href="/fach/chemie/atombindung" className="btn-secondary inline-block mt-4">
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
            <Link href="/fach/chemie/atombindung" className="text-sm text-gray-400 hover:text-white">
              ← Zurück
            </Link>
            <span className="text-xs text-gray-500">
              {currentBlockIndex + 1}/{blocks.length}
            </span>
          </div>

          {/* Progress */}
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${((currentBlockIndex + 1) / blocks.length) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between mt-2">
            <h2 className="text-sm font-semibold text-white">
              {lesson.icon} {lesson.title}
            </h2>
            <span className="badge-xp text-xs">
              +{lesson.xpReward} XP
            </span>
          </div>
        </div>
      </div>

      {/* Block Content */}
      <div className="max-w-lg mx-auto px-4 pt-6">
        {!completed ? (
          <>
            <BlockRenderer block={blocks[currentBlockIndex]} />

            {/* Navigation */}
            <div className="flex gap-3 mt-6">
              {currentBlockIndex > 0 && (
                <button
                  onClick={() => setCurrentBlockIndex(currentBlockIndex - 1)}
                  className="btn-secondary flex-1"
                >
                  ← Zurück
                </button>
              )}

              {!isLastBlock ? (
                <button
                  onClick={() => setCurrentBlockIndex(currentBlockIndex + 1)}
                  className="btn-primary flex-1"
                >
                  Weiter →
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  className="btn-success flex-1"
                >
                  ✅ Lektion abschließen
                </button>
              )}
            </div>
          </>
        ) : (
          /* Completion Screen */
          <div className="card-glass p-8 text-center animate-bounce-in">
            <span className="text-6xl block mb-4">🎉</span>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Lektion geschafft!
            </h2>
            <p className="text-gray-400 mb-4">{lesson.title}</p>

            <div className="badge-xp text-lg mx-auto mb-6">
              ⭐ +{lesson.xpReward} XP
            </div>

            <div className="flex flex-col gap-3">
              {nextLessonId && (
                <Link
                  href={`/fach/chemie/atombindung/${nextLessonId}`}
                  className="btn-primary"
                >
                  Nächste Lektion →
                </Link>
              )}
              <Link
                href="/fach/chemie/atombindung"
                className="btn-secondary"
              >
                Zurück zur Übersicht
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
