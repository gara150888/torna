import type { Metadata } from "next";
import { Cormorant, Karla, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, ThemeToggle } from "./components";

const cormorant = Cormorant({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const karla = Karla({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Torna — Write to understand",
  description:
    "A quiet journaling space. Slow down, reflect, and find clarity — one entry at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${karla.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-body text-text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex items-center justify-between px-6 py-4 sm:px-10">
            <span className="font-display text-xl font-medium text-text-primary">Torna</span>
            <ThemeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
