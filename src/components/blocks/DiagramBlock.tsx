"use client";

import { DiagramData } from "@/types";

interface MoleculeAtom {
  symbol: string;
  x: number;
  y: number;
  color: string;
}

interface MoleculeBond {
  from: number;
  to: number;
  type: "single" | "double" | "triple";
}

interface MoleculeData {
  atoms: MoleculeAtom[];
  bonds: MoleculeBond[];
  name: string;
  freePairs?: { atomIndex: number; count: number }[];
}

export function DiagramBlock({ data }: { data: DiagramData }) {
  if (data.type === "molecule-2d") {
    return <Molecule2D data={data} />;
  }

  if (data.type === "comparison") {
    return <ComparisonDiagram data={data} />;
  }

  if (data.type === "concept-map") {
    return <ConceptMapDiagram data={data} />;
  }

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">📊</span>
        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
          Diagramm
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{data.title}</h3>
      <p className="text-gray-400">{data.description}</p>
    </div>
  );
}

function Molecule2D({ data }: { data: DiagramData }) {
  const mol = data.data as unknown as MoleculeData;

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🔬</span>
        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
          Molekül
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{data.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{data.description}</p>

      {/* SVG Molecule */}
      <div className="bg-gray-800/50 rounded-xl p-4 flex justify-center">
        <svg viewBox="0 0 300 200" className="w-full max-w-sm">
          {/* Bonds */}
          {mol.bonds.map((bond, i) => {
            const from = mol.atoms[bond.from];
            const to = mol.atoms[bond.to];
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const nx = -dy / len;
            const ny = dx / len;
            const offset = 4;

            if (bond.type === "double") {
              return (
                <g key={i}>
                  <line
                    x1={from.x + nx * offset} y1={from.y + ny * offset}
                    x2={to.x + nx * offset} y2={to.y + ny * offset}
                    stroke="#94a3b8" strokeWidth="2"
                  />
                  <line
                    x1={from.x - nx * offset} y1={from.y - ny * offset}
                    x2={to.x - nx * offset} y2={to.y - ny * offset}
                    stroke="#94a3b8" strokeWidth="2"
                  />
                </g>
              );
            }
            if (bond.type === "triple") {
              return (
                <g key={i}>
                  <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#94a3b8" strokeWidth="2" />
                  <line
                    x1={from.x + nx * offset * 1.5} y1={from.y + ny * offset * 1.5}
                    x2={to.x + nx * offset * 1.5} y2={to.y + ny * offset * 1.5}
                    stroke="#94a3b8" strokeWidth="2"
                  />
                  <line
                    x1={from.x - nx * offset * 1.5} y1={from.y - ny * offset * 1.5}
                    x2={to.x - nx * offset * 1.5} y2={to.y - ny * offset * 1.5}
                    stroke="#94a3b8" strokeWidth="2"
                  />
                </g>
              );
            }
            return (
              <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#94a3b8" strokeWidth="2" />
            );
          })}

          {/* Free electron pairs (dots) */}
          {mol.freePairs?.map((fp, i) => {
            const atom = mol.atoms[fp.atomIndex];
            const angles = fp.count === 1 ? [Math.PI] : fp.count === 2 ? [Math.PI * 0.75, Math.PI * 1.25] : [Math.PI * 0.5, Math.PI, Math.PI * 1.5];
            return angles.map((angle, j) => (
              <g key={`fp-${i}-${j}`}>
                <circle cx={atom.x + Math.cos(angle) * 22} cy={atom.y + Math.sin(angle) * 22} r="2" fill="#60a5fa" />
                <circle cx={atom.x + Math.cos(angle) * 28} cy={atom.y + Math.sin(angle) * 28} r="2" fill="#60a5fa" />
              </g>
            ));
          })}

          {/* Atoms */}
          {mol.atoms.map((atom, i) => (
            <g key={i}>
              <circle cx={atom.x} cy={atom.y} r="18" fill={atom.color} opacity="0.2" />
              <circle cx={atom.x} cy={atom.y} r="15" fill="transparent" stroke={atom.color} strokeWidth="2" />
              <text
                x={atom.x}
                y={atom.y + 5}
                textAnchor="middle"
                className="text-sm font-bold"
                fill={atom.color}
              >
                {atom.symbol}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {mol.name && (
        <p className="text-center text-sm text-gray-400 mt-2">{mol.name}</p>
      )}
    </div>
  );
}

function ComparisonDiagram({ data }: { data: DiagramData }) {
  const items = data.data as unknown as { left: { label: string; items: string[] }; right: { label: string; items: string[] } };

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">⚖️</span>
        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
          Vergleich
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-4">{data.title}</h3>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3">
          <p className="font-semibold text-blue-400 mb-2 text-sm">{items.left.label}</p>
          <ul className="space-y-1">
            {items.left.items.map((item, i) => (
              <li key={i} className="text-xs text-gray-300">• {item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3">
          <p className="font-semibold text-purple-400 mb-2 text-sm">{items.right.label}</p>
          <ul className="space-y-1">
            {items.right.items.map((item, i) => (
              <li key={i} className="text-xs text-gray-300">• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ConceptMapDiagram({ data }: { data: DiagramData }) {
  const nodes = data.data as unknown as { nodes: { id: string; label: string; emoji: string }[]; edges: { from: string; to: string; label: string }[] };

  return (
    <div className="card-glass p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🗺️</span>
        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
          Concept Map
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-4">{data.title}</h3>

      <div className="flex flex-wrap gap-2 justify-center">
        {nodes.nodes.map((node) => (
          <div key={node.id} className="bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-center">
            <span className="text-lg block">{node.emoji}</span>
            <span className="text-xs text-gray-300">{node.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 space-y-1">
        {nodes.edges.map((edge, i) => {
          const from = nodes.nodes.find((n) => n.id === edge.from);
          const to = nodes.nodes.find((n) => n.id === edge.to);
          return (
            <p key={i} className="text-xs text-gray-500 text-center">
              {from?.label} → <span className="text-primary-400">{edge.label}</span> → {to?.label}
            </p>
          );
        })}
      </div>
    </div>
  );
}
