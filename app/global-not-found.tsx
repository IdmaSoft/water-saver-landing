import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";
import Drop from "@/components/Drop";
import "./globals.css";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 · Water Saver / Gotita",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${nunito.variable} antialiased`}>
      <body className="flex min-h-dvh items-center justify-center bg-sky px-6 font-sans text-ink">
        <main className="text-center">
          <Drop id="nf" mood="sad" className="mx-auto h-36 w-auto animate-bob" />
          <p className="mt-6 text-7xl font-extrabold text-water">404</p>
          <h1 className="mt-3 text-2xl font-extrabold text-water">This drop got lost · Esta gota se perdió</h1>
          <p className="mt-3 text-muted">The page you are looking for does not exist. · La página que buscas no existe.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/es" className="rounded-full bg-water px-6 py-3 font-bold text-white transition hover:bg-water-700">
              Ir a Gotita
            </Link>
            <Link href="/en" className="rounded-full border-2 border-water px-6 py-3 font-bold text-water transition hover:bg-white">
              Go to Water Saver
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
