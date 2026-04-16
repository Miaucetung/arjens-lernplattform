import { LearningBlock } from "@/types";

// ═══════════════════════════════════════════════════
// LEKTION 1: ELEKTRONENPAARBINDUNG
// ═══════════════════════════════════════════════════

export const lesson1_elektronenpaarbindung: LearningBlock[] = [
  // --- PREDICTION ---
  {
    id: "epb-pred-1",
    type: "prediction",
    data: {
      question: "Was hält die Atome in einem Wassermolekül (H₂O) zusammen?",
      hint: "Denk an die Außenelektronen...",
      options: [
        "Magnetische Kräfte",
        "Gemeinsame Elektronenpaare",
        "Schwerkraft zwischen Atomen",
        "Positive Ladungen ziehen sich an",
      ],
      correctAnswer: "Gemeinsame Elektronenpaare",
      explanation: "Atome teilen sich Elektronenpaare! Beide Atome nutzen die gemeinsamen Elektronen, um ihre Außenschale zu füllen – das ist die kovalente Bindung (Elektronenpaarbindung).",
    },
  },

  // --- INFO ---
  {
    id: "epb-info-1",
    type: "info",
    data: {
      title: "Was ist ein Molekül?",
      emoji: "🧩",
      content: "Ein Molekül entsteht, wenn sich zwei oder mehr Nichtmetall-Atome Elektronen TEILEN.\n\nWarum? Weil jedes Atom seine Außenschale voll haben will (Edelgaskonfiguration).\n\nDas geteilte Elektronenpaar gehört BEIDEN Atomen – wie ein gemeinsames Netflix-Abo 😄",
      highlight: "Molekül = Nichtmetall-Atome, die sich Elektronen teilen",
    },
  },

  // --- REVEAL ---
  {
    id: "epb-reveal-1",
    type: "reveal",
    data: {
      title: "So entsteht die Bindung in H₂",
      steps: [
        {
          content: "Wasserstoff (H) hat 1 Außenelektron – braucht aber 2 für eine volle Schale.",
          highlight: "H hat 1 e⁻, braucht 2",
        },
        {
          content: "Zwei H-Atome kommen zusammen. Jedes bringt 1 Elektron mit.",
          highlight: "Jedes H bringt 1 e⁻ mit",
        },
        {
          content: "Die 2 Elektronen bilden ein gemeinsames Elektronenpaar (bindendes Paar).",
          highlight: "Bindendes Elektronenpaar = die Bindung!",
        },
        {
          content: "Jetzt 'sieht' jedes H-Atom 2 Elektronen → Schale voll → Molekül H₂ ist stabil!",
          highlight: "H–H oder H₂ → das Wasserstoff-Molekül",
        },
      ],
    },
  },

  // --- DIAGRAM ---
  {
    id: "epb-diag-1",
    type: "diagram",
    data: {
      title: "H₂ – Wasserstoff-Molekül",
      description: "Zwei H-Atome teilen sich ein Elektronenpaar",
      type: "molecule-2d",
      data: {
        name: "H₂ – Einfachbindung",
        atoms: [
          { symbol: "H", x: 100, y: 100, color: "#94a3b8" },
          { symbol: "H", x: 200, y: 100, color: "#94a3b8" },
        ],
        bonds: [{ from: 0, to: 1, type: "single" }],
        freePairs: [],
      },
    },
  },

  // --- INFO: Bindende vs freie Paare ---
  {
    id: "epb-info-2",
    type: "info",
    data: {
      title: "Bindende vs. Freie Elektronenpaare",
      emoji: "⚡",
      content: "Bindende Paare: Elektronen, die von ZWEI Atomen geteilt werden → sie halten die Bindung zusammen.\n\nFreie Paare (lone pairs): Elektronen, die nur EINEM Atom gehören → sie binden nichts, sind aber trotzdem da!\n\nBeide Typen sind wichtig für die Form des Moleküls!",
      highlight: "Freie Paare beeinflussen die Molekülgeometrie (→ EPA-Modell)",
    },
  },

  // --- DIAGRAM: H₂O ---
  {
    id: "epb-diag-2",
    type: "diagram",
    data: {
      title: "H₂O – Wasser",
      description: "2 bindende Paare + 2 freie Paare am Sauerstoff",
      type: "molecule-2d",
      data: {
        name: "H₂O – gewinkelt, 2 freie Paare",
        atoms: [
          { symbol: "O", x: 150, y: 80, color: "#ef4444" },
          { symbol: "H", x: 90, y: 140, color: "#94a3b8" },
          { symbol: "H", x: 210, y: 140, color: "#94a3b8" },
        ],
        bonds: [
          { from: 0, to: 1, type: "single" },
          { from: 0, to: 2, type: "single" },
        ],
        freePairs: [{ atomIndex: 0, count: 2 }],
      },
    },
  },

  // --- QUIZ ---
  {
    id: "epb-quiz-1",
    type: "quiz",
    data: {
      question: "Wie viele freie Elektronenpaare hat das Sauerstoff-Atom im Wasser (H₂O)?",
      options: [
        { id: "a", text: "0 – alle Paare sind bindend", correct: false },
        { id: "b", text: "1 freies Paar", correct: false },
        { id: "c", text: "2 freie Paare", correct: true },
        { id: "d", text: "3 freie Paare", correct: false },
      ],
      explanation: "Sauerstoff hat 6 Außenelektronen. 2 davon bilden Bindungen mit H, die anderen 4 bilden 2 freie Elektronenpaare.",
      difficulty: "easy",
    },
  },

  // --- MISTAKE ---
  {
    id: "epb-mistake-1",
    type: "mistake",
    data: {
      title: "Verwechslung: Ionenbindung vs. Elektronenpaarbindung",
      wrongAnswer: "In H₂O gibt der Sauerstoff Elektronen an den Wasserstoff ab.",
      whyWrong: "Das wäre eine Ionenbindung (Metall + Nichtmetall). Bei H₂O teilen sich die Atome die Elektronen – niemand gibt etwas komplett ab!",
      correctAnswer: "In H₂O teilen sich O und H jeweils ein Elektronenpaar.",
      whyCorrect: "Beide sind Nichtmetalle → Elektronenpaarbindung (kovalente Bindung). Die Elektronen werden GETEILT, nicht übertragen.",
    },
  },

  // --- PRACTICE ---
  {
    id: "epb-practice-1",
    type: "practice",
    data: {
      instruction: "Ordne die Begriffe der richtigen Beschreibung zu:",
      type: "select",
      items: [
        {
          id: "bp",
          prompt: "Elektronen, die von beiden Atomen geteilt werden:",
          options: ["Bindendes Elektronenpaar", "Freies Elektronenpaar", "Ion"],
          correct: "Bindendes Elektronenpaar",
        },
        {
          id: "fp",
          prompt: "Elektronen, die nur an einem Atom bleiben:",
          options: ["Bindendes Elektronenpaar", "Freies Elektronenpaar", "Kation"],
          correct: "Freies Elektronenpaar",
        },
        {
          id: "typ",
          prompt: "Bindung zwischen zwei Nichtmetallen:",
          options: ["Ionenbindung", "Metallische Bindung", "Elektronenpaarbindung"],
          correct: "Elektronenpaarbindung",
        },
      ],
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 2: LEWIS-SCHREIBWEISE
// ═══════════════════════════════════════════════════

export const lesson2_lewis: LearningBlock[] = [
  {
    id: "lewis-pred-1",
    type: "prediction",
    data: {
      question: "Wie kann man die Bindungen und freien Paare in einem Molekül darstellen?",
      options: [
        "Mit Pfeilen zwischen den Atomen",
        "Mit Strichen (Bindungen) und Punkten (freie Paare)",
        "Mit + und - Zeichen",
        "Das kann man nicht zeichnen",
      ],
      correctAnswer: "Mit Strichen (Bindungen) und Punkten (freie Paare)",
      explanation: "Die Lewis-Schreibweise nutzt Striche für Bindungen (ein Strich = 1 Elektronenpaar) und Punkte/Doppelpunkte für freie Elektronenpaare.",
    },
  },
  {
    id: "lewis-reveal-1",
    type: "reveal",
    data: {
      title: "So zeichnest du eine Lewis-Struktur",
      steps: [
        {
          content: "Schritt 1: Zähle die Außenelektronen aller Atome zusammen.",
          highlight: "z.B. H₂O: H hat 1, O hat 6 → 2×1 + 6 = 8 Elektronen",
        },
        {
          content: "Schritt 2: Bestimme das Zentralatom (meistens das mit der niedrigsten EN, aber NIE Wasserstoff).",
          highlight: "Bei H₂O ist O das Zentralatom",
        },
        {
          content: "Schritt 3: Verbinde die Atome mit Einfachbindungen (jeder Strich = 2 Elektronen).",
          highlight: "H—O—H → 2 Bindungen = 4 Elektronen verbraucht",
        },
        {
          content: "Schritt 4: Verteile die restlichen Elektronen als freie Paare (zuerst an die äußeren Atome, dann ans Zentrum).",
          highlight: "8 - 4 = 4 Elektronen übrig → 2 freie Paare an O",
        },
        {
          content: "Schritt 5: Prüfe die Oktettregel – hat jedes Atom 8 Elektronen (H nur 2)?",
          highlight: "O: 2 Bindungen + 2 freie Paare = 8 ✓ | H: 1 Bindung = 2 ✓",
        },
      ],
    },
  },
  {
    id: "lewis-practice-1",
    type: "practice",
    data: {
      instruction: "Fülle die Lücken aus: Lewis-Struktur von HF",
      type: "fill-blank",
      blanks: [
        { text: "Außenelektronen von H:", answer: "1" },
        { text: "Außenelektronen von F:", answer: "7" },
        { text: "Gesamt:", answer: "8" },
        { text: "Bindende Paare:", answer: "1" },
        { text: "Freie Paare an F:", answer: "3" },
      ],
    },
  },
  {
    id: "lewis-diag-1",
    type: "diagram",
    data: {
      title: "Lewis-Strukturen wichtiger Moleküle",
      description: "CO₂ – Kohlenstoffdioxid: Doppelbindungen!",
      type: "molecule-2d",
      data: {
        name: "O=C=O (CO₂) – linear, 2 Doppelbindungen",
        atoms: [
          { symbol: "O", x: 60, y: 100, color: "#ef4444" },
          { symbol: "C", x: 150, y: 100, color: "#6b7280" },
          { symbol: "O", x: 240, y: 100, color: "#ef4444" },
        ],
        bonds: [
          { from: 0, to: 1, type: "double" },
          { from: 1, to: 2, type: "double" },
        ],
        freePairs: [
          { atomIndex: 0, count: 2 },
          { atomIndex: 2, count: 2 },
        ],
      },
    },
  },
  {
    id: "lewis-diag-2",
    type: "diagram",
    data: {
      title: "N₂ – Stickstoff",
      description: "Dreifachbindung! Beide N teilen 3 Elektronenpaare.",
      type: "molecule-2d",
      data: {
        name: "N≡N – Dreifachbindung, je 1 freies Paar",
        atoms: [
          { symbol: "N", x: 110, y: 100, color: "#3b82f6" },
          { symbol: "N", x: 190, y: 100, color: "#3b82f6" },
        ],
        bonds: [{ from: 0, to: 1, type: "triple" }],
        freePairs: [
          { atomIndex: 0, count: 1 },
          { atomIndex: 1, count: 1 },
        ],
      },
    },
  },
  {
    id: "lewis-quiz-1",
    type: "quiz",
    data: {
      question: "Wie viele Bindungen hat Kohlenstoff in CH₄?",
      options: [
        { id: "a", text: "2 Einfachbindungen", correct: false },
        { id: "b", text: "4 Einfachbindungen", correct: true },
        { id: "c", text: "2 Doppelbindungen", correct: false },
        { id: "d", text: "1 Vierfachbindung", correct: false },
      ],
      explanation: "Kohlenstoff hat 4 Außenelektronen und bildet 4 Einfachbindungen mit je einem H-Atom. So erreicht C das Oktett (8 Elektronen).",
      difficulty: "easy",
    },
  },
  {
    id: "lewis-mistake-1",
    type: "mistake",
    data: {
      title: "Häufiger Fehler: Oktettregel vergessen",
      wrongAnswer: "H hat 3 Bindungen in NH₃, also hat H auch ein Oktett.",
      whyWrong: "Wasserstoff braucht NUR 2 Elektronen (Duettregel!), nicht 8. H kann maximal 1 Bindung eingehen.",
      correctAnswer: "In NH₃ hat N 3 Bindungen + 1 freies Paar (= 8 e⁻). Jedes H hat 1 Bindung (= 2 e⁻).",
      whyCorrect: "N erfüllt die Oktettregel (8 e⁻), H erfüllt die Duettregel (2 e⁻). Verschiedene Regeln für verschiedene Atome!",
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 3: EPA-MODELL
// ═══════════════════════════════════════════════════

export const lesson3_epa: LearningBlock[] = [
  {
    id: "epa-pred-1",
    type: "prediction",
    data: {
      question: "Warum ist Wasser (H₂O) GEWINKELT und nicht linear wie CO₂?",
      hint: "Beide haben ein Zentralatom mit 2 Bindungen...",
      options: [
        "Weil H-Atome schwerer sind",
        "Weil die freien Elektronenpaare Platz brauchen",
        "Weil Sauerstoff größer ist als Kohlenstoff",
        "Zufall – es könnte auch linear sein",
      ],
      correctAnswer: "Weil die freien Elektronenpaare Platz brauchen",
      explanation: "Die freien Elektronenpaare am O stoßen die bindenden Paare ab! Sie brauchen sogar MEHR Platz als bindende Paare. Deshalb wird der Winkel kleiner als 109,5° → gewinkelt!",
    },
  },
  {
    id: "epa-info-1",
    type: "info",
    data: {
      title: "Das EPA-Modell",
      emoji: "🔮",
      content: "EPA = Elektronenpaar-Abstoßungs-Modell\n\nDie Idee ist simpel: Alle Elektronenpaare (bindende UND freie) stoßen sich gegenseitig ab und versuchen, möglichst weit voneinander weg zu sein.\n\nDas bestimmt die FORM des Moleküls!",
      highlight: "Merke: Freie Paare brauchen MEHR Platz als bindende Paare!",
    },
  },
  {
    id: "epa-reveal-1",
    type: "reveal",
    data: {
      title: "Die wichtigsten Geometrien",
      steps: [
        {
          content: "2 Elektronenpaare (0 frei) → LINEAR (180°). Beispiel: CO₂",
          highlight: "⬤ — ⬤ — ⬤ → gerader Strich",
        },
        {
          content: "3 EP (0 frei) → TRIGONAL-PLANAR (120°). Beispiel: BF₃",
          highlight: "Alle 3 Bindungen in einer Ebene",
        },
        {
          content: "4 EP (0 frei) → TETRAEDRISCH (109,5°). Beispiel: CH₄",
          highlight: "3D-Pyramide mit 4 gleichen Winkeln",
        },
        {
          content: "4 EP (1 frei) → TRIGONAL-PYRAMIDAL (107°). Beispiel: NH₃",
          highlight: "Wie ein Tetraeder, aber ein Bein fehlt → Pyramide",
        },
        {
          content: "4 EP (2 frei) → GEWINKELT (104,5°). Beispiel: H₂O",
          highlight: "Die 2 freien Paare drücken die H-Atome zusammen!",
        },
      ],
    },
  },
  {
    id: "epa-practice-1",
    type: "practice",
    data: {
      instruction: "Ordne die Moleküle der richtigen Geometrie zu:",
      type: "select",
      items: [
        { id: "co2", label: "CO₂ → linear", category: "correct" },
        { id: "h2o-tet", label: "H₂O → tetraedrisch", category: "wrong" },
        { id: "ch4", label: "CH₄ → tetraedrisch", category: "correct" },
        { id: "nh3", label: "NH₃ → trigonal-pyramidal", category: "correct" },
        { id: "h2o-gew", label: "H₂O → gewinkelt", category: "correct" },
        { id: "co2-gew", label: "CO₂ → gewinkelt", category: "wrong" },
      ],
    },
  },
  {
    id: "epa-quiz-1",
    type: "quiz",
    data: {
      question: "Ein Molekül hat 3 bindende und 1 freies Elektronenpaar. Welche Geometrie hat es?",
      options: [
        { id: "a", text: "Tetraedrisch", correct: false },
        { id: "b", text: "Trigonal-planar", correct: false },
        { id: "c", text: "Trigonal-pyramidal", correct: true },
        { id: "d", text: "Gewinkelt", correct: false },
      ],
      explanation: "3 bindend + 1 frei = 4 Elektronenpaare gesamt. Die Grundform ist tetraedrisch, aber ein Platz ist durch ein freies Paar besetzt → trigonal-pyramidal (z.B. NH₃).",
      difficulty: "medium",
    },
  },
  {
    id: "epa-scenario-1",
    type: "scenario",
    data: {
      title: "Warum kocht Wasser bei 100°C?",
      scenario: "Methan (CH₄, Molekülmasse 16) ist bei Raumtemperatur ein Gas. Wasser (H₂O, Molekülmasse 18) ist bei Raumtemperatur FLÜSSIG – obwohl es fast gleich schwer ist!",
      question: "Warum hat Wasser einen so viel höheren Siedepunkt als Methan?",
      answer: "Wasser ist ein Dipol und bildet Wasserstoffbrückenbindungen – die sind viel stärker als die Van-der-Waals-Kräfte bei Methan!",
      explanation: "Die gewinkelte Form + hohe EN von O machen Wasser zum Dipol. Die H-Brücken zwischen den Molekülen brauchen viel Energie zum Aufbrechen → hoher Siedepunkt.",
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 4: ELEKTRONEGATIVITÄT
// ═══════════════════════════════════════════════════

export const lesson4_en: LearningBlock[] = [
  {
    id: "en-pred-1",
    type: "prediction",
    data: {
      question: "Wenn Fluor und Wasserstoff eine Bindung eingehen – wo sind die Elektronen eher?",
      options: [
        "Genau in der Mitte",
        "Näher am Fluor",
        "Näher am Wasserstoff",
        "Sie bewegen sich hin und her",
      ],
      correctAnswer: "Näher am Fluor",
      explanation: "Fluor hat die höchste Elektronegativität aller Elemente (3,98)! Es zieht die gemeinsamen Elektronen stark zu sich → die Bindung ist POLAR.",
    },
  },
  {
    id: "en-info-1",
    type: "info",
    data: {
      title: "Was ist Elektronegativität?",
      emoji: "🧲",
      content: "Elektronegativität (EN) = wie stark ein Atom die gemeinsamen Elektronen in einer Bindung anzieht.\n\nHohe EN → zieht stark (z.B. F, O, N)\nNiedrige EN → zieht schwach (z.B. Na, K)\n\nDie EN steigt im PSE: nach rechts ↗ und nach oben ↗",
      highlight: "Fluor hat die höchste EN (3,98), Francium die niedrigste (0,7)",
    },
  },
  {
    id: "en-reveal-1",
    type: "reveal",
    data: {
      title: "EN-Unterschied und Bindungstyp",
      steps: [
        {
          content: "ΔEN = 0: Unpolare Bindung → Elektronen gleichmäßig verteilt. Beispiel: H–H, Cl–Cl",
          highlight: "Gleiche Atome → gleiche EN → unpolar",
        },
        {
          content: "ΔEN = 0,1–1,7: Polare Bindung → Elektronen ungleichmäßig verteilt. Beispiel: H–F, O–H",
          highlight: "δ+ am schwächeren Atom, δ– am stärkeren → Partialladungen!",
        },
        {
          content: "ΔEN > 1,7: Ionenbindung → Elektron wird komplett übertragen. Beispiel: Na–Cl",
          highlight: "Kein Teilen mehr – ein Atom nimmt das Elektron komplett!",
        },
      ],
    },
  },
  {
    id: "en-info-2",
    type: "info",
    data: {
      title: "Partialladungen δ+ und δ–",
      emoji: "⚡",
      content: "Wenn die EN unterschiedlich ist, entsteht eine ungleiche Ladungsverteilung:\n\n• Das Atom mit HÖHERER EN bekommt δ– (teilweise negativ)\n• Das Atom mit NIEDRIGERER EN bekommt δ+ (teilweise positiv)\n\nBeispiel: H–F → H hat δ+, F hat δ–\nDas ist noch keine volle Ladung wie bei Ionen – nur eine PARTIELLE (teilweise) Ladung!",
      highlight: "δ (delta) = teilweise/partiell → nicht komplett geladen!",
    },
  },
  {
    id: "en-quiz-1",
    type: "quiz",
    data: {
      question: "Welche Bindung ist am stärksten polar?",
      options: [
        { id: "a", text: "C–H (ΔEN = 0,35)", correct: false },
        { id: "b", text: "N–H (ΔEN = 0,84)", correct: false },
        { id: "c", text: "O–H (ΔEN = 1,24)", correct: true },
        { id: "d", text: "C–C (ΔEN = 0)", correct: false },
      ],
      explanation: "Je größer der EN-Unterschied, desto polarer die Bindung! O–H hat mit 1,24 den größten ΔEN dieser Optionen.",
      difficulty: "medium",
    },
  },
  {
    id: "en-mistake-1",
    type: "mistake",
    data: {
      title: "Verwechslung: Polare Bindung ≠ polares Molekül",
      wrongAnswer: "CO₂ hat polare Bindungen, also ist CO₂ ein polares Molekül.",
      whyWrong: "Die C=O-Bindungen sind zwar polar, aber CO₂ ist LINEAR und symmetrisch! Die Dipolmomente zeigen in entgegengesetzte Richtungen und heben sich auf.",
      correctAnswer: "CO₂ hat polare Bindungen, ist aber als Gesamtmolekül UNPOLAR wegen der symmetrischen linearen Form.",
      whyCorrect: "Polarität des Moleküls hängt ab von: 1) Polare Bindungen UND 2) Geometrie! Symmetrie kann Dipole aufheben.",
    },
  },

  // --- PRACTICE ---
  {
    id: "en-practice-1",
    type: "practice",
    data: {
      instruction: "Sortiere die Bindungen von unpolar nach stark polar:",
      type: "order",
      items: [
        { id: "cc", label: "C–C (ΔEN = 0)" },
        { id: "ch", label: "C–H (ΔEN = 0,35)" },
        { id: "nh", label: "N–H (ΔEN = 0,84)" },
        { id: "oh", label: "O–H (ΔEN = 1,24)" },
      ],
      correctOrder: ["cc", "ch", "nh", "oh"],
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 5: POLARE VS UNPOLARE MOLEKÜLE
// ═══════════════════════════════════════════════════

export const lesson5_polar: LearningBlock[] = [
  {
    id: "pol-pred-1",
    type: "prediction",
    data: {
      question: "CO₂ hat polare Bindungen. Ist das gesamte Molekül ein Dipol?",
      hint: "Denk an die Form von CO₂...",
      options: ["Ja, es ist ein Dipol", "Nein, kein Dipol"],
      correctAnswer: "Nein, kein Dipol",
      explanation: "CO₂ ist linear! Die beiden polaren C=O-Bindungen zeigen in entgegengesetzte Richtungen → sie heben sich auf → KEIN Dipol!",
    },
  },
  {
    id: "pol-info-1",
    type: "info",
    data: {
      title: "Wann ist ein Molekül ein Dipol?",
      emoji: "⚖️",
      content: "Ein Molekül ist ein Dipol, wenn ZWEI Bedingungen erfüllt sind:\n\n1. Es gibt polare Bindungen (ΔEN > 0)\n2. Die Dipolmomente heben sich NICHT gegenseitig auf\n\nDas bedeutet: Symmetrische Moleküle sind oft KEINE Dipole, auch wenn sie polare Bindungen haben!",
      highlight: "Polare Bindungen + unsymmetrische Form → DIPOL",
    },
  },
  {
    id: "pol-diag-1",
    type: "diagram",
    data: {
      title: "Dipol vs Kein Dipol",
      description: "Vergleich: H₂O (Dipol) vs CO₂ (kein Dipol)",
      type: "comparison",
      data: {
        left: {
          label: "H₂O – DIPOL ✅",
          items: [
            "Gewinkelt (104,5°)",
            "Polare O–H-Bindungen",
            "Asymmetrisch → Dipole addieren sich",
            "Hat positive + negative Seite",
          ],
        },
        right: {
          label: "CO₂ – KEIN Dipol ❌",
          items: [
            "Linear (180°)",
            "Polare C=O-Bindungen",
            "Symmetrisch → Dipole heben sich auf",
            "Keine + und - Seite insgesamt",
          ],
        },
      },
    },
  },
  {
    id: "pol-quiz-1",
    type: "quiz",
    data: {
      question: "Welches Molekül ist ein Dipol?",
      options: [
        { id: "a", text: "CH₄ (tetraedrisch, symmetrisch)", correct: false },
        { id: "b", text: "NH₃ (trigonal-pyramidal)", correct: true },
        { id: "c", text: "CO₂ (linear, symmetrisch)", correct: false },
        { id: "d", text: "CCl₄ (tetraedrisch, symmetrisch)", correct: false },
      ],
      explanation: "NH₃ hat eine trigonal-pyramidale Form mit einem freien Elektronenpaar. Die N–H-Dipole addieren sich → Dipolmolekül! CH₄, CO₂ und CCl₄ sind zu symmetrisch.",
      difficulty: "medium",
    },
  },

  // --- REVEAL ---
  {
    id: "pol-reveal-1",
    type: "reveal",
    data: {
      title: "Schritt für Schritt: Ist ein Molekül ein Dipol?",
      steps: [
        {
          content: "Schritt 1: Bestimme den EN-Unterschied jeder Bindung. ΔEN > 0 → polare Bindung.",
          highlight: "Bindung polar? → ΔEN checken!",
        },
        {
          content: "Schritt 2: Zeichne die Richtung jedes Dipolmoments (Pfeil von δ+ nach δ–).",
          highlight: "Jede polare Bindung hat einen Dipolpfeil",
        },
        {
          content: "Schritt 3: Betrachte die Geometrie. Heben sich die Pfeile gegenseitig auf? → KEIN Dipol. Bleibt ein Gesamtpfeil? → DIPOL!",
          highlight: "Symmetrisch = kein Dipol | Asymmetrisch = Dipol",
        },
      ],
    },
  },

  // --- PRACTICE ---
  {
    id: "pol-practice-1",
    type: "practice",
    data: {
      instruction: "Entscheide: Dipol oder kein Dipol?",
      type: "select",
      items: [
        {
          id: "h2o",
          prompt: "H₂O (gewinkelt):",
          options: ["Dipol", "Kein Dipol"],
          correct: "Dipol",
        },
        {
          id: "co2",
          prompt: "CO₂ (linear):",
          options: ["Dipol", "Kein Dipol"],
          correct: "Kein Dipol",
        },
        {
          id: "nh3",
          prompt: "NH₃ (trigonal-pyramidal):",
          options: ["Dipol", "Kein Dipol"],
          correct: "Dipol",
        },
        {
          id: "ch4",
          prompt: "CH₄ (tetraedrisch):",
          options: ["Dipol", "Kein Dipol"],
          correct: "Kein Dipol",
        },
        {
          id: "hcl",
          prompt: "HCl (linear, 2 versch. Atome):",
          options: ["Dipol", "Kein Dipol"],
          correct: "Dipol",
        },
      ],
    },
  },

  // --- MISTAKE ---
  {
    id: "pol-mistake-1",
    type: "mistake",
    data: {
      title: "Typischer Fehler: Polare Bindungen = polares Molekül?",
      wrongAnswer: "CH₄ hat polare C–H-Bindungen, also ist CH₄ ein Dipolmolekül.",
      whyWrong: "CH₄ ist tetraedrisch und perfekt symmetrisch! Die 4 Dipolmomente der C–H-Bindungen zeigen in alle Richtungen und heben sich exakt auf.",
      correctAnswer: "CH₄ hat polare Bindungen, ist aber als Gesamtmolekül kein Dipol (symmetrische Geometrie).",
      whyCorrect: "Merke: IMMER die Geometrie prüfen! Polare Bindungen allein reichen nicht – die Form muss asymmetrisch sein, damit ein Gesamtdipol entsteht.",
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 6: ZWISCHENMOLEKULARE KRÄFTE
// ═══════════════════════════════════════════════════

export const lesson6_kraefte: LearningBlock[] = [
  {
    id: "kr-pred-1",
    type: "prediction",
    data: {
      question: "Warum ist Wasser bei Raumtemperatur flüssig, aber Methan (CH₄) ein Gas?",
      hint: "Beide haben ähnliche Molekülmassen (~16-18)...",
      options: [
        "Wasser-Moleküle sind schwerer",
        "Wasser hat stärkere Kräfte zwischen den Molekülen",
        "Methan-Moleküle bewegen sich schneller",
        "Wasser hat mehr Atome",
      ],
      correctAnswer: "Wasser hat stärkere Kräfte zwischen den Molekülen",
      explanation: "Die Kräfte ZWISCHEN den Molekülen (intermolekulare Kräfte) bestimmen den Siedepunkt! Wasser hat Wasserstoffbrücken – die sind viel stärker als die Van-der-Waals-Kräfte von Methan.",
    },
  },
  {
    id: "kr-reveal-1",
    type: "reveal",
    data: {
      title: "Die drei Arten zwischenmolekularer Kräfte",
      steps: [
        {
          content: "1. Van-der-Waals-Kräfte (am schwächsten): Gibt es in ALLEN Molekülen. Entstehen durch zufällige Ladungsverschiebungen. Je größer das Molekül, desto stärker.",
          highlight: "VdW: überall, aber schwach → niedrige Siedepunkte",
        },
        {
          content: "2. Dipol-Dipol-Kräfte (mittel): Nur bei Dipol-Molekülen. Die positive Seite eines Moleküls zieht die negative Seite eines anderen an.",
          highlight: "δ+ ... δ– → Anziehung zwischen polaren Molekülen",
        },
        {
          content: "3. Wasserstoffbrückenbindungen (am stärksten): Spezialfall! Wenn H an F, O oder N gebunden ist. Das freie Paar von F/O/N zieht das H eines Nachbarmoleküls an.",
          highlight: "H-Brücken: H–F, H–O, H–N → stärkste zwischenmolekulare Kraft!",
        },
      ],
    },
  },
  {
    id: "kr-practice-1",
    type: "practice",
    data: {
      instruction: "Sortiere die Kräfte von schwach nach stark:",
      type: "order",
      items: [
        { id: "vdw", label: "Van-der-Waals-Kräfte" },
        { id: "dd", label: "Dipol-Dipol-Kräfte" },
        { id: "hb", label: "Wasserstoffbrückenbindungen" },
      ],
      correctOrder: ["vdw", "dd", "hb"],
    },
  },
  {
    id: "kr-diag-1",
    type: "diagram",
    data: {
      title: "Kräfte → Siedepunkt",
      description: "Zusammenhang zwischen Kräften und Siedetemperatur",
      type: "concept-map",
      data: {
        nodes: [
          { id: "en", label: "Elektronegativität", emoji: "🧲" },
          { id: "pol", label: "Polare Bindung", emoji: "⚡" },
          { id: "dip", label: "Dipolmolekül", emoji: "↔️" },
          { id: "kraft", label: "Zwischenmol. Kräfte", emoji: "💪" },
          { id: "siede", label: "Siedepunkt", emoji: "🌡️" },
        ],
        edges: [
          { from: "en", to: "pol", label: "erzeugt" },
          { from: "pol", to: "dip", label: "+ Geometrie →" },
          { from: "dip", to: "kraft", label: "bestimmt Stärke" },
          { from: "kraft", to: "siede", label: "bestimmt Höhe" },
        ],
      },
    },
  },
  {
    id: "kr-quiz-1",
    type: "quiz",
    data: {
      question: "Welche zwischenmolekulare Kraft gibt es in HF?",
      options: [
        { id: "a", text: "Nur Van-der-Waals-Kräfte", correct: false },
        { id: "b", text: "Van-der-Waals + Dipol-Dipol", correct: false },
        { id: "c", text: "Van-der-Waals + Dipol-Dipol + H-Brücken", correct: true },
        { id: "d", text: "Nur Wasserstoffbrücken", correct: false },
      ],
      explanation: "HF hat ALLE drei! VdW gibt es immer. HF ist ein Dipol (→ DD-Kräfte). Und H ist an F gebunden (→ H-Brücken). Die stärkeren Kräfte kommen immer ZUSÄTZLICH zu den schwächeren!",
      difficulty: "hard",
    },
  },

  // --- MISTAKE ---
  {
    id: "kr-mistake-1",
    type: "mistake",
    data: {
      title: "Verwechslung: Stärkere Kraft ersetzt die schwächere?",
      wrongAnswer: "In HF gibt es nur Wasserstoffbrücken, weil die stärker als VdW und Dipol-Dipol sind.",
      whyWrong: "Die Kräfte ersetzen sich NICHT! Stärkere Kräfte kommen immer ZUSÄTZLICH zu den schwächeren dazu.",
      correctAnswer: "In HF gibt es alle drei Kräfte gleichzeitig: VdW + Dipol-Dipol + H-Brücken. Sie addieren sich!",
      whyCorrect: "VdW gibt es in JEDEM Molekül. Wenn es ein Dipol ist, kommen DD-Kräfte dazu. Wenn H an F/O/N gebunden ist, kommen H-Brücken noch dazu. Alles gleichzeitig!",
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 7: WASSER ALS SPEZIALFALL
// ═══════════════════════════════════════════════════

export const lesson7_wasser: LearningBlock[] = [
  {
    id: "wa-pred-1",
    type: "prediction",
    data: {
      question: "Ein geladener Luftballon wird neben einen Wasserstrahl gehalten. Was passiert?",
      options: [
        "Nichts – Wasser reagiert nicht auf Ladung",
        "Der Wasserstrahl wird abgelenkt",
        "Der Ballon wird nass",
        "Das Wasser verdampft",
      ],
      correctAnswer: "Der Wasserstrahl wird abgelenkt",
      explanation: "Wasser-Dipole richten sich im elektrischen Feld aus! Die positive Seite (H) wird zum negativ geladenen Ballon gezogen → der Strahl biegt sich!",
    },
  },
  {
    id: "wa-info-1",
    type: "info",
    data: {
      title: "Warum ist Wasser so besonders?",
      emoji: "💧",
      content: "Wasser hat viele ungewöhnliche Eigenschaften – alles wegen seiner Dipol-Natur und der H-Brücken:\n\n• Hoher Siedepunkt (100°C statt erwartete -80°C!)\n• Anomalie des Wassers (Eis schwimmt)\n• Gutes Lösemittel für polare Stoffe\n• Oberflächenspannung (Wasserläufer!)",
      highlight: "Ohne H-Brücken wäre Wasser bei Raumtemperatur ein Gas!",
    },
  },
  {
    id: "wa-scenario-1",
    type: "scenario",
    data: {
      title: "Der Wasserläufer",
      scenario: "Ein Wasserläufer (kleines Insekt) kann auf der Wasseroberfläche laufen, ohne einzusinken. Andere, schwerere Insekten sinken dagegen ein.",
      question: "Was ermöglicht es dem Wasserläufer, auf dem Wasser zu laufen?",
      answer: "Die Oberflächenspannung des Wassers! Die H-Brücken zwischen den Wasser-Molekülen bilden an der Oberfläche eine Art 'Haut'.",
      explanation: "Die H-Brücken zwischen Wasser-Molekülen an der Oberfläche erzeugen eine Kraft, die die Oberfläche zusammenhält (Oberflächenspannung). Das Gewicht des Wasserläufers reicht nicht, um diese 'Haut' zu durchbrechen.",
    },
  },
  {
    id: "wa-info-2",
    type: "info",
    data: {
      title: "Similia similibus solvuntur",
      emoji: "🧪",
      content: "Lateinisch für: 'Gleiches löst sich in Gleichem'\n\n• Polare Stoffe lösen sich in polaren Lösemitteln (z.B. Salz in Wasser)\n• Unpolare Stoffe lösen sich in unpolaren Lösemitteln (z.B. Fett in Benzin)\n• Deshalb mischt sich Öl NICHT mit Wasser! (unpolar + polar = 🚫)",
      highlight: "polar + polar = ✅ | unpolar + unpolar = ✅ | polar + unpolar = ❌",
    },
  },
  {
    id: "wa-quiz-1",
    type: "quiz",
    data: {
      question: "Warum löst sich Speisesalz (NaCl) gut in Wasser?",
      options: [
        { id: "a", text: "Weil NaCl unpolar ist", correct: false },
        { id: "b", text: "Weil Wasser ein Dipol ist und die Ionen umhüllen kann", correct: true },
        { id: "c", text: "Weil Salz leichter als Wasser ist", correct: false },
        { id: "d", text: "Weil beide farblos sind", correct: false },
      ],
      explanation: "Wasser-Dipole können Ionen umhüllen (Hydratation): δ– (O) zieht Na+ an, δ+ (H) zieht Cl– an. So werden die Ionen aus dem Kristall gelöst!",
      difficulty: "medium",
    },
  },
  {
    id: "wa-mistake-1",
    type: "mistake",
    data: {
      title: "Verwechslung: H-Brücken vs. kovalente Bindung",
      wrongAnswer: "Wasserstoffbrücken sind kovalente Bindungen zwischen H-Atomen.",
      whyWrong: "H-Brücken sind KEINE echten Bindungen! Sie sind viel schwächer (ca. 1/10 einer kovalenten Bindung). Es sind Anziehungskräfte ZWISCHEN Molekülen.",
      correctAnswer: "Wasserstoffbrücken sind zwischenmolekulare Kräfte: Das H (δ+) eines Moleküls wird vom freien Paar (δ–) am F/O/N eines ANDEREN Moleküls angezogen.",
      whyCorrect: "Sie heißen 'Brücken', weil sie eine Brücke zwischen zwei Molekülen bilden – aber sie sind deutlich schwächer als echte chemische Bindungen.",
    },
  },

  // --- PRACTICE ---
  {
    id: "wa-practice-1",
    type: "practice",
    data: {
      instruction: "Was löst sich in Wasser? (polar löst sich in polar!)",
      type: "select",
      items: [
        {
          id: "nacl",
          prompt: "Kochsalz (NaCl) – ionisch/polar:",
          options: ["Löst sich", "Löst sich nicht"],
          correct: "Löst sich",
        },
        {
          id: "oel",
          prompt: "Speiseöl – unpolar:",
          options: ["Löst sich", "Löst sich nicht"],
          correct: "Löst sich nicht",
        },
        {
          id: "zucker",
          prompt: "Zucker – polar (viele OH-Gruppen):",
          options: ["Löst sich", "Löst sich nicht"],
          correct: "Löst sich",
        },
        {
          id: "wachs",
          prompt: "Kerzenwachs – unpolar:",
          options: ["Löst sich", "Löst sich nicht"],
          correct: "Löst sich nicht",
        },
      ],
    },
  },
];

// ═══════════════════════════════════════════════════
// ALLE LEKTIONEN EXPORTIEREN
// ═══════════════════════════════════════════════════

export const chemistryLessons = {
  elektronenpaarbindung: {
    id: "elektronenpaarbindung",
    title: "Elektronenpaarbindung",
    description: "Was ist ein Molekül? Kovalente Bindung verstehen",
    icon: "🔗",
    estimatedMinutes: 8,
    xpReward: 50,
    blocks: lesson1_elektronenpaarbindung,
  },
  lewis: {
    id: "lewis",
    title: "Lewis-Schreibweise",
    description: "Strukturformeln zeichnen & verstehen",
    icon: "✏️",
    estimatedMinutes: 10,
    xpReward: 60,
    blocks: lesson2_lewis,
  },
  epa: {
    id: "epa",
    title: "EPA-Modell",
    description: "Molekülgeometrien verstehen & vorhersagen",
    icon: "🔮",
    estimatedMinutes: 8,
    xpReward: 60,
    blocks: lesson3_epa,
  },
  elektronegativitaet: {
    id: "elektronegativitaet",
    title: "Elektronegativität",
    description: "Wer zieht die Elektronen stärker?",
    icon: "🧲",
    estimatedMinutes: 7,
    xpReward: 50,
    blocks: lesson4_en,
  },
  polar: {
    id: "polar",
    title: "Polare & unpolare Moleküle",
    description: "Dipol oder kein Dipol?",
    icon: "⚡",
    estimatedMinutes: 6,
    xpReward: 50,
    blocks: lesson5_polar,
  },
  kraefte: {
    id: "kraefte",
    title: "Zwischenmolekulare Kräfte",
    description: "VdW, Dipol-Dipol & H-Brücken",
    icon: "💪",
    estimatedMinutes: 8,
    xpReward: 60,
    blocks: lesson6_kraefte,
  },
  wasser: {
    id: "wasser",
    title: "Wasser als Spezialfall",
    description: "Warum ist Wasser so besonders?",
    icon: "💧",
    estimatedMinutes: 7,
    xpReward: 50,
    blocks: lesson7_wasser,
  },
};

export const chemistryLessonOrder = [
  "elektronenpaarbindung",
  "lewis",
  "epa",
  "elektronegativitaet",
  "polar",
  "kraefte",
  "wasser",
] as const;
