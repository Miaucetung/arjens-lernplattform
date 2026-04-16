import { ChecklistItem, LEVELS, UserProgress, XpEvent } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  // User Progress
  progress: UserProgress;

  // Actions
  addXp: (amount: number, reason: string) => void;
  completeLesson: (lessonId: string) => void;
  completeModule: (moduleId: string) => void;
  updateStreak: () => void;
  toggleChecklist: (itemId: string) => void;
  addWeakTopic: (topicId: string) => void;
  removeWeakTopic: (topicId: string) => void;
  resetProgress: () => void;

  // XP History
  xpHistory: XpEvent[];

  // UI State
  currentSubject: string | null;
  currentModule: string | null;
  currentLesson: string | null;
  setCurrentSubject: (id: string | null) => void;
  setCurrentModule: (id: string | null) => void;
  setCurrentLesson: (id: string | null) => void;
}

const defaultChecklist: ChecklistItem[] = [
  {
    id: "lewis",
    label: "Lewis-Strukturen zeichnen",
    category: "chemie",
    completed: false,
  },
  {
    id: "dipol",
    label: "Dipole erkennen",
    category: "chemie",
    completed: false,
  },
  {
    id: "en",
    label: "Elektronegativität erklären",
    category: "chemie",
    completed: false,
  },
  {
    id: "epa",
    label: "EPA-Modell anwenden",
    category: "chemie",
    completed: false,
  },
  {
    id: "kraefte",
    label: "Zwischenmolekulare Kräfte vergleichen",
    category: "chemie",
    completed: false,
  },
  {
    id: "wasser",
    label: "Wasser als Spezialfall erklären",
    category: "chemie",
    completed: false,
  },
];

const initialProgress: UserProgress = {
  totalXp: 0,
  level: 1,
  streak: 0,
  lastActivity: "",
  completedLessons: [],
  completedModules: [],
  weakTopics: [],
  strongTopics: [],
  checklistItems: defaultChecklist,
};

function calculateLevel(xp: number): number {
  let level = 1;
  for (const l of LEVELS) {
    if (xp >= l.minXp) level = l.level;
  }
  return level;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      progress: initialProgress,
      xpHistory: [],
      currentSubject: null,
      currentModule: null,
      currentLesson: null,

      addXp: (amount, reason) => {
        const event: XpEvent = {
          amount,
          reason,
          timestamp: new Date().toISOString(),
        };
        set((state) => ({
          progress: {
            ...state.progress,
            totalXp: state.progress.totalXp + amount,
            level: calculateLevel(state.progress.totalXp + amount),
          },
          xpHistory: [...state.xpHistory, event],
        }));
      },

      completeLesson: (lessonId) => {
        const lessonToChecklist: Record<string, string> = {
          lewis: "lewis",
          polar: "dipol",
          elektronegativitaet: "en",
          epa: "epa",
          kraefte: "kraefte",
          wasser: "wasser",
        };
        set((state) => {
          if (state.progress.completedLessons.includes(lessonId)) return state;
          const checklistId = lessonToChecklist[lessonId];
          return {
            progress: {
              ...state.progress,
              completedLessons: [...state.progress.completedLessons, lessonId],
              checklistItems: checklistId
                ? state.progress.checklistItems.map((item) =>
                    item.id === checklistId
                      ? { ...item, completed: true }
                      : item,
                  )
                : state.progress.checklistItems,
            },
          };
        });
      },

      completeModule: (moduleId) => {
        set((state) => {
          if (state.progress.completedModules.includes(moduleId)) return state;
          return {
            progress: {
              ...state.progress,
              completedModules: [...state.progress.completedModules, moduleId],
            },
          };
        });
      },

      updateStreak: () => {
        const today = new Date().toDateString();
        const last = get().progress.lastActivity;
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        set((state) => ({
          progress: {
            ...state.progress,
            streak:
              last === yesterday
                ? state.progress.streak + 1
                : last === today
                  ? state.progress.streak
                  : 1,
            lastActivity: today,
          },
        }));
      },

      toggleChecklist: (itemId) => {
        set((state) => ({
          progress: {
            ...state.progress,
            checklistItems: state.progress.checklistItems.map((item) =>
              item.id === itemId
                ? { ...item, completed: !item.completed }
                : item,
            ),
          },
        }));
      },

      addWeakTopic: (topicId) => {
        set((state) => ({
          progress: {
            ...state.progress,
            weakTopics: state.progress.weakTopics.includes(topicId)
              ? state.progress.weakTopics
              : [...state.progress.weakTopics, topicId],
          },
        }));
      },

      removeWeakTopic: (topicId) => {
        set((state) => ({
          progress: {
            ...state.progress,
            weakTopics: state.progress.weakTopics.filter((t) => t !== topicId),
          },
        }));
      },

      resetProgress: () => {
        set({ progress: initialProgress, xpHistory: [] });
      },

      setCurrentSubject: (id) => set({ currentSubject: id }),
      setCurrentModule: (id) => set({ currentModule: id }),
      setCurrentLesson: (id) => set({ currentLesson: id }),
    }),
    {
      name: "arjens-lernplatform-storage",
    },
  ),
);
