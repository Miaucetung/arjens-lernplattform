"use client";

import { DipolChecker } from "@/components/interactive";
import Link from "next/link";

export default function DipolCheckerPage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="max-w-lg mx-auto px-4 pt-6">
        <Link href="/fach/chemie/atombindung" className="text-sm text-gray-400 hover:text-white mb-4 inline-block">
          ← Zurück zum Modul
        </Link>
        <DipolChecker />
      </div>
    </main>
  );
}
