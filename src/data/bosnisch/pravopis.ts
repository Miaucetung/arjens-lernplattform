import { LearningBlock } from "@/types";

// ═══════════════════════════════════════════════════
// LEKTION 1: DAS BOSNISCHE ALPHABET (PISMO)
// Quelle: Pravopis Bosanskoga Jezika – Kapitel 16
// ═══════════════════════════════════════════════════

export const lesson1_pismo: LearningBlock[] = [
  {
    id: "pismo-pred-1",
    type: "prediction",
    data: {
      question: "Wie viele Buchstaben hat das bosnische Alphabet?",
      hint: "Es gibt besondere Laute, die das Deutsche nicht kennt...",
      options: ["26 – genau wie im Deutschen", "30 – mit 4 Sonderzeichen", "32 – mit 6 Sonderzeichen", "28 – mit 2 Sonderzeichen"],
      correctAnswer: "30 – mit 4 Sonderzeichen",
      explanation: "Das bosnische Alphabet hat 30 Buchstaben. Die 4 Sonderzeichen sind: Č, Ć, Š, Ž, Đ und das Digraph DŽ. Diese Laute existieren im Deutschen nicht – deshalb sind sie besonders wichtig zu lernen!",
    },
  },

  {
    id: "pismo-info-1",
    type: "info",
    data: {
      title: "Bosnisch schreibt man mit lateinischen Buchstaben",
      emoji: "🔤",
      content: "Bosnisch verwendet das lateinische Alphabet – genau wie Deutsch!\n\nABER: Es gibt 6 besondere Buchstaben, die im Deutschen nicht vorkommen:\n\n• Č (= tschtsch-Laut, hart)\n• Ć (= tsch-Laut, weich)\n• Š (= sch)\n• Ž (= wie in 'Garage')\n• Đ (= weiches dsché)\n• DŽ (= hartes dsch)",
      highlight: "Merksatz: Č-Ć, Š-Ž, DŽ-Đ – immer in Paaren lernen!",
    },
  },

  {
    id: "pismo-reveal-1",
    type: "reveal",
    data: {
      title: "Die 6 Sonderbuchstaben Schritt für Schritt",
      steps: [
        {
          content: "Š – gesprochen wie deutsches 'sch' in 'Schule'. Beispiel: šuma (Wald), škola (Schule), šta (was).",
          highlight: "Š = SCH",
        },
        {
          content: "Ž – gesprochen wie das 'g' in französisch 'Garage' oder das 'zh' in 'Zhivago'. Beispiel: žena (Frau), život (Leben), žuti (gelb).",
          highlight: "Ž = weiches 'sch' (stimmhaft)",
        },
        {
          content: "Č – ein hartes 'tsch' – die Zungenspitze zeigt nach vorne/oben. Beispiel: čaj (Tee), čovjek (Mensch), ručak (Mittagessen).",
          highlight: "Č = hartes TSCH (Zungenspitze oben)",
        },
        {
          content: "Ć – ein weiches 'tsch' – der Zungenrücken (Mitte) berührt den Gaumen. Beispiel: ćao (Tschüss), kuća (Haus), noć (Nacht).",
          highlight: "Ć = weiches TSCH (Zungenrücken oben)",
        },
        {
          content: "DŽ – hartes 'dsch' wie in 'Dschungel'. Beispiel: džamija (Moschee), džep (Tasche), džez (Jazz).",
          highlight: "DŽ = hartes DSCH",
        },
        {
          content: "Đ – weiches 'dj/dsch'. Das stimmhafte Gegenstück zu Ć. Beispiel: đak (Schüler), đavo (Teufel).",
          highlight: "Đ = weiches DJ (Stimmhaftes Ć)",
        },
      ],
    },
  },

  {
    id: "pismo-info-2",
    type: "info",
    data: {
      title: "Das Paarsystem: Stimmhaft ↔ Stimmlos",
      emoji: "🔄",
      content: "Die bosnischen Sonderzeichen bilden Paare:\n\n• Č (stimmlos) ↔ DŽ (stimmhaft)\n• Ć (stimmlos) ↔ Đ (stimmhaft)\n• Š (stimmlos) ↔ Ž (stimmhaft)\n\nStimmlos = ohne Stimme (nur Atemluft)\nStimmhaft = mit Stimmlippen-Vibration",
      highlight: "Č/DŽ, Ć/Đ, Š/Ž – drei Paare, die sich nur durch Stimmhaftigkeit unterscheiden",
    },
  },

  {
    id: "pismo-quiz-1",
    type: "quiz",
    data: {
      question: "Welches bosnische Wort bedeutet 'Schule'?",
      options: [
        { id: "a", text: "skola", correct: false },
        { id: "b", text: "shkola", correct: false },
        { id: "c", text: "škola", correct: true },
        { id: "d", text: "schola", correct: false },
      ],
      explanation: "Richtig: škola! Das 'sch' wird im Bosnischen mit Š geschrieben. Das Häkchen über dem S zeigt den 'sch'-Laut an.",
      difficulty: "easy",
    },
  },

  {
    id: "pismo-practice-1",
    type: "practice",
    data: {
      instruction: "Welcher Buchstabe fehlt? Wähle den richtigen Sonderbuchstaben:",
      type: "select",
      items: [
        {
          id: "s1",
          prompt: "__uma = Wald (sch-Laut)",
          options: ["S", "Š", "Ž", "Č"],
          correct: "Š",
        },
        {
          id: "s2",
          prompt: "ku__a = Haus (weiches tsch)",
          options: ["Č", "DŽ", "Ć", "Đ"],
          correct: "Ć",
        },
        {
          id: "s3",
          prompt: "d__amija = Moschee (hartes dsch)",
          options: ["Đ", "DŽ", "Ć", "Š"],
          correct: "DŽ",
        },
        {
          id: "s4",
          prompt: "__ak = Schüler (weiches dj)",
          options: ["DŽ", "Č", "Đ", "Ž"],
          correct: "Đ",
        },
      ],
    },
  },

  {
    id: "pismo-mistake-1",
    type: "mistake",
    data: {
      title: "Häufiger Fehler: Š mit SH verwechseln",
      wrongAnswer: "shuma, shkola, shta",
      whyWrong: "Im Bosnischen gibt es KEIN 'SH'! Das ist eine englische Schreibweise. Bosnisch hat das Zeichen Š mit dem Häkchen (Hatschek = ˇ).",
      correctAnswer: "šuma, škola, šta",
      whyCorrect: "Das Hatschek-Zeichen (ˇ) verwandelt S→Š, C→Č, Z→Ž. Ohne Häkchen sind es andere Laute!",
    },
  },

  {
    id: "pismo-scenario-1",
    type: "scenario",
    data: {
      title: "Anwendung: Buchstaben erkennen",
      scenario: "Arjen sieht in einem Schulbuch das Wort 'čovjek'. Er fragt sich, wie das ausgesprochen wird.",
      question: "Wie sprichst du 'čovjek' aus?",
      answer: "TSCHO-vjek",
      explanation: "'Č' ist das harte tsch (Zungenspitze oben vorne). Das Wort 'čovjek' bedeutet 'Mensch' und wird 'TSCHO-vjek' ausgesprochen.",
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 2: Č und Ć – der wichtigste Unterschied
// Quelle: Pravopis Bosanskoga Jezika – Kapitel 8
// ═══════════════════════════════════════════════════

export const lesson2_c_c: LearningBlock[] = [
  {
    id: "cc-pred-1",
    type: "prediction",
    data: {
      question: "Macht es einen Unterschied, ob man im Bosnischen 'č' oder 'ć' schreibt?",
      hint: "Denk daran: In der Chemie macht ein Elektron den Unterschied. Könnte hier ein Buchstabe die Bedeutung ändern?",
      options: [
        "Nein – beide klingen fast gleich, Bedeutung ändert sich nie",
        "Ja – es sind zwei verschiedene Phoneme mit unterschiedlichen Bedeutungen",
        "Nur in Namen macht es einen Unterschied",
        "Nur in formellen Texten",
      ],
      correctAnswer: "Ja – es sind zwei verschiedene Phoneme mit unterschiedlichen Bedeutungen",
      explanation: "Im Bosnischen sind Č und Ć zwei vollständig verschiedene Laute! Das bedeutet: verschiedene Schreibung = verschiedene Wörter. 'čemer' (Gift/Bitterkeit) ≠ 'ćemer' (Gürtel). Falsch schreiben = falsches Wort!",
    },
  },

  {
    id: "cc-info-1",
    type: "info",
    data: {
      title: "Anatomie der Aussprache: Č vs. Ć",
      emoji: "👅",
      content: "Der Unterschied liegt im MUND:\n\nČ – HART:\n→ Zungenspitze zeigt NACH OBEN/VORNE\n→ Lippen leicht gerundet, nach vorne\n→ 'Hartes' tsch (wie in 'Tschüss' mit Nachdruck)\n\nĆ – WEICH:\n→ Zungenrücken (Mitte!) liegt an Gaumen\n→ Lippen breit auseinander\n→ 'Weiches' tsch (ähnlich wie dt. 'ch' in 'ich')",
      highlight: "Eselsbrücke: Č = CHUNKY (hart, vorne), Ć = COSY (weich, hinten)",
    },
  },

  {
    id: "cc-reveal-1",
    type: "reveal",
    data: {
      title: "Bedeutungsunterschiede durch Č vs. Ć",
      steps: [
        {
          content: "čemer (hartes č) = Gift, Bitterkeit, Kummer\nćemer (weiches ć) = Gürtel mit Geldfach",
          highlight: "čemer ≠ ćemer – gleiche Buchstaben außer C!",
        },
        {
          content: "čup (hartes č) = Büschel, Haarbüschel\nćup (weiches ć) = Tontopf, irdenes Gefäß",
          highlight: "čup ≠ ćup",
        },
        {
          content: "kuČica (hartes č) = kleine Haken (dim. von kuka)\nkuĆica (weiches ć) = kleines Haus (dim. von kuća)",
          highlight: "kučica ≠ kućica",
        },
        {
          content: "mučenje (hartes č) = Qual, Folter (von mučiti)\nmućenje (weiches ć) = Trüben, Rühren (von mutiti)",
          highlight: "mučenje ≠ mućenje",
        },
      ],
    },
  },

  {
    id: "cc-info-2",
    type: "info",
    data: {
      title: "Wann kommt welches Zeichen? – Die Grammatikregel",
      emoji: "📐",
      content: "Č erscheint:\n• In Wortstämmen (čaj, čovjek, ručak, noč)\n• Wenn aus K oder C der Laut entsteht (junak→junače, vojnik→vojniče)\n• In Suffixen: -ač (krojač), -čić (sinčić)\n\nĆ erscheint:\n• Wenn aus T der Laut entsteht (krut→kruća, metati→mećem)\n• In Suffixen: -oća (čistoća), -ić (golubić, konjić)\n• Im Infinitiv starker Verben: doći, poći, reći, sjeći",
      highlight: "K/C → Č | T → Ć (Grammatikregel Nr. 1!)",
    },
  },

  {
    id: "cc-quiz-1",
    type: "quiz",
    data: {
      question: "Welches Wort bedeutet 'kleines Haus' (Diminutiv von kuća)?",
      options: [
        { id: "a", text: "kučica", correct: false },
        { id: "b", text: "kućica", correct: true },
        { id: "c", text: "kucica", correct: false },
        { id: "d", text: "kuchia", correct: false },
      ],
      explanation: "Kućica (mit Ć) ist das Diminutiv von kuća (Haus). Das Suffix -ica + das Ć aus dem Stamm ergeben kućica. kučica (mit Č) bedeutet dagegen 'kleiner Haken'!",
      difficulty: "medium",
    },
  },

  {
    id: "cc-practice-1",
    type: "practice",
    data: {
      instruction: "Č oder Ć? Ordne die Wörter dem richtigen Laut zu:",
      type: "select",
      items: [
        {
          id: "p1",
          prompt: "čaj (Tee) – der Laut am Anfang ist...",
          options: ["Č (hart, Zungenspitze)", "Ć (weich, Zungenrücken)"],
          correct: "Č (hart, Zungenspitze)",
        },
        {
          id: "p2",
          prompt: "kuća (Haus) – der Laut am Ende ist...",
          options: ["Č (hart, Zungenspitze)", "Ć (weich, Zungenrücken)"],
          correct: "Ć (weich, Zungenrücken)",
        },
        {
          id: "p3",
          prompt: "doći (ankommen) – Infinitiv-Endung -ći bedeutet...",
          options: ["Č (K/C-Herkunft)", "Ć (T-Herkunft, Grammatikregel)"],
          correct: "Ć (T-Herkunft, Grammatikregel)",
        },
        {
          id: "p4",
          prompt: "krojač (Schneider) – Suffix -ač enthält...",
          options: ["Č (Suffix -ač)", "Ć (Suffix -ać)"],
          correct: "Č (Suffix -ač)",
        },
      ],
    },
  },

  {
    id: "cc-mistake-1",
    type: "mistake",
    data: {
      title: "Klassischer Fehler: Ć im Suffix -ić schreiben",
      wrongAnswer: "golubić, konjić, brodić – manche schreiben: golubic, konjic (ohne Sonderzeichen)",
      whyWrong: "Das Diminutivsuffix -ić hat IMMER Ć (weiches tsch)! Ohne Sonderzeichen entsteht ein falsches Wort oder es ist unlesbar.",
      correctAnswer: "golubić (Täubchen), konjić (Pferdchen), brodić (Schiffchen)",
      whyCorrect: "Das Suffix -ić (Diminutiv) stammt aus dem T-Wandel und schreibt sich IMMER mit Ć. Das Häkchen gehört unbedingt dazu!",
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 3: DŽ und Đ – das stimmhafte Paar
// Quelle: Pravopis Bosanskoga Jezika – Kapitel 9
// ═══════════════════════════════════════════════════

export const lesson3_dz_d: LearningBlock[] = [
  {
    id: "dzd-pred-1",
    type: "prediction",
    data: {
      question: "Das Wort 'džamija' (Moschee) beginnt mit DŽ. Was wäre der Unterschied, wenn man 'đamija' schreibt?",
      hint: "DŽ und Đ sind Paare wie Č und Ć...",
      options: [
        "Kein Unterschied – beide klingen gleich",
        "Đamija existiert nicht – DŽ ist immer richtig",
        "Đak bedeutet 'Schüler' – andere Wortstämme, andere Wörter",
        "Nur ein Tippfehler, keine Bedeutungsänderung",
      ],
      correctAnswer: "Đak bedeutet 'Schüler' – andere Wortstämme, andere Wörter",
      explanation: "DŽ und Đ sind zwei verschiedene Phoneme! 'džak' = Sack (Beutel), 'đak' = Schüler. Falsch schreiben = falsches Wort!",
    },
  },

  {
    id: "dzd-info-1",
    type: "info",
    data: {
      title: "DŽ und Đ: Stimmhafte Gegenstücke",
      emoji: "🎙️",
      content: "DŽ ist das stimmhafte Gegenstück zu Č\nĐ ist das stimmhafte Gegenstück zu Ć\n\nDŽ – HART (stimmhaft):\n→ Wie 'Dschungel', 'Dschingis Khan'\n→ Zungenspitze vorne/oben\n→ Mit Stimmlippen-Vibration\n\nĐ – WEICH (stimmhaft):\n→ Wie weiches 'dj' oder 'dsch'\n→ Zungenrücken am Gaumen\n→ Stimmhafte Version von Ć",
      highlight: "Merksatz: Č↔DŽ (beide hart), Ć↔Đ (beide weich). Nur Stimmhaftigkeit unterscheidet sie!",
    },
  },

  {
    id: "dzd-reveal-1",
    type: "reveal",
    data: {
      title: "Wo erscheint DŽ, wo erscheint Đ?",
      steps: [
        {
          content: "DŽ erscheint meistens in Orientalismen (arabisch/türkisch entlehnte Wörter): džamija (Moschee), džezva (Kaffeekanne), džep (Tasche), džin (Dschinn/Geist).",
          highlight: "DŽ = oft in arabisch/türkischen Lehnwörtern",
        },
        {
          content: "DŽ erscheint auch in englischen Lehnwörtern: džip (Jeep), džez (Jazz), džentlmen (Gentleman).",
          highlight: "DŽ = englisches 'j' in Lehnwörtern",
        },
        {
          content: "DŽ entsteht aus Č vor stimmhaften Lauten: naruDŽba (von naručiti + ba), udŽbenik (von učiti + benik).",
          highlight: "Č → DŽ vor stimmhaftem B (Stimmhaftigkeitsangleichung)",
        },
        {
          content: "Đ erscheint in Wortstämmen: đak (Schüler), đavo (Teufel), đul (Rose), hrĐa (Rost), leĐa (Rücken).",
          highlight: "Đ = oft in Stamm-Wörtern slawischen Ursprungs",
        },
        {
          content: "Đ entsteht aus D vor j-Lauten (wie Ć aus T): mlad+ji→mlađi (jünger), vod+jen→vođen (geführt), glad+ju→glađu.",
          highlight: "D → Đ (Grammatikregel: wie T → Ć)",
        },
      ],
    },
  },

  {
    id: "dzd-quiz-1",
    type: "quiz",
    data: {
      question: "Das Wort 'udžbenik' bedeutet 'Schulbuch'. Aus welchem Wort entstand es?",
      options: [
        { id: "a", text: "udžba – der Stamm ist udžb-", correct: false },
        { id: "b", text: "učiti (lernen) + -benik → Č wird zu DŽ vor stimmhaftem B", correct: true },
        { id: "c", text: "Es hat immer DŽ – keine Ableitung", correct: false },
        { id: "d", text: "Von türkisch 'udžbenik'", correct: false },
      ],
      explanation: "udžbenik stammt von učiti (lernen) + Suffix -benik. Das Č in 'uČbenik' wird vor dem stimmhaften B zu DŽ (Stimmhaftigkeitsangleichung): uČ+benik → uDŽbenik. Das ist eine Rechtschreibregel!",
      difficulty: "hard",
    },
  },

  {
    id: "dzd-practice-1",
    type: "practice",
    data: {
      instruction: "DŽ oder Đ? Wähle den richtigen Buchstaben:",
      type: "select",
      items: [
        {
          id: "d1",
          prompt: "__ak = Schüler (Stamm-Wort, slawisch)",
          options: ["DŽ", "Đ"],
          correct: "Đ",
        },
        {
          id: "d2",
          prompt: "__amija = Moschee (arabischer Ursprung)",
          options: ["DŽ", "Đ"],
          correct: "DŽ",
        },
        {
          id: "d3",
          prompt: "u__benik = Schulbuch (von učiti, Č→? vor B)",
          options: ["DŽ (Č→DŽ vor B)", "Đ (T→Đ Regel)"],
          correct: "DŽ (Č→DŽ vor B)",
        },
        {
          id: "d4",
          prompt: "mlađi = jünger (von mlad + Komparativ-j)",
          options: ["DŽ", "Đ"],
          correct: "Đ",
        },
      ],
    },
  },

  {
    id: "dzd-mistake-1",
    type: "mistake",
    data: {
      title: "Fehler: 'đžamija' oder 'džamia' schreiben",
      wrongAnswer: "đžamija, džamia, džamlja",
      whyWrong: "'Đ' und 'DŽ' sind verschiedene Buchstaben – man schreibt nie 'đž'. Außerdem hat Bosnisch keine Kombination '-ia' am Ende – es ist '-ija'.",
      correctAnswer: "džamija",
      whyCorrect: "Das Wort džamija (Moschee) wird mit DŽ geschrieben und endet auf -ija. DŽ ist ein einziger Buchstabe (Digraph), nicht DŽ+Đ!",
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 4: DER LAUT H – Bosnisch schreibt, was andere weglassen
// Quelle: Pravopis Bosanskoga Jezika – Kapitel 6
// ═══════════════════════════════════════════════════

export const lesson4_glas_h: LearningBlock[] = [
  {
    id: "h-pred-1",
    type: "prediction",
    data: {
      question: "In manchen Sprachen wird das H in bestimmten Wörtern nicht geschrieben. Wie ist das im Bosnischen?",
      hint: "Die Überschrift verrät es: 'Bosnisch schreibt, was andere weglassen'...",
      options: [
        "Bosnisch lässt H oft weg – wie im Französischen",
        "Bosnisch schreibt H immer, auch wo andere es weglassen",
        "H wird nur am Wortanfang geschrieben",
        "H ist im Bosnischen stumm und optional",
      ],
      correctAnswer: "Bosnisch schreibt H immer, auch wo andere es weglassen",
      explanation: "Das H im Bosnischen ist ein echtes Merkmal der Sprache. Wörter wie 'lahak' (leicht), 'mehak' (weich), 'sevdah' (Sehnsucht) haben H – das unterscheidet Bosnisch von anderen Nachbarsprachen!",
    },
  },

  {
    id: "h-info-1",
    type: "info",
    data: {
      title: "H in Bosnisch – drei wichtige Kategorien",
      emoji: "🔊",
      content: "1. Etymologisches H (ursprünglich): Das H gehört zur Wortgeschichte:\n   → grah (Bohne), duh (Geist), historija (Geschichte)\n\n2. Sekundäres H (neu entwickelt): Bosnisch hat H hinzugewonnen:\n   → lahak (leicht), mehak (weich), sevdah (Sehnsucht)\n\n3. H in Grammatikformen: Besonders wichtig!\n   → Genitiv Plural: mladih, dobrih, ovih\n   → 1. Pers. Sg. Aorist: rekoh (ich sagte), dođoh (ich kam)\n   → Konditional: govorio bih (ich würde sagen)",
      highlight: "FEHLER ohne H: od mladi*... dođo*... govorio bi* – ALLE FALSCH ohne H!",
    },
  },

  {
    id: "h-reveal-1",
    type: "reveal",
    data: {
      title: "Das H-Geheimnis: Wörter, die andere Sprachen ohne H schreiben",
      steps: [
        {
          content: "lahak / lahko (leicht/leichtlich)\n→ Serbisch: lak, lako (kein H!)\n→ Bosnisch: immer MIT H",
          highlight: "Bosnisch: lahak ✓ | ohne H: falsch",
        },
        {
          content: "mehak / mehkoća (weich / Weichheit)\n→ Serbisch: mek, mekoća\n→ Bosnisch: immer MIT H",
          highlight: "Bosnisch: mehak ✓ | ohne H: falsch",
        },
        {
          content: "hrđa / hrđav (Rost / rostig)\n→ Bosnisch: hrđa ✓ (mit H)\n→ Ohne H wäre es ein anderes Wort",
          highlight: "Bosnisch: hrđa ✓",
        },
        {
          content: "sevdah (Sehnsucht, Melancholie, ein bosnisches Kulturgefühl)\n→ Arabisch/Türkisch: sevda\n→ Bosnisch: sevdah (mit H am Ende!)",
          highlight: "sevdah – das H gehört zur bosnischen Seele des Wortes",
        },
      ],
    },
  },

  {
    id: "h-info-2",
    type: "info",
    data: {
      title: "H in Grammatikformen – unverzichtbar!",
      emoji: "📝",
      content: "Diese Formen MÜSSEN H haben:\n\n• Genitiv Plural (wessen/von wem): mojih, tvojih, svojih, ovih, onih, dobrih, lijepih, mladih, svih\n\n• 1. Pers. Singular Aorist: rekoh, dođoh, napisah, vidjeh\n\n• 1. Pers. Singular Imperfekt: govorah, mišljah, vodah\n\n• Konditional: govorio bih, htio bih, pisao bih",
      highlight: "Ohne H in diesen Formen = Grammatikfehler! od mladi* ✗ → od mladih ✓",
    },
  },

  {
    id: "h-quiz-1",
    type: "quiz",
    data: {
      question: "Welche Form ist im Bosnischen KORREKT?",
      options: [
        { id: "a", text: "Od mojih prijatelja (von meinen Freunden)", correct: true },
        { id: "b", text: "Od moji prijatelja", correct: false },
        { id: "c", text: "Od mojy prijatelja", correct: false },
        { id: "d", text: "Od moje prijatelja", correct: false },
      ],
      explanation: "'Od mojih' ist korrekt – der Genitiv Plural der Possessivpronomen endet IMMER auf -ih. Das H ist ein fester Bestandteil der Endung: mojih, tvojih, njegovih, naših, vaših, njihovih.",
      difficulty: "medium",
    },
  },

  {
    id: "h-practice-1",
    type: "practice",
    data: {
      instruction: "Mit oder ohne H? Wähle die bosnisch-korrekte Form:",
      type: "select",
      items: [
        {
          id: "h1",
          prompt: "la__ak = leicht (bosnisches Wort)",
          options: ["lahak (mit H)", "lak (ohne H)"],
          correct: "lahak (mit H)",
        },
        {
          id: "h2",
          prompt: "od svoji__ = von meinen (Genitiv Plural)",
          options: ["od svojih (mit H)", "od svoji (ohne H)"],
          correct: "od svojih (mit H)",
        },
        {
          id: "h3",
          prompt: "reko__ = ich sagte (Aorist, 1. Pers. Sg.)",
          options: ["rekoh (mit H)", "reko (ohne H)"],
          correct: "rekoh (mit H)",
        },
        {
          id: "h4",
          prompt: "govorio bi__ = ich würde sagen (Konditional)",
          options: ["govorio bih (mit H)", "govorio bi (ohne H)"],
          correct: "govorio bih (mit H)",
        },
      ],
    },
  },

  {
    id: "h-mistake-1",
    type: "mistake",
    data: {
      title: "Häufiger Fehler: H in Grammatikformen weglassen",
      wrongAnswer: "Od mladi učenika (von jungen Schülern) / Ja bi htio (Ich würde wollen)",
      whyWrong: "Ohne H sind diese Formen falsch! 'Od mladi*' hat keinen Genitiv-H. 'Ja bi*' fehlt das H des Konditionals. Unter Einfluss anderer Sprachen wird H oft weggelassen.",
      correctAnswer: "Od mladih učenika / Ja bih htio",
      whyCorrect: "Im Bosnischen gehört das H untrennbar zu diesen Grammatikformen. Es ist kein stummes H – man hört und schreibt es immer!",
    },
  },
];

// ═══════════════════════════════════════════════════
// LEKTION 5: IJE/JE – Die Ijekavica (bosnische Aussprache)
// Quelle: Pravopis Bosanskoga Jezika – Kapitel 18
// ═══════════════════════════════════════════════════

export const lesson5_ije_je: LearningBlock[] = [
  {
    id: "ije-pred-1",
    type: "prediction",
    data: {
      question: "Warum heißt es im Bosnischen 'lijepo' (schön), aber in Serbisch 'lepo'? Was ist der Unterschied?",
      hint: "Das Bosnische benutzt eine besondere Ausspracheform, die 'Ijekavica' genannt wird...",
      options: [
        "Es sind zwei verschiedene Wörter mit verschiedener Herkunft",
        "Das 'ije' im Bosnischen entspricht dem 'e' in anderen Formen – es ist die ijekavische Aussprache",
        "Bosnisch und Serbisch haben komplett verschiedene Grammatiken",
        "Nur historische Wörter haben 'ije'",
      ],
      correctAnswer: "Das 'ije' im Bosnischen entspricht dem 'e' in anderen Formen – es ist die ijekavische Aussprache",
      explanation: "Bosnisch (und Kroatisch) verwenden die Ijekavica: aus dem alten slawischen Vokal 'jat' (ě) wurde 'ije' (in langen Silben) oder 'je' (in kurzen Silben). Serbisch verwendet oft die Ekavica: dasselbe 'jat' wurde zu 'e'. lijepo = lepo, bijelo = belo, dijete = dete.",
    },
  },

  {
    id: "ije-info-1",
    type: "info",
    data: {
      title: "Was ist Ijekavica?",
      emoji: "🗣️",
      content: "Im alten Slawischen gab es einen besonderen Vokal (geschrieben als 'ě', gesprochen wie ein langer e-Laut).\n\nIm Laufe der Jahrhunderte entwickelte sich dieser Laut unterschiedlich:\n\n• Ijekavica (Bosnisch/Kroatisch): ě → IJE (lang) oder JE (kurz)\n• Ekavica (Serbisch): ě → E\n• Ikavica (manche Dialekte): ě → I\n\nBeispiele:\n• lijepo / lepo / lipo = schön\n• bijelo / belo / bilo = weiß\n• dijete / dete / dite = Kind",
      highlight: "Bosnisch = Ijekavica. Das IJE/JE ist kein Fehler – es ist die korrekte bosnische Form!",
    },
  },

  {
    id: "ije-reveal-1",
    type: "reveal",
    data: {
      title: "Die Regel: Wann IJE, wann JE?",
      steps: [
        {
          content: "LANGE Silbe → IJE (3 Buchstaben, 2 Silben: i-je)\nBeispiele: lijepo (schön), bijelo (weiß), dijete (Kind), mlijeko (Milch), vrijeme (Zeit/Wetter)",
          highlight: "Lange Silbe = IJE (zweisilbig: li-je-po)",
        },
        {
          content: "KURZE Silbe → JE (2 Buchstaben, 1 Silbe)\nBeispiele: vjera (Glaube), pjesma (Lied), djeca (Kinder), njedra (Busen), mjesto (Ort)",
          highlight: "Kurze Silbe = JE (einsilbig: vje-ra)",
        },
        {
          content: "Manche Wörter wechseln bei Ableitungen zwischen IJE und JE:\nlijepo (schön, Adj.) → ljepota (Schönheit)\nbijelo (weiß, Adj.) → bjelina (Weißheit)\nVor Suffixen wird IJE oft zu Lj oder JE",
          highlight: "Ableitungen: IJE → LJ oder JE vor Suffixen",
        },
        {
          content: "Merke: Diese Wörter haben IMMER IJE im Bosnischen:\nlijepo, dijete, mlijeko, bijelo, vrijeme, voljeti, razumjeti, vidjeti, sjediti",
          highlight: "Lernt man am besten auswendig – sie sind die häufigsten Wörter!",
        },
      ],
    },
  },

  {
    id: "ije-info-2",
    type: "info",
    data: {
      title: "Häufige IJE-Wörter – Vokabelliste",
      emoji: "📚",
      content: "Diese Wörter sind bosnisch-ijekavisch korrekt:\n\n• lijepo / lijep = schön\n• bijelo / bijel = weiß\n• dijete = Kind (djeca = Kinder)\n• mlijeko = Milch\n• vrijeme = Zeit, Wetter\n• voljeti = lieben\n• vidjeti = sehen\n• razumjeti = verstehen\n• sjediti = sitzen\n• bježati = fliehen\n• cvjet = Blume (cvijet = Blüte)\n• mjesto = Ort, Platz",
      highlight: "Tipp: In Bosnien sagt man immer IJE/JE – 'dijete', nicht 'dete'!",
    },
  },

  {
    id: "ije-quiz-1",
    type: "quiz",
    data: {
      question: "Welche Form ist im Bosnischen (Ijekavica) KORREKT?",
      options: [
        { id: "a", text: "Dete pije mleko (Kind trinkt Milch)", correct: false },
        { id: "b", text: "Dijete pije mlijeko (Kind trinkt Milch)", correct: true },
        { id: "c", text: "Dite pije mliko (Kind trinkt Milch)", correct: false },
        { id: "d", text: "Djete pije mlujeko (Kind trinkt Milch)", correct: false },
      ],
      explanation: "Bosnisch (Ijekavica): dijete (Kind) und mlijeko (Milch) mit IJE. 'Dete' und 'mleko' sind die serbische/ekavische Form – im Bosnischen sind sie falsch!",
      difficulty: "easy",
    },
  },

  {
    id: "ije-practice-1",
    type: "practice",
    data: {
      instruction: "Wähle die bosnisch-korrekte (ijekavische) Form:",
      type: "select",
      items: [
        {
          id: "ije1",
          prompt: "schön (Adjektiv, lange Silbe)",
          options: ["lepo (Ekavica)", "lijepo (Ijekavica, korrekt)", "lipo (Ikavica)"],
          correct: "lijepo (Ijekavica, korrekt)",
        },
        {
          id: "ije2",
          prompt: "Ort, Platz (kurze Silbe)",
          options: ["mesto (Ekavica)", "misto (Ikavica)", "mjesto (Ijekavica, korrekt)"],
          correct: "mjesto (Ijekavica, korrekt)",
        },
        {
          id: "ije3",
          prompt: "lieben (Verb)",
          options: ["voleti (Ekavica)", "voljeti (Ijekavica, korrekt)", "voliti (Ikavica)"],
          correct: "voljeti (Ijekavica, korrekt)",
        },
        {
          id: "ije4",
          prompt: "sehen (Verb)",
          options: ["videti (Ekavica)", "vidjeti (Ijekavica, korrekt)", "viditi (Ikavica)"],
          correct: "vidjeti (Ijekavica, korrekt)",
        },
      ],
    },
  },

  {
    id: "ije-scenario-1",
    type: "scenario",
    data: {
      title: "Realsituation: Auf dem bosnischen Markt",
      scenario: "Arjen kauft auf dem Markt in Sarajevo Milch ein. Der Verkäufer sagt ihm: 'Ovo mlijeko je svježe!' Arjen kennt das Wort 'mlijeko' noch nicht.",
      question: "Was bedeutet 'mlijeko je svježe'? (Tipp: svježe = frisch auf Ijekavica)",
      answer: "Die Milch ist frisch",
      explanation: "mlijeko = Milch (ijekavisch, mit IJE), svježe = frisch (ijekavisch, mit JE). 'Ovo mlijeko je svježe' = 'Diese Milch ist frisch.' Beide Wörter zeigen die typische bosnische IJE/JE-Aussprache!",
    },
  },

  {
    id: "ije-mistake-1",
    type: "mistake",
    data: {
      title: "Fehler: Ekavische Formen im Bosnischen benutzen",
      wrongAnswer: "Dete je lepo. (Kind ist schön.) – Ekavica im Bosnischunterricht",
      whyWrong: "Das ist Serbisch (Ekavica)! In Bosnien heißt es Ijekavica. 'Dete' und 'lepo' klingen falsch oder fremd in Bosnien. Bosnische Schüler lernen IJE-Formen.",
      correctAnswer: "Dijete je lijepo. (Kind ist schön.) – Ijekavica",
      whyCorrect: "Im Bosnischen verwenden wir die ijekavische Aussprache: dijete (nicht 'dete'), lijepo (nicht 'lepo'). Das ist Standard in Bosnien und Herzegowina.",
    },
  },
];

// ═══════════════════════════════════════════════════
// ALLE LEKTIONEN EXPORTIEREN
// ═══════════════════════════════════════════════════

export const bosnischLessons = {
  pismo: {
    id: "pismo",
    title: "Das bosnische Alphabet",
    description: "30 Buchstaben, 6 Sonderzeichen – der Einstieg",
    icon: "🔤",
    estimatedMinutes: 8,
    xpReward: 50,
    blocks: lesson1_pismo,
  },
  c_c: {
    id: "c_c",
    title: "Č und Ć",
    description: "Hart vs. weich – der wichtigste Unterschied",
    icon: "👅",
    estimatedMinutes: 10,
    xpReward: 60,
    blocks: lesson2_c_c,
  },
  dz_d: {
    id: "dz_d",
    title: "DŽ und Đ",
    description: "Das stimmhafte Paar richtig schreiben",
    icon: "🎙️",
    estimatedMinutes: 9,
    xpReward: 60,
    blocks: lesson3_dz_d,
  },
  glas_h: {
    id: "glas_h",
    title: "Der Laut H",
    description: "Wann H schreiben – grammatisch unverzichtbar",
    icon: "💨",
    estimatedMinutes: 8,
    xpReward: 55,
    blocks: lesson4_glas_h,
  },
  ije_je: {
    id: "ije_je",
    title: "IJE und JE – Ijekavica",
    description: "Die bosnische Aussprache verstehen",
    icon: "🗣️",
    estimatedMinutes: 10,
    xpReward: 65,
    blocks: lesson5_ije_je,
  },
};

export const bosnischLessonOrder = [
  "pismo",
  "c_c",
  "dz_d",
  "glas_h",
  "ije_je",
] as const;
