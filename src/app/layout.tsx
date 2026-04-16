import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjens Lernplattform",
  description: "Interaktive Lernplattform – Verstehen statt Auswendiglernen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-gray-950">{children}</body>
    </html>
  );
}
