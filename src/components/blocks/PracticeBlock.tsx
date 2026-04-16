"use client";

import { PracticeData } from "@/types";
import { useState } from "react";

export function PracticeBlock({ data }: { data: PracticeData }) {
  if (data.type === "fill-blank") return <FillBlankPractice data={data} />;
  if (data.type === "order") return <OrderPractice data={data} />;
  if (data.type === "select") return <SelectPractice data={data} />;
  if (data.type === "drag-drop") return <DragDropPractice data={data} />;

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">✏️</span>
        <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Übung</span>
      </div>
      <p className="text-gray-300">{data.instruction}</p>
    </div>
  );
}

function FillBlankPractice({ data }: { data: PracticeData }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleCheck = () => setChecked(true);

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">✏️</span>
        <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Lückentext</span>
      </div>
      <p className="text-gray-300 mb-4">{data.instruction}</p>

      <div className="space-y-3">
        {data.blanks?.map((blank, i) => {
          const isCorrect = answers[i]?.trim().toLowerCase() === blank.answer.toLowerCase();
          return (
            <div key={i} className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-300 text-sm">{blank.text}</span>
              <input
                type="text"
                value={answers[i] ?? ""}
                onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })}
                disabled={checked}
                className={`bg-gray-800/50 border rounded-lg px-3 py-1.5 text-white text-sm w-28 focus:outline-none transition-colors ${
                  checked
                    ? isCorrect
                      ? "border-green-500 bg-green-500/10"
                      : "border-red-500 bg-red-500/10"
                    : "border-gray-700 focus:border-primary-500"
                }`}
              />
              {checked && !isCorrect && (
                <span className="text-xs text-green-400">→ {blank.answer}</span>
              )}
            </div>
          );
        })}
      </div>

      {!checked && (
        <button onClick={handleCheck} className="btn-primary w-full mt-4">
          Überprüfen
        </button>
      )}

      {checked && (
        <div className="mt-4 text-center">
          {data.blanks?.every((blank, i) =>
            answers[i]?.trim().toLowerCase() === blank.answer.toLowerCase()
          ) ? (
            <p className="text-green-400 font-bold animate-bounce-in">🎉 Alles richtig!</p>
          ) : (
            <p className="text-amber-400 font-medium">Schau dir die Korrekturen an!</p>
          )}
        </div>
      )}
    </div>
  );
}

function OrderPractice({ data }: { data: PracticeData }) {
  const [items, setItems] = useState(() =>
    [...(data.items ?? [])].sort(() => Math.random() - 0.5)
  );
  const [checked, setChecked] = useState(false);

  const moveItem = (fromIndex: number, direction: "up" | "down") => {
    if (checked) return;
    const toIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= items.length) return;
    const newItems = [...items];
    [newItems[fromIndex], newItems[toIndex]] = [newItems[toIndex], newItems[fromIndex]];
    setItems(newItems);
  };

  const isCorrect = data.correctOrder
    ? items.every((item, i) => item.id === data.correctOrder![i])
    : false;

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🔢</span>
        <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Sortieren</span>
      </div>
      <p className="text-gray-300 mb-4">{data.instruction}</p>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${
              checked && data.correctOrder?.[i] === item.id
                ? "border-green-500 bg-green-500/10"
                : checked
                ? "border-red-500 bg-red-500/10"
                : "border-gray-700 bg-gray-800/50"
            }`}
          >
            <span className="text-gray-500 text-sm w-6">{i + 1}.</span>
            <span className="flex-1 text-gray-300 text-sm">{item.label}</span>
            {!checked && (
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => moveItem(i, "up")}
                  className="text-gray-500 hover:text-white text-xs px-1"
                  disabled={i === 0}
                >▲</button>
                <button
                  onClick={() => moveItem(i, "down")}
                  className="text-gray-500 hover:text-white text-xs px-1"
                  disabled={i === items.length - 1}
                >▼</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {!checked && (
        <button onClick={() => setChecked(true)} className="btn-primary w-full mt-4">
          Überprüfen
        </button>
      )}

      {checked && (
        <p className={`mt-4 text-center font-bold animate-bounce-in ${isCorrect ? "text-green-400" : "text-amber-400"}`}>
          {isCorrect ? "🎉 Perfekte Reihenfolge!" : "Nicht ganz – probier nochmal!"}
        </p>
      )}
    </div>
  );
}

function SelectPractice({ data }: { data: PracticeData }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [checked, setChecked] = useState(false);

  const toggleItem = (id: string) => {
    if (checked) return;
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelected(newSet);
  };

  const correctItems = data.items?.filter((item) => item.category === "correct") ?? [];
  const allCorrect = correctItems.every((item) => selected.has(item.id)) &&
    [...selected].every((id) => correctItems.some((item) => item.id === id));

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">👆</span>
        <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Auswählen</span>
      </div>
      <p className="text-gray-300 mb-4">{data.instruction}</p>

      <div className="flex flex-wrap gap-2">
        {data.items?.map((item) => {
          const isSelected = selected.has(item.id);
          const isItemCorrect = item.category === "correct";

          let style = "border-gray-700 bg-gray-800/50 text-gray-300";
          if (checked) {
            if (isItemCorrect && isSelected) style = "border-green-500 bg-green-500/10 text-green-300";
            else if (!isItemCorrect && isSelected) style = "border-red-500 bg-red-500/10 text-red-300";
            else if (isItemCorrect && !isSelected) style = "border-amber-500 bg-amber-500/10 text-amber-300";
          } else if (isSelected) {
            style = "border-primary-500 bg-primary-500/10 text-primary-300";
          }

          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`px-4 py-2 rounded-xl border text-sm transition-all ${style}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {!checked && (
        <button onClick={() => setChecked(true)} className="btn-primary w-full mt-4">
          Überprüfen
        </button>
      )}

      {checked && (
        <p className={`mt-4 text-center font-bold animate-bounce-in ${allCorrect ? "text-green-400" : "text-amber-400"}`}>
          {allCorrect ? "🎉 Perfekt!" : "Schau genau hin – manche fehlen noch!"}
        </p>
      )}
    </div>
  );
}

function DragDropPractice({ data }: { data: PracticeData }) {
  const categories = [...new Set(data.items?.map((item) => item.category).filter(Boolean))];
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const unplaced = data.items?.filter((item) => !Object.values(placements).includes(item.id)) ?? [];

  const placeItem = (itemId: string, category: string) => {
    if (checked) return;
    setPlacements({ ...placements, [itemId]: category });
  };

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🎯</span>
        <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Zuordnen</span>
      </div>
      <p className="text-gray-300 mb-4">{data.instruction}</p>

      {/* Unplaced items */}
      {unplaced.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {unplaced.map((item) => (
            <span key={item.id} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
              {item.label}
            </span>
          ))}
        </div>
      )}

      {/* Categories */}
      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat) => {
          const placedItems = data.items?.filter(
            (item) => placements[item.id] === cat
          ) ?? [];

          return (
            <div key={cat} className="bg-gray-800/30 border border-gray-700 rounded-xl p-3 min-h-[80px]">
              <p className="text-xs font-semibold text-gray-400 mb-2">{cat}</p>
              <div className="space-y-1">
                {placedItems.map((item) => {
                  const correct = item.category === cat;
                  return (
                    <span
                      key={item.id}
                      className={`block text-xs px-2 py-1 rounded ${
                        checked
                          ? correct
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                          : "bg-primary-500/20 text-primary-300"
                      }`}
                    >
                      {item.label}
                    </span>
                  );
                })}
              </div>
              {/* Tap to place */}
              {!checked && unplaced.length > 0 && (
                <button
                  onClick={() => unplaced[0] && placeItem(unplaced[0].id, cat!)}
                  className="text-xs text-gray-600 mt-2 hover:text-gray-400"
                >
                  + Hierhin
                </button>
              )}
            </div>
          );
        })}
      </div>

      {!checked && unplaced.length === 0 && (
        <button onClick={() => setChecked(true)} className="btn-primary w-full mt-4">
          Überprüfen
        </button>
      )}
    </div>
  );
}
