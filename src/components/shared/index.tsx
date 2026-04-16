"use client";

import { useAppStore } from "@/store/useAppStore";
import { LEVELS } from "@/types";
import Link from "next/link";

// ============================================
// PROGRESS BAR
// ============================================
export function ProgressBar({
  value,
  max,
  color,
  className = "",
}: {
  value: number;
  max: number;
  color?: string;
  className?: string;
}) {
  const percent = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className={`progress-bar ${className}`}>
      <div
        className="progress-bar-fill"
        style={{
          width: `${Math.min(percent, 100)}%`,
          ...(color ? { background: color } : {}),
        }}
      />
    </div>
  );
}

// ============================================
// XP BADGE
// ============================================
export function XpBadge({ amount }: { amount: number }) {
  return <span className="badge-xp">⭐ +{amount} XP</span>;
}

// ============================================
// XP POPUP (animated)
// ============================================
export function XpPopup({
  amount,
  visible,
}: {
  amount: number;
  visible: boolean;
}) {
  if (!visible) return null;
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce-in">
      <div className="bg-amber-500/20 backdrop-blur-xl border border-amber-500/30 text-amber-300 font-bold text-xl px-6 py-3 rounded-2xl shadow-2xl">
        ⭐ +{amount} XP!
      </div>
    </div>
  );
}

// ============================================
// STREAK DISPLAY
// ============================================
export function StreakDisplay() {
  const streak = useAppStore((s) => s.progress.streak);
  if (streak === 0) return null;
  return (
    <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2">
      <span className="text-2xl">🔥</span>
      <div>
        <p className="font-bold text-orange-400">{streak} Tage Streak</p>
        <p className="text-xs text-orange-400/60">Weiter so!</p>
      </div>
    </div>
  );
}

// ============================================
// LEVEL BADGE
// ============================================
export function LevelBadge() {
  const { level, totalXp } = useAppStore((s) => s.progress);
  const currentLevel = LEVELS.find((l) => l.level === level) ?? LEVELS[0];

  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl">{currentLevel.icon}</span>
      <div>
        <p className="text-sm font-bold text-white">{currentLevel.name}</p>
        <p className="text-xs text-gray-400">{totalXp} XP</p>
      </div>
    </div>
  );
}

// ============================================
// BACK BUTTON
// ============================================
export function BackButton({
  href,
  label = "Zurück",
}: {
  href: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 mb-3"
    >
      ← {label}
    </Link>
  );
}

// ============================================
// EMPTY STATE
// ============================================
export function EmptyState({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-glass p-8 text-center">
      <span className="text-5xl block mb-3">{icon}</span>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

// ============================================
// SECTION HEADER
// ============================================
export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
    </div>
  );
}
