import { Subject } from "@/types";

export const subjects: Subject[] = [
  // ═══════════════════════════════════════
  // CHEMIE – Vollständig ausgearbeitet
  // ═══════════════════════════════════════
  {
    id: "chemie",
    name: "Chemie",
    icon: "⚗️",
    color: "#3b82f6",
    gradient: "from-blue-500 to-cyan-500",
    description: "Atombindung, Moleküle & mehr",
    available: true,
    modules: [], // wird in /data/chemie/ definiert
  },

  // ═══════════════════════════════════════
  // PLATZHALTER – Weitere Fächer
  // ═══════════════════════════════════════
  {
    id: "mathematik",
    name: "Mathematik",
    icon: "📐",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-500",
    description: "Funktionen, Gleichungen & Geometrie",
    available: false,
    modules: [],
  },
  {
    id: "physik",
    name: "Physik",
    icon: "⚡",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500",
    description: "Mechanik, Energie & Elektrizität",
    available: false,
    modules: [],
  },
  {
    id: "biologie",
    name: "Biologie",
    icon: "🧬",
    color: "#22c55e",
    gradient: "from-green-500 to-emerald-500",
    description: "Zellbiologie, Genetik & Ökologie",
    available: false,
    modules: [],
  },
  {
    id: "deutsch",
    name: "Deutsch",
    icon: "📝",
    color: "#ef4444",
    gradient: "from-red-500 to-rose-500",
    description: "Grammatik, Aufsatz & Literatur",
    available: false,
    modules: [],
  },
  {
    id: "geschichte",
    name: "Geschichte",
    icon: "🏛️",
    color: "#a78bfa",
    gradient: "from-purple-400 to-indigo-500",
    description: "Epochen, Ereignisse & Zusammenhänge",
    available: false,
    modules: [],
  },
  {
    id: "griechisch",
    name: "Griechisch",
    icon: "🏺",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-teal-500",
    description: "Grammatik, Vokabeln & Übersetzung",
    available: false,
    modules: [],
  },
  {
    id: "ethik",
    name: "Ethik",
    icon: "🤔",
    color: "#ec4899",
    gradient: "from-pink-500 to-fuchsia-500",
    description: "Philosophie, Moral & Gesellschaft",
    available: false,
    modules: [],
  },
  {
    id: "powi",
    name: "PoWi",
    icon: "🏛️",
    color: "#14b8a6",
    gradient: "from-teal-500 to-green-500",
    description: "Politik, Wirtschaft & Gesellschaft",
    available: false,
    modules: [],
  },
];
