import { LearningBlock } from "@/types";

// ═══════════════════════════════════════════════════
// MODUL: GRAMATIKA – Bosnische Grammatik A1
// Sprach-App-Stil: immersiv, kontextbasiert, progressiv
// 6 Lektionen | 405 XP gesamt
// ═══════════════════════════════════════════════════

// ───────────────────────────────────────────────────
// LEKTION 1: IMENICE I ROD – Jedes Wort hat ein Geschlecht
// ───────────────────────────────────────────────────

export const lesson1_rod: LearningBlock[] = [
  {
    id: "rod-intro-1",
    type: "info",
    data: {
      title: "Lektion 1: Rod – Wörter haben ein Geschlecht",
      emoji: "🏷️",
      content: "Im Deutschen sagst du: DER Bruder, DIE Schwester, DAS Kind.\n\nBosnisch macht dasselbe – aber du erkennst das Geschlecht direkt am Wortende!\n\n• Muški rod (männlich) → endet auf Konsonant: brat, grad, čaj\n• Ženski rod (weiblich) → endet auf -A: sestra, kuća, škola\n• Srednji rod (sächlich) → endet auf -O oder -E: dijete, more, selo\n\nDas lernst du heute:\n✅ Die 3 Geschlechter und wie man sie sofort erkennt\n✅ 15 Alltagswörter aus jeder Gruppe\n✅ Warum der Rod für alles andere wichtig ist",
      highlight: "Merksatz: Konsonant = muški | -A = ženski | -O/-E = srednji",
    },
  },
  {
    id: "rod-pred-1",
    type: "prediction",
    data: {
      question: "Das Wort 'brat' (Bruder) endet auf 't'. Welchen Rod hat es?",
      hint: "Schau nur auf das letzte Zeichen. Konsonant, -A, oder -O/-E?",
      options: [
        "Ženski rod – wie 'sestra' (Schwester)",
        "Muški rod – Konsonant am Ende",
        "Srednji rod – wie 'dijete' (Kind)",
        "Bosnisch hat kein Geschlecht",
      ],
      correctAnswer: "Muški rod – Konsonant am Ende",
      explanation: "'Brat' endet auf -t → Konsonant → muški rod! Weitere muški-Wörter: grad (Stadt), čaj (Tee), džep (Tasche), đak (Schüler), stol (Tisch), auto. Alle enden auf Konsonant.",
    },
  },
  {
    id: "rod-info-1",
    type: "info",
    data: {
      title: "Die 3 Geschlechter – Wörter aus dem Alltag",
      emoji: "📋",
      content: "MUŠKI ROD (männlich) – endet auf Konsonant:\n→ brat (Bruder), otac (Vater), grad (Stadt), čaj (Tee), džep (Tasche), đak (Schüler), pas (Hund), auto, telefon\n\nŽENSKI ROD (weiblich) – endet auf -A:\n→ sestra (Schwester), majka (Mutter), kuća (Haus), škola (Schule), knjiga (Buch), ruka (Hand), mačka (Katze), voda (Wasser), hrana (Essen)\n\nSREDNJI ROD (sächlich) – endet auf -O oder -E:\n→ dijete (Kind), more (Meer), selo (Dorf), polje (Feld), drvo (Baum), nebo (Himmel), oko (Auge), ime (Name)",
      highlight: "Ausnahme: tata (Vater), deda (Opa) enden auf -A, sind aber muški!",
    },
  },
  {
    id: "rod-reveal-1",
    type: "reveal",
    data: {
      title: "Warum ist der Rod so wichtig?",
      steps: [
        {
          content: "Adjektive müssen mit dem Substantiv übereinstimmen:\n→ lijep brat (schöner Bruder) – muški: lijep\n→ lijepa sestra (schöne Schwester) – ženski: lijepa\n→ lijepo dijete (schönes Kind) – srednji: lijepo",
          highlight: "lijep / lijepa / lijepo – 1 Adjektiv, 3 Formen je nach Rod!",
        },
        {
          content: "Possessivpronomen richten sich ebenfalls nach dem Rod:\n→ moj brat (mein Bruder) – muški\n→ moja sestra (meine Schwester) – ženski\n→ moje dijete (mein Kind) – srednji",
          highlight: "moj / moja / moje – nach dem Rod des Substantivs!",
        },
        {
          content: "Auch das Partizip des Verbs 'biti' ändert sich:\n→ Brat je umoran. (Der Bruder ist müde.) – muški: umoran\n→ Sestra je umorna. (Die Schwester ist müde.) – ženski: umorna\n→ Dijete je umorno. (Das Kind ist müde.) – srednji: umorno",
          highlight: "umoran / umorna / umorno – Adjektiv passt sich immer an den Rod an!",
        },
      ],
    },
  },
  {
    id: "rod-quiz-1",
    type: "quiz",
    data: {
      question: "Welchen Rod hat das Wort 'knjiga' (Buch)?",
      options: [
        { id: "a", text: "Muški rod – es endet auf einen Konsonanten", correct: false },
        { id: "b", text: "Ženski rod – es endet auf -A", correct: true },
        { id: "c", text: "Srednji rod – es endet auf -O", correct: false },
        { id: "d", text: "Knjiga hat keinen Rod", correct: false },
      ],
      explanation: "'Knjiga' endet auf -A → Ženski rod! Weitere ženski-Wörter: škola, sestra, majka, ruka, mačka, kuća, voda, hrana. Alle enden auf -A.",
      difficulty: "easy",
    },
  },
  {
    id: "rod-practice-1",
    type: "practice",
    data: {
      instruction: "Welchen Rod haben diese bosnischen Wörter?",
      type: "select",
      items: [
        {
          id: "r1",
          prompt: "grad = Stadt (endet auf -d)",
          options: ["Muški rod", "Ženski rod", "Srednji rod"],
          correct: "Muški rod",
        },
        {
          id: "r2",
          prompt: "more = Meer (endet auf -e)",
          options: ["Muški rod", "Ženski rod", "Srednji rod"],
          correct: "Srednji rod",
        },
        {
          id: "r3",
          prompt: "majka = Mutter (endet auf -a)",
          options: ["Muški rod", "Ženski rod", "Srednji rod"],
          correct: "Ženski rod",
        },
        {
          id: "r4",
          prompt: "selo = Dorf (endet auf -o)",
          options: ["Muški rod", "Ženski rod", "Srednji rod"],
          correct: "Srednji rod",
        },
      ],
    },
  },
  {
    id: "rod-mistake-1",
    type: "mistake",
    data: {
      title: "Häufiger Fehler: Rod ignorieren bei Adjektiven und Pronomen",
      wrongAnswer: "moj sestra, lijep dijete",
      whyWrong: "'Moj' ist muški – aber 'sestra' ist ženski! 'Lijep' ist muški – aber 'dijete' ist srednji. Das passt grammatikalisch nicht.",
      correctAnswer: "moja sestra, lijepo dijete",
      whyCorrect: "Adjektiv und Pronomen müssen denselben Rod wie das Substantiv haben:\nmoja sestra (ženski → -a), lijepo dijete (srednji → -o).",
    },
  },
  {
    id: "rod-scenario-1",
    type: "scenario",
    data: {
      title: "Sarajevo-Postkarte: Was sieht Arjen?",
      scenario: "Arjen schreibt eine Postkarte aus Sarajevo: 'Ich sehe ein schönes Meer, eine schöne Stadt und ein schönes Kind.' Er überlegt: Wie lautet 'schön' für more, grad und dijete?",
      question: "Fülle ein: '... lijepo ___, lijep ___, lijepo ___.' (more, grad, dijete)",
      answer: "lijepo more, lijep grad, lijepo dijete",
      explanation: "more = srednji → lijepo more\ngrad = muški → lijep grad\ndijete = srednji → lijepo dijete\n\nRegeln: muški = lijep | ženski = lijepa | srednji = lijepo",
    },
  },
];

// ───────────────────────────────────────────────────
// LEKTION 2: MNOŽINA – Plural
// ───────────────────────────────────────────────────

export const lesson2_mnozina: LearningBlock[] = [
  {
    id: "mn-intro-1",
    type: "info",
    data: {
      title: "Lektion 2: Množina – Wie sagt man 'mehrere' auf Bosnisch?",
      emoji: "🔢",
      content: "Ein Buch, zwei Bücher – wie geht das auf Bosnisch?\n\nBosnisch hat klare Pluralendungen je nach Rod:\n\n• Ženski rod (-A → -E): sestra → sestre, knjiga → knjige, kuća → kuće\n• Srednji rod (-O/-E → -A): selo → sela, more → mora, polje → polja\n• Muški rod: brod → brodovi, čaj → čajevi, đak → đaci\n\nUnd zwei berühmte Sonderfälle:\n• dijete (Kind) → djeca\n• brat (Bruder) → braća\n\nDas lernst du heute:\n✅ Pluralendungen für alle 3 Geschlechter\n✅ Die häufigsten unregelmäßigen Plurale\n✅ Zahlen + Plural auf Bosnisch",
      highlight: "Ženski -A → -E ist die einfachste Regel: knjiga → knjige, sestra → sestre!",
    },
  },
  {
    id: "mn-pred-1",
    type: "prediction",
    data: {
      question: "Wie lautet der Plural von 'knjiga' (Buch) auf Bosnisch?",
      hint: "Knjiga endet auf -A (ženski rod). Was passiert mit dem -A im Plural?",
      options: ["knjige", "knjigen", "knjigama", "knjigi"],
      correctAnswer: "knjige",
      explanation: "Ženski rod (auf -A): Das -A wird im Plural zu -E!\nsestra → sestre, knjiga → knjige, kuća → kuće, škola → škole, majka → majke.\nDiese eine Regel gilt für fast alle ženski-Wörter!",
    },
  },
  {
    id: "mn-info-1",
    type: "info",
    data: {
      title: "Pluralendungen – Vollständige Übersicht",
      emoji: "📊",
      content: "MUŠKI ROD (Plural):\n→ Einsilbige Wörter: + -ovi/-evi: grad→gradovi, brod→brodovi, čaj→čajevi\n→ Mehrsilbige: + -i: đak→đaci, učenik→učenici\n\nŽENSKI ROD (Plural):\n→ -A → -E: sestra→sestre, knjiga→knjige, kuća→kuće\n→ Ohne Endung + -i: stvar→stvari, noć→noći\n\nSREDNJI ROD (Plural):\n→ -O → -A: selo→sela, nebo→neba\n→ -E → -A: more→mora, polje→polja\n\nBESONDERE PLURALE (auswendig lernen!):\n→ dijete → djeca (Kind → Kinder)\n→ brat → braća (Bruder → Brüder)\n→ čovjek → ljudi (Mensch → Menschen)",
      highlight: "Ženski -A→-E, Srednji -o/-e→-a: die zwei einfachsten Regeln!",
    },
  },
  {
    id: "mn-reveal-1",
    type: "reveal",
    data: {
      title: "Zahlen und Plural – Die bosnische Besonderheit",
      steps: [
        {
          content: "Nach 1 (jedan/jedna/jedno): Nominativ Singular\n→ jedan brat, jedna sestra, jedno dijete",
          highlight: "1 = Nominativ Singular",
        },
        {
          content: "Nach 2, 3, 4 (dva/tri/četiri): Genitiv Singular\n→ dva brata, tri sestre, četiri djeteta\n(klingt wie deutsch: 'zwei Bruders' – Genitivform!)",
          highlight: "2-4 = Genitiv Singular",
        },
        {
          content: "Nach 5+ (pet, šest, deset...): Genitiv Plural\n→ pet braće, šest knjiga, deset gradova",
          highlight: "5+ = Genitiv Plural",
        },
        {
          content: "Das gilt auch für größere Zahlen:\n21 → dvadeset jedan brat (wie 1)\n22 → dvadeset dva brata (wie 2)\n25 → dvadeset pet braće (wie 5+)",
          highlight: "Die letzte Ziffer entscheidet! 21→wie 1, 22→wie 2, 25→wie 5+",
        },
      ],
    },
  },
  {
    id: "mn-quiz-1",
    type: "quiz",
    data: {
      question: "Wie heißt der Plural von 'grad' (Stadt)?",
      options: [
        { id: "a", text: "gradi", correct: false },
        { id: "b", text: "grade", correct: false },
        { id: "c", text: "gradovi", correct: true },
        { id: "d", text: "gradeva", correct: false },
      ],
      explanation: "'Grad' ist muški rod (einsilbig). Einsilbige muški-Wörter bekommen oft -ovi im Plural: grad→gradovi, brod→brodovi. Merke: je kürzer das Wort, desto wahrscheinlicher -ovi/-evi!",
      difficulty: "medium",
    },
  },
  {
    id: "mn-practice-1",
    type: "practice",
    data: {
      instruction: "Wähle den richtigen Plural:",
      type: "select",
      items: [
        {
          id: "m1",
          prompt: "sestra (Schwester) → Plural?",
          options: ["sestri", "sestre", "sestroe", "sestren"],
          correct: "sestre",
        },
        {
          id: "m2",
          prompt: "selo (Dorf) → Plural?",
          options: ["selos", "selovi", "sela", "sele"],
          correct: "sela",
        },
        {
          id: "m3",
          prompt: "knjiga (Buch) → Plural?",
          options: ["knjige", "knjigi", "knjigom", "knjigama"],
          correct: "knjige",
        },
        {
          id: "m4",
          prompt: "brod (Schiff) → Plural?",
          options: ["brodi", "brode", "brodovi", "brodima"],
          correct: "brodovi",
        },
      ],
    },
  },
  {
    id: "mn-scenario-1",
    type: "scenario",
    data: {
      title: "Auf dem Sarajevo-Markt: Einkaufen auf Bosnisch",
      scenario: "Arjen ist auf dem Čaršija-Markt in Sarajevo. Er sieht viele Bücher, viele Häuser auf einem Stadtbild und viele Kinder, die spielen. Er will sagen: 'Ich sehe viele Bücher, Häuser und Kinder.'",
      question: "Wie lauten die Pluralformen von: knjiga, kuća, dijete?",
      answer: "knjige, kuće, djeca",
      explanation: "knjiga → knjige (ženski, -A→-E)\nkuća → kuće (ženski, -A→-E)\ndijete → djeca (Sonderform! Auswendig merken!)\n\n'Vidim mnogo knjiga, kuća i djece.' = Ich sehe viele Bücher, Häuser und Kinder.",
    },
  },
  {
    id: "mn-mistake-1",
    type: "mistake",
    data: {
      title: "Fehler: Einsilbige muški-Wörter mit -i statt -ovi formen",
      wrongAnswer: "gradi, brodi, čaji",
      whyWrong: "Einsilbige muški-Wörter bekommen meist -ovi (oder -evi nach Zischlaut), nicht einfach -i! Das ist ein sehr häufiger Fehler.",
      correctAnswer: "gradovi, brodovi, čajevi",
      whyCorrect: "Einsilbig + muški → -ovi/-evi:\ngrad→gradovi, brod→brodovi, čaj→čajevi, mač→mačevi.\nMerke: Je kürzer das Wort, desto wahrscheinlicher ist -ovi!",
    },
  },
];

// ───────────────────────────────────────────────────
// LEKTION 3: GLAGOL BITI – Das Verb sein
// ───────────────────────────────────────────────────

export const lesson3_biti: LearningBlock[] = [
  {
    id: "biti-intro-1",
    type: "info",
    data: {
      title: "Lektion 3: Biti – das wichtigste Verb auf Bosnisch",
      emoji: "⭐",
      content: "'Ja sam Arjen.' – Ich bin Arjen.\n\nDas sind die ersten Wörter, die jeder Bosnisch-Lernende braucht. Das Verb 'biti' (sein) ist das häufigste Verb – und du brauchst es für alles:\n\n• Sich vorstellen: Ja sam Arjen.\n• Beschreiben: Ona je lijepa. (Sie ist schön.)\n• Fragen: Gdje si? (Wo bist du?)\n• Verneinen: Nisam umoran. (Ich bin nicht müde.)\n\nDas lernst du heute:\n✅ Alle 6 Formen von 'biti' im Präsens\n✅ Die Verneinungsform (nisam, nisi, nije...)\n✅ 'Biti' in echten Alltagssätzen anwenden",
      highlight: "ja sam | ti si | on/ona je | mi smo | vi ste | oni su – auswendig lernen!",
    },
  },
  {
    id: "biti-pred-1",
    type: "prediction",
    data: {
      question: "Wie sagt man 'Ich bin' auf Bosnisch?",
      hint: "Auf Bosnisch ist es kurz und einfach – ein Wort, das mit 's' beginnt...",
      options: ["Ja biti", "Ja sam", "Ja je", "Ja smo"],
      correctAnswer: "Ja sam",
      explanation: "'Ja sam' = Ich bin! 'Ja' = ich, 'sam' = bin. Im Bosnischen kann man das Pronomen auch weglassen: 'Sam Arjen' klingt umgangssprachlich; 'Ja sam Arjen' ist die vollständige Form.",
    },
  },
  {
    id: "biti-reveal-1",
    type: "reveal",
    data: {
      title: "Biti – alle 6 Formen",
      steps: [
        {
          content: "1. Person Singular: ja sam (ich bin)\n→ Ja sam đak. = Ich bin Schüler.\n→ Ja sam iz Bosne. = Ich bin aus Bosnien.",
          highlight: "ja sam",
        },
        {
          content: "2. Person Singular: ti si (du bist)\n→ Ti si moj brat. = Du bist mein Bruder.\n→ Gdje si? = Wo bist du? (sehr häufig!)",
          highlight: "ti si",
        },
        {
          content: "3. Person Singular: on/ona/ono je (er/sie/es ist)\n→ Ona je lijepa. = Sie ist schön.\n→ On je đak. = Er ist Schüler.",
          highlight: "on je / ona je / ono je",
        },
        {
          content: "1. Person Plural: mi smo (wir sind)\n→ Mi smo iz Sarajeva. = Wir sind aus Sarajevo.\n→ Mi smo prijatelji. = Wir sind Freunde.",
          highlight: "mi smo",
        },
        {
          content: "2. Person Plural / Höflichkeit: vi ste (ihr seid / Sie sind)\n→ Vi ste moji prijatelji. = Ihr seid meine Freunde.\n→ Vi ste nastavnik. = Sie sind Lehrer. (Höflichkeit)",
          highlight: "vi ste",
        },
        {
          content: "3. Person Plural: oni/one/ona su (sie sind)\n→ Oni su u školi. = Sie sind in der Schule.\n→ One su sestre. = Sie (weiblich) sind Schwestern.",
          highlight: "oni su / one su",
        },
      ],
    },
  },
  {
    id: "biti-info-1",
    type: "info",
    data: {
      title: "Verneinung: nisam, nisi, nije, nismo, niste, nisu",
      emoji: "❌",
      content: "Verneinung von 'biti' = ni- vor die Form setzen:\n\nja sam → nisam (ich bin nicht)\nti si → nisi (du bist nicht)\non/ona je → nije (er/sie ist nicht)\nmi smo → nismo (wir sind nicht)\nvi ste → niste (ihr seid nicht)\noni su → nisu (sie sind nicht)\n\nBeispiele aus dem Alltag:\n• Nisam umoran. = Ich bin nicht müde.\n• Nije đak. = Er/Sie ist kein Schüler.\n• Nismo iz Berlina. = Wir sind nicht aus Berlin.\n• Nije lijepo. = Es ist nicht schön.",
      highlight: "ni + Form: sam→nisam, si→nisi, je→nije, smo→nismo, ste→niste, su→nisu",
    },
  },
  {
    id: "biti-quiz-1",
    type: "quiz",
    data: {
      question: "Übersetze: 'Sie (Sg.) ist nicht müde.' (umoran/umorna = müde)",
      options: [
        { id: "a", text: "Ona je umorna.", correct: false },
        { id: "b", text: "Ona nije umorna.", correct: true },
        { id: "c", text: "Ona nisi umorna.", correct: false },
        { id: "d", text: "Ona nije umoran.", correct: false },
      ],
      explanation: "'Ona nije umorna.' = Sie ist nicht müde.\n• ona = sie → nije (Verneinung der 3. Sg.)\n• umorna = müde (ženski-Form, weil ona = weiblich)\n'Umoran' wäre muški: On je umoran. (Er ist müde.)",
      difficulty: "medium",
    },
  },
  {
    id: "biti-practice-1",
    type: "practice",
    data: {
      instruction: "Wähle die richtige Form von 'biti':",
      type: "select",
      items: [
        {
          id: "b1",
          prompt: "Ja ___ iz Bosne. (Ich bin aus Bosnien.)",
          options: ["je", "sam", "si", "smo"],
          correct: "sam",
        },
        {
          id: "b2",
          prompt: "Mi ___ prijatelji. (Wir sind Freunde.)",
          options: ["su", "ste", "smo", "sam"],
          correct: "smo",
        },
        {
          id: "b3",
          prompt: "Arjen ___ đak. (Arjen ist Schüler.)",
          options: ["sam", "si", "smo", "je"],
          correct: "je",
        },
        {
          id: "b4",
          prompt: "Ona ___ iz Sarajeva. (Sie ist NICHT aus Sarajevo.) [Verneinung!]",
          options: ["nije", "nisi", "nisam", "nisu"],
          correct: "nije",
        },
      ],
    },
  },
  {
    id: "biti-scenario-1",
    type: "scenario",
    data: {
      title: "Arjens erster Tag in Bosnien: Sich vorstellen",
      scenario: "Arjen trifft zum ersten Mal seine bosnische Oma (baka). Sie fragt: 'Ko si ti?' (Wer bist du?). Arjen möchte sagen: 'Ich bin Arjen. Ich bin nicht aus Bosnien – ich komme aus Deutschland.'",
      question: "Übersetze: 'Ja sam Arjen. ___ iz Bosne – ja sam iz Njemačke.'",
      answer: "Nisam",
      explanation: "'Nisam iz Bosne.' = Ich bin nicht aus Bosnien.\n• nisam = ich bin nicht (Verneinung von 'ja sam')\n\nVollständig: 'Ja sam Arjen. Nisam iz Bosne – ja sam iz Njemačke.'\n(Oma wäre sehr stolz, dass er das sagen kann! 😊)",
    },
  },
  {
    id: "biti-mistake-1",
    type: "mistake",
    data: {
      title: "Fehler: Alter mit 'biti' ausdrücken",
      wrongAnswer: "Ja sam 12 godina. (Ich bin 12 Jahre.)",
      whyWrong: "Im Deutschen sagt man 'Ich BIN 12.' – aber Bosnisch benutzt 'imati' (HABEN) für das Alter, nicht 'biti' (sein)! 'Ja sam 12 godina' klingt falsch.",
      correctAnswer: "Imam 12 godina. (Ich habe 12 Jahre = Ich bin 12.)",
      whyCorrect: "Bosnisch: Alter = imati (haben)!\nImam 12 godina. = Ich bin 12 Jahre alt.\nImam 15 godina. = Ich bin 15 Jahre alt.",
    },
  },
];

// ───────────────────────────────────────────────────
// LEKTION 4: GLAGOL IMATI I PREZENT – Haben und Gegenwart
// ───────────────────────────────────────────────────

export const lesson4_imati: LearningBlock[] = [
  {
    id: "imati-intro-1",
    type: "info",
    data: {
      title: "Lektion 4: Imati & Prezent – Haben und regelmäßige Verben",
      emoji: "🎯",
      content: "'Imam mačku.' – Ich habe eine Katze.\n\nNach 'biti' ist 'imati' (haben) das zweitwichtigste Verb. Und dann kommen die regulären Verben:\n• govoriti (sprechen)\n• raditi (arbeiten/machen)\n• pisati (schreiben)\n• čitati (lesen)\n• piti (trinken)\n• jesti (essen)\n\nDie gute Nachricht: Viele bosnische Verben folgen demselben Muster!\n\nDas lernst du heute:\n✅ Imati – alle 6 Formen\n✅ Das Muster für -iti und -ati Verben\n✅ Verneinung: nemam, ne govorim...\n✅ Erste vollständige bosnische Sätze im Präsens",
      highlight: "imam | imaš | ima | imamo | imate | imaju – auswendig lernen!",
    },
  },
  {
    id: "imati-pred-1",
    type: "prediction",
    data: {
      question: "Arjen sagt: 'Imam mačku.' Was bedeutet das?",
      hint: "imati = haben. Mačka = Katze. Die Form 'imam' steht für welche Person?",
      options: [
        "Wir haben eine Katze.",
        "Ich habe eine Katze.",
        "Er hat eine Katze.",
        "Du hast eine Katze.",
      ],
      correctAnswer: "Ich habe eine Katze.",
      explanation: "'Imam' = ich habe (1. Pers. Sg. von imati). 'Mačku' ist der Akkusativ von mačka. Also: 'Imam mačku' = Ich habe eine Katze. Die Form 'imam' = ja imam (ich habe).",
    },
  },
  {
    id: "imati-reveal-1",
    type: "reveal",
    data: {
      title: "Imati und das Muster der Verben",
      steps: [
        {
          content: "IMATI (haben):\nja imam (ich habe)\nti imaš (du hast)\non/ona ima (er/sie hat)\nmi imamo (wir haben)\nvi imate (ihr habt)\noni imaju (sie haben)",
          highlight: "imam / imaš / ima / imamo / imate / imaju",
        },
        {
          content: "ČITATI (lesen) – das -ati Muster:\nja čitam (ich lese)\nti čitaš (du liest)\non/ona čita (er/sie liest)\nmi čitamo (wir lesen)\nvi čitate (ihr lest)\noni čitaju (sie lesen)\n\nEndungen: -m, -š, Ø, -mo, -te, -ju",
          highlight: "Endungen -ati: -m / -š / Ø / -mo / -te / -ju",
        },
        {
          content: "GOVORITI (sprechen) – das -iti Muster:\nja govorim (ich spreche)\nti govoriš (du sprichst)\non/ona govori (er/sie spricht)\nmi govorimo (wir sprechen)\nvi govorite (ihr sprecht)\noni govore (sie sprechen)\n\nEndungen: -im, -iš, -i, -imo, -ite, -e",
          highlight: "Endungen -iti: -im / -iš / -i / -imo / -ite / -e (nicht -ju!)",
        },
        {
          content: "PISATI (schreiben) – Sonderfall Lautwechsel!\ns→š: pis- → piš-\nja pišem | ti pišeš | on piše | mi pišemo | vi pišete | oni pišu\n\nÄhnlich: kazati (sagen) → kažem, mazati (schmieren) → mažem",
          highlight: "pisati → pišem (s→š vor Endung). Lautwechsel merken!",
        },
      ],
    },
  },
  {
    id: "imati-info-1",
    type: "info",
    data: {
      title: "Verneinung: nemam und ne + Verb",
      emoji: "🚫",
      content: "Verneinung ist im Bosnischen sehr einfach:\n\nIMATI → NEMATI (Ausnahme mit eigenem Stamm!):\nnemam, nemaš, nema, nemamo, nemate, nemaju\n→ Nemam auto. = Ich habe kein Auto.\n→ Nema vremena. = Es gibt keine Zeit.\n\nAlle anderen Verben: 'ne' direkt vor die Form:\n→ ne govorim (ich spreche nicht)\n→ ne čitam (ich lese nicht)\n→ ne pišem (ich schreibe nicht)\n\nBeispiele:\n• Ne govorim njemački. = Ich spreche kein Deutsch.\n• Ne čita knjige. = Er/Sie liest keine Bücher.\n• Nemamo auto. = Wir haben kein Auto.",
      highlight: "imati → nemati (Sonderfall!) | alle anderen: ne + Verbform (zusammengeschrieben!)",
    },
  },
  {
    id: "imati-quiz-1",
    type: "quiz",
    data: {
      question: "Übersetze: 'Er spricht Bosnisch.' (govoriti = sprechen, bosanski = Bosnisch)",
      options: [
        { id: "a", text: "On govori bosanski.", correct: true },
        { id: "b", text: "On govorim bosanski.", correct: false },
        { id: "c", text: "On govore bosanski.", correct: false },
        { id: "d", text: "On govorite bosanski.", correct: false },
      ],
      explanation: "'On govori' = Er spricht. 3. Pers. Sg. von govoriti = govori (-i Endung).\nTabelle: govorim / govoriš / govori / govorimo / govorite / govore\n'On' → 3. Sg. → govori ✓",
      difficulty: "easy",
    },
  },
  {
    id: "imati-practice-1",
    type: "practice",
    data: {
      instruction: "Wähle die richtige Verbform:",
      type: "select",
      items: [
        {
          id: "i1",
          prompt: "Mi ___ bosanski. (Wir sprechen Bosnisch.) [govoriti]",
          options: ["govorim", "govorimo", "govore", "govoriš"],
          correct: "govorimo",
        },
        {
          id: "i2",
          prompt: "Ti ___ mačku. (Du hast eine Katze.) [imati]",
          options: ["imam", "ima", "imaš", "imamo"],
          correct: "imaš",
        },
        {
          id: "i3",
          prompt: "Oni ___ knjige. (Sie lesen Bücher.) [čitati]",
          options: ["čitam", "čitaju", "čitate", "čita"],
          correct: "čitaju",
        },
        {
          id: "i4",
          prompt: "Ja ___ pismo. (Ich schreibe einen Brief.) [pisati]",
          options: ["pišem", "pisam", "pišeš", "pišemo"],
          correct: "pišem",
        },
      ],
    },
  },
  {
    id: "imati-scenario-1",
    type: "scenario",
    data: {
      title: "Bosnischkurs: Arjen stellt sich seiner Klasse vor",
      scenario: "Arjen ist zum ersten Mal in einer bosnischen Schulklasse. Die Lehrerin sagt: 'Predstavi se!' (Stell dich vor!). Arjen möchte sagen: 'Ich heiße Arjen. Ich spreche ein bisschen Bosnisch. Ich habe eine Katze und einen Bruder.'",
      question: "Ergänze: 'Zovem se Arjen. Govorim malo bosanski. ___ mačku i brata.'",
      answer: "Imam",
      explanation: "'Imam mačku i brata.' = Ich habe eine Katze und einen Bruder.\n• Imam = ich habe (1. Sg. von imati)\n• mačku = Katze (Akkusativ von mačka)\n• brata = Bruder (Akkusativ von brat)\n\nGanzer Satz: 'Zovem se Arjen. Govorim malo bosanski. Imam mačku i brata.'",
    },
  },
  {
    id: "imati-mistake-1",
    type: "mistake",
    data: {
      title: "Fehler: 'ne imati' statt 'nemati'",
      wrongAnswer: "Ja ne imam auto. (mit Leerzeichen)",
      whyWrong: "Bei 'imati' gibt es eine spezielle Verneinungsform 'nemati'! Man schreibt nicht 'ne imam', sondern 'nemam' – alles zusammen, ohne Leerzeichen.",
      correctAnswer: "Ja nemam auto. = Ich habe kein Auto.",
      whyCorrect: "nemam, nemaš, nema, nemamo, nemate, nemaju – das ist die korrekte Verneinung von imati. Alle anderen Verben: ne + Form (getrennt): ne govorim, ne čitam.",
    },
  },
];

// ───────────────────────────────────────────────────
// LEKTION 5: PITANJA – Fragen stellen
// ───────────────────────────────────────────────────

export const lesson5_pitanja: LearningBlock[] = [
  {
    id: "pit-intro-1",
    type: "info",
    data: {
      title: "Lektion 5: Pitanja – Fragen stellen auf Bosnisch",
      emoji: "❓",
      content: "Eine Sprache wirklich sprechen heißt: fragen können!\n\nDie bosnischen Fragewörter:\n• Ko? = Wer?\n• Šta? = Was?\n• Gdje? = Wo?\n• Kada? = Wann?\n• Kako? = Wie?\n• Koliko? = Wie viel/viele?\n• Zašto? = Warum?\n• Koji/koja/koje? = Welcher/welche/welches?\n\nJa/Nein-Fragen:\n• Da li...? = Macht eine Aussage zur Frage\n• Govoriš li...? = Umgangssprachliche Variante (-li ans Verb)\n\nDas lernst du heute:\n✅ Alle 7 wichtigsten Fragewörter in Aktion\n✅ Ja/Nein-Fragen bilden\n✅ Echte Alltagsgespräche führen",
      highlight: "Ko? Šta? Gdje? Kada? Kako? Koliko? Zašto? – diese 7 öffnen jedes Gespräch!",
    },
  },
  {
    id: "pit-pred-1",
    type: "prediction",
    data: {
      question: "Jemand schreibt dir auf WhatsApp: 'Gdje si?' Was wird gefragt?",
      hint: "Gdje = eine bekannte Frage-Richtung auf Deutsch...",
      options: [
        "Wie geht es dir?",
        "Wo bist du?",
        "Wer bist du?",
        "Wann kommst du?",
      ],
      correctAnswer: "Wo bist du?",
      explanation: "'Gdje' = Wo! 'Gdje si?' = Wo bist du? Das ist eine der häufigsten WhatsApp-Fragen in Bosnien. Antwort: 'Idem!' (Ich komme!/Unterwegs!) oder 'Tu sam.' (Ich bin da.)",
    },
  },
  {
    id: "pit-reveal-1",
    type: "reveal",
    data: {
      title: "Die 7 Fragewörter in echten Sätzen",
      steps: [
        {
          content: "KO? = Wer?\nKo je on? = Wer ist er?\nKo govori bosanski? = Wer spricht Bosnisch?\nKo si ti? = Wer bist du?",
          highlight: "Ko? = Wer? (nur für Personen!)",
        },
        {
          content: "ŠTA? = Was?\nŠta je ovo? = Was ist das?\nŠta radiš? = Was machst du?\nŠta imaš? = Was hast du?",
          highlight: "Šta? = Was? (für Sachen und Aktivitäten)",
        },
        {
          content: "GDJE? = Wo?\nGdje si? = Wo bist du?\nGdje je škola? = Wo ist die Schule?\nOdakle si? = Woher bist du?",
          highlight: "Gdje? = Wo? | Odakle? = Woher?",
        },
        {
          content: "KAKO? = Wie?\nKako si? = Wie geht es dir? (Begrüßung!)\nKako se zoveš? = Wie heißt du?\nKako je? = Wie ist es / Wie läuft's?",
          highlight: "Kako? = Wie? – auch für Befinden: 'Kako si?'",
        },
        {
          content: "KOLIKO? = Wie viel / Wie viele?\nKoliko imaš godina? = Wie alt bist du?\nKoliko košta? = Wie viel kostet das?\nKoliko sati je? = Wie viel Uhr ist es?",
          highlight: "Koliko? = Wie viel/viele? (Zahlen, Mengen, Preis, Uhrzeit)",
        },
        {
          content: "KADA? = Wann?\nKada ideš kući? = Wann gehst du nach Hause?\n\nZAŠTO? = Warum?\nZašto plačeš? = Warum weinst du?\nZašto ne govoriš? = Warum sprichst du nicht?",
          highlight: "Kada? = Wann? | Zašto? = Warum?",
        },
      ],
    },
  },
  {
    id: "pit-info-1",
    type: "info",
    data: {
      title: "Ja/Nein-Fragen: Da li... und die -li Form",
      emoji: "✅❌",
      content: "Um eine Aussage zur Frage zu machen:\n\nAussage: Ti govoriš bosanski. (Du sprichst Bosnisch.)\nFrage 1: Da li govoriš bosanski? (formeller)\nFrage 2: Govoriš li bosanski? (umgangssprachlich – -li ans Verb)\n\nAntworten:\n• Da = Ja\n• Ne = Nein\n• Da, govorim. = Ja, ich spreche.\n• Ne, ne govorim. = Nein, ich spreche nicht.\n\nWeitere Beispiele:\n• Da li si umoran? = Bist du müde?\n• Je li Arjen đak? = Ist Arjen Schüler?\n• Da li imate mačku? = Habt ihr eine Katze?",
      highlight: "Da li + Aussage = Frage! Kurzform: Verb + li (umgangssprachlich)",
    },
  },
  {
    id: "pit-quiz-1",
    type: "quiz",
    data: {
      question: "Jemand fragt: 'Kako se zoveš?' Was ist die richtige Antwort?",
      options: [
        { id: "a", text: "Dobro, hvala. (Gut, danke.)", correct: false },
        { id: "b", text: "Zovem se Arjen. (Ich heiße Arjen.)", correct: true },
        { id: "c", text: "Imam 12 godina. (Ich bin 12.)", correct: false },
        { id: "d", text: "Ja sam iz Bosne. (Ich bin aus Bosnien.)", correct: false },
      ],
      explanation: "'Kako se zoveš?' = Wie heißt du? Antwort: 'Zovem se [Name].' = Ich heiße [Name].\n• 'Kako si?' → 'Dobro, hvala.' (Wie geht's? → Gut, danke.)\n• 'Kako se zoveš?' → 'Zovem se...' (Wie heißt du? → Ich heiße...)",
      difficulty: "easy",
    },
  },
  {
    id: "pit-practice-1",
    type: "practice",
    data: {
      instruction: "Welches Fragewort passt?",
      type: "select",
      items: [
        {
          id: "p1",
          prompt: "___ si? (nach dem Befinden fragen)",
          options: ["Ko", "Kako", "Gdje", "Kada"],
          correct: "Kako",
        },
        {
          id: "p2",
          prompt: "___ je to? (nach einer Sache fragen)",
          options: ["Ko", "Šta", "Gdje", "Zašto"],
          correct: "Šta",
        },
        {
          id: "p3",
          prompt: "___ imaš godina? (nach dem Alter fragen)",
          options: ["Kako", "Kada", "Koliko", "Gdje"],
          correct: "Koliko",
        },
        {
          id: "p4",
          prompt: "___ ideš kući? (nach der Uhrzeit/Zeit fragen)",
          options: ["Gdje", "Kako", "Zašto", "Kada"],
          correct: "Kada",
        },
      ],
    },
  },
  {
    id: "pit-scenario-1",
    type: "scenario",
    data: {
      title: "Erstes Gespräch in Sarajevo",
      scenario: "Arjen trifft auf der Baščaršija (Altstadt) einen gleichaltrigen Jungen namens Emir. Emir fragt: 'Kako se zoveš? Odakle si?' (Wie heißt du? Woher bist du?). Arjen antwortet und fragt zurück.",
      question: "Wie sagt Arjen: 'Ich heiße Arjen. Ich bin aus Deutschland. Wie heißt du?'",
      answer: "Zovem se Arjen. Ja sam iz Njemačke. Kako se zoveš?",
      explanation: "Zovem se = Ich heiße (wörtl.: Ich nenne mich)\nJa sam iz Njemačke. = Ich bin aus Deutschland.\nKako se zoveš? = Wie heißt du?\n\nEmir antwortet: 'Zovem se Emir. Ja sam iz Sarajeva.' (Ich heiße Emir. Ich bin aus Sarajevo.)",
    },
  },
  {
    id: "pit-mistake-1",
    type: "mistake",
    data: {
      title: "Fehler: 'Ko' für Sachen statt 'Šta' benutzen",
      wrongAnswer: "Ko je ovo? (zeigt auf ein Buch oder einen Stuhl)",
      whyWrong: "'Ko' fragt nach Personen! Ein Buch, ein Stuhl oder ein Tier sind keine Personen. 'Ko je ovo?' bei einem Gegenstand klingt sehr seltsam.",
      correctAnswer: "Šta je ovo? = Was ist das? (für alle Gegenstände und Tiere)",
      whyCorrect: "Ko? = Wer? → nur für Menschen und manchmal personifizierte Wesen\nŠta? = Was? → für alle Gegenstände, Tiere, Konzepte\nBeispiel: Šta je ovo? – To je knjiga. (Was ist das? – Das ist ein Buch.)",
    },
  },
];

// ───────────────────────────────────────────────────
// LEKTION 6: MOJ, TVOJ, NAŠ – Possessivpronomen
// ───────────────────────────────────────────────────

export const lesson6_moj: LearningBlock[] = [
  {
    id: "moj-intro-1",
    type: "info",
    data: {
      title: "Lektion 6: Moj, tvoj, naš – Besitz ausdrücken",
      emoji: "👐",
      content: "'To je moja kuća!' – Das ist mein Haus!\n\nPossessivpronomen zeigen, wem etwas gehört. Im Bosnischen passen sie sich – genau wie Adjektive – dem Rod des Substantivs an:\n\n• moj brat (mein Bruder) – muški\n• moja sestra (meine Schwester) – ženski\n• moje dijete (mein Kind) – srednji\n\nDas gilt für alle Possessivpronomen:\n• moj/moja/moje = mein/e\n• tvoj/tvoja/tvoje = dein/e\n• naš/naša/naše = unser/e\n• vaš/vaša/vaše = euer/Ihr/e\n\nDas lernst du heute:\n✅ Alle 6 Possessivpronomen mit Rod-Formen\n✅ Possessivpronomen in Sätzen\n✅ Familie auf Bosnisch beschreiben",
      highlight: "moj/moja/moje – das Endungssystem ist identisch mit Adjektiven!",
    },
  },
  {
    id: "moj-pred-1",
    type: "prediction",
    data: {
      question: "Arjen hat eine Katze (mačka = ženski rod). Wie sagt er 'meine Katze'?",
      hint: "Mačka ist ženski. Welche Form von 'moj' passt zu ženski rod?",
      options: ["moj mačka", "moja mačka", "moje mačka", "mojim mačka"],
      correctAnswer: "moja mačka",
      explanation: "'Mačka' ist ženski rod (endet auf -A). Bei ženski → 'moja'.\nAlso: moja mačka = meine Katze.\nGenauso: moja sestra (meine Schwester), moja škola (meine Schule), moja kuća (mein Haus).",
    },
  },
  {
    id: "moj-reveal-1",
    type: "reveal",
    data: {
      title: "Alle Possessivpronomen – vollständige Übersicht",
      steps: [
        {
          content: "MOJ (mein/e):\nmuški: moj brat (mein Bruder)\nženski: moja sestra (meine Schwester)\nsrednji: moje dijete (mein Kind)",
          highlight: "moj / moja / moje",
        },
        {
          content: "TVOJ (dein/e):\nmuški: tvoj brat (dein Bruder)\nženski: tvoja sestra (deine Schwester)\nsrednji: tvoje dijete (dein Kind)",
          highlight: "tvoj / tvoja / tvoje",
        },
        {
          content: "NJEGOV (sein) / NJEN (ihr, Sg.):\nnjegov brat / njegova sestra / njegovo dijete\nnjen brat / njena sestra / njeno dijete",
          highlight: "njegov/njegova/njegovo | njen/njena/njeno",
        },
        {
          content: "NAŠ (unser) / VAŠ (euer/Ihr):\nnaš grad / naša škola / naše dijete\nvaš grad / vaša kuća / vaše dijete",
          highlight: "naš/naša/naše | vaš/vaša/vaše",
        },
        {
          content: "NJIHOV (ihr, Pl.):\njihov grad / njihova škola / njihovo dijete\n\nMerke: Alle Possessivpronomen folgen demselben -∅/-a/-o Muster wie Adjektive!",
          highlight: "njihov/njihova/njihovo",
        },
      ],
    },
  },
  {
    id: "moj-info-1",
    type: "info",
    data: {
      title: "Besitzsätze mit 'biti' bauen",
      emoji: "🏠",
      content: "Mit 'biti' und Possessivpronomen baut man Besitzsätze:\n\n• To je moj brat. = Das ist mein Bruder.\n• Ovo je moja kuća. = Das ist mein Haus.\n• To je naše dijete. = Das ist unser Kind.\n• Je li ovo tvoja knjiga? = Ist das dein Buch?\n• Da, to je moja knjiga. = Ja, das ist mein Buch.\n• Ne, to nije moja knjiga. = Nein, das ist nicht mein Buch.\n\nNützliche Zeigepronomen:\n• ovo = dieses (hier, nah)\n• to = das (neutral, bekannt)\n• ono = jenes (dort, weit)",
      highlight: "To je moj/moja/moje... = Das ist mein/e... – der universelle Besitzsatz!",
    },
  },
  {
    id: "moj-quiz-1",
    type: "quiz",
    data: {
      question: "Wähle die korrekte Form: 'Das ist unser Haus.' (kuća = ženski rod)",
      options: [
        { id: "a", text: "To je naš kuća.", correct: false },
        { id: "b", text: "To je naša kuća.", correct: true },
        { id: "c", text: "To je naše kuća.", correct: false },
        { id: "d", text: "To je naši kuća.", correct: false },
      ],
      explanation: "'Kuća' ist ženski rod → 'naša'.\nTo je naša kuća = Das ist unser Haus.\nRegel: naš + muški | naša + ženski | naše + srednji",
      difficulty: "medium",
    },
  },
  {
    id: "moj-practice-1",
    type: "practice",
    data: {
      instruction: "Wähle das richtige Possessivpronomen:",
      type: "select",
      items: [
        {
          id: "mp1",
          prompt: "___ brat (mein Bruder) [brat = muški]",
          options: ["moja", "moj", "moje", "moji"],
          correct: "moj",
        },
        {
          id: "mp2",
          prompt: "___ škola (deine Schule) [škola = ženski]",
          options: ["tvoj", "tvoja", "tvoje", "tvoji"],
          correct: "tvoja",
        },
        {
          id: "mp3",
          prompt: "___ dijete (unser Kind) [dijete = srednji]",
          options: ["naš", "naša", "naše", "naši"],
          correct: "naše",
        },
        {
          id: "mp4",
          prompt: "___ grad (ihre Stadt, Pl.) [grad = muški]",
          options: ["njihov", "njihova", "njihovo", "njihovi"],
          correct: "njihov",
        },
      ],
    },
  },
  {
    id: "moj-scenario-1",
    type: "scenario",
    data: {
      title: "Arjens Familienalbum – Familie auf Bosnisch vorstellen",
      scenario: "Arjen zeigt seiner bosnischen Oma ein Familienfoto. Er will erklären: 'Das ist mein Vater, meine Mutter, meine Schwester und mein Hund.' (otac=Vater/muški, majka=Mutter/ženski, sestra=Schwester/ženski, pas=Hund/muški)",
      question: "Ergänze: 'To je ___ otac, ___ majka, ___ sestra i ___ pas.'",
      answer: "moj otac, moja majka, moja sestra i moj pas",
      explanation: "otac (Vater) → muški → moj otac\nmajka (Mutter) → ženski → moja majka\nsestra (Schwester) → ženski → moja sestra\npas (Hund) → muški → moj pas\n\nGanzer Satz: 'To je moj otac, moja majka, moja sestra i moj pas.'\nOma wäre sehr stolz! 🥰",
    },
  },
  {
    id: "moj-mistake-1",
    type: "mistake",
    data: {
      title: "Häufigster Fehler: 'moj' für alle Geschlechter benutzen",
      wrongAnswer: "moj sestra, moj kuća, moj dijete",
      whyWrong: "'Moj' ist nur für muški rod! Sestra und kuća sind ženski → moja. Dijete ist srednji → moje. Das ist der häufigste Anfängerfehler überhaupt.",
      correctAnswer: "moja sestra, moja kuća, moje dijete",
      whyCorrect: "moj + muški (Konsonant): moj brat, moj grad, moj pas\nmoja + ženski (-A): moja sestra, moja kuća, moja knjiga\nmoje + srednji (-O/-E): moje dijete, moje selo, moje more",
    },
  },
];

// ═══════════════════════════════════════════════════
// EXPORT: ALLE LEKTIONEN
// ═══════════════════════════════════════════════════

export const gramatikLessons = {
  rod: {
    id: "rod",
    title: "Imenice i rod",
    description: "Jedes Wort hat ein Geschlecht – muški, ženski, srednji",
    icon: "🏷️",
    estimatedMinutes: 12,
    xpReward: 70,
    blocks: lesson1_rod,
  },
  mnozina: {
    id: "mnozina",
    title: "Množina – Plural",
    description: "Ein Buch, viele Bücher – Plural auf Bosnisch bilden",
    icon: "🔢",
    estimatedMinutes: 12,
    xpReward: 70,
    blocks: lesson2_mnozina,
  },
  biti: {
    id: "biti",
    title: "Glagol biti – Sein",
    description: "Ja sam, ti si, on je – das wichtigste Verb",
    icon: "⭐",
    estimatedMinutes: 10,
    xpReward: 65,
    blocks: lesson3_biti,
  },
  imati: {
    id: "imati",
    title: "Imati & Prezent – Haben",
    description: "Imam, govorim, pišem – haben und regelmäßige Verben",
    icon: "🎯",
    estimatedMinutes: 12,
    xpReward: 70,
    blocks: lesson4_imati,
  },
  pitanja: {
    id: "pitanja",
    title: "Pitanja – Fragen stellen",
    description: "Ko? Šta? Gdje? Kada? – jede Frage auf Bosnisch",
    icon: "❓",
    estimatedMinutes: 10,
    xpReward: 65,
    blocks: lesson5_pitanja,
  },
  moj: {
    id: "moj",
    title: "Moj, tvoj, naš – Besitz",
    description: "Moja porodica, moja kuća – Possessivpronomen",
    icon: "👐",
    estimatedMinutes: 10,
    xpReward: 65,
    blocks: lesson6_moj,
  },
} as const;

export type GramatikLessonId = keyof typeof gramatikLessons;
export const gramatikLessonOrder: GramatikLessonId[] = [
  "rod",
  "mnozina",
  "biti",
  "imati",
  "pitanja",
  "moj",
];
