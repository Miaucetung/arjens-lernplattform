// ============================================
// SUBJECT & MODULE TYPES
// ============================================

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  available: boolean;
  modules: Module[];
}

export interface Module {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  lessons: Lesson[];
  unlocked: boolean;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  order: number;
  estimatedMinutes: number;
  blocks: LearningBlock[];
  completed: boolean;
  xpReward: number;
}

// ============================================
// LEARNING BLOCK TYPES
// ============================================

export type BlockType =
  | "prediction"
  | "reveal"
  | "practice"
  | "mistake"
  | "diagram"
  | "quiz"
  | "scenario"
  | "info";

export interface LearningBlock {
  id: string;
  type: BlockType;
  data:
    | PredictionData
    | RevealData
    | PracticeData
    | MistakeData
    | DiagramData
    | QuizData
    | ScenarioData
    | InfoData;
}

export interface PredictionData {
  question: string;
  hint?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  imageUrl?: string;
}

export interface RevealData {
  title: string;
  steps: RevealStep[];
}

export interface RevealStep {
  content: string;
  imageUrl?: string;
  highlight?: string;
}

export interface PracticeData {
  instruction: string;
  type: "drag-drop" | "draw" | "select" | "fill-blank" | "order";
  items?: PracticeItem[];
  correctOrder?: string[];
  blanks?: BlankItem[];
}

export interface PracticeItem {
  id: string;
  label?: string;
  category?: string;
  prompt?: string;
  options?: string[];
  correct?: string;
}

export interface BlankItem {
  text: string;
  answer: string;
}

export interface MistakeData {
  title: string;
  wrongAnswer: string;
  whyWrong: string;
  correctAnswer: string;
  whyCorrect: string;
}

export interface DiagramData {
  title: string;
  description: string;
  type: "molecule-2d" | "molecule-3d" | "chart" | "concept-map" | "comparison";
  data: Record<string, unknown>;
}

export interface QuizData {
  question: string;
  options: QuizOption[];
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
}

export interface ScenarioData {
  title: string;
  scenario: string;
  question: string;
  imageUrl?: string;
  answer: string;
  explanation: string;
}

export interface InfoData {
  title: string;
  content: string;
  highlight?: string;
  imageUrl?: string;
  emoji?: string;
}

// ============================================
// GAMIFICATION TYPES
// ============================================

export interface UserProgress {
  totalXp: number;
  level: number;
  streak: number;
  lastActivity: string;
  completedLessons: string[];
  completedModules: string[];
  weakTopics: string[];
  strongTopics: string[];
  checklistItems: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  category: string;
  completed: boolean;
}

export interface XpEvent {
  amount: number;
  reason: string;
  timestamp: string;
}

// ============================================
// LEVEL SYSTEM
// ============================================

export const LEVELS = [
  { level: 1, name: "Neuling", minXp: 0, icon: "🌱" },
  { level: 2, name: "Entdecker", minXp: 100, icon: "🔍" },
  { level: 3, name: "Lernender", minXp: 300, icon: "📖" },
  { level: 4, name: "Forscher", minXp: 600, icon: "🔬" },
  { level: 5, name: "Kenner", minXp: 1000, icon: "🧪" },
  { level: 6, name: "Experte", minXp: 1500, icon: "⚗️" },
  { level: 7, name: "Meister", minXp: 2200, icon: "🏆" },
  { level: 8, name: "Prüfung ready!", minXp: 3000, icon: "🎓" },
] as const;
