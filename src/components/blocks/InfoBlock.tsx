"use client";

import { InfoData } from "@/types";

export function InfoBlock({ data }: { data: InfoData }) {
  return (
    <div className="card-glass p-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{data.emoji ?? "💡"}</span>
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          Wissen
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-3">{data.title}</h3>

      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
        {data.content}
      </div>

      {data.highlight && (
        <div className="mt-3 bg-primary-500/10 border border-primary-500/20 rounded-xl p-3">
          <p className="text-sm font-medium text-primary-400">
            ⭐ {data.highlight}
          </p>
        </div>
      )}
    </div>
  );
}
