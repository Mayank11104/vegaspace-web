import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Mono, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vegaspace | Unified Developer Workspace",
  description: "The AI-orchestrated unified developer workspace that bridges your IDE, terminal, and DevOps pipelines.",
};

import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { IntroLoader } from "@/features/landing/components/IntroLoader";
import { cookies } from "next/headers";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const hasSeenIntro = cookieStore.get("hasSeenIntro")?.value === "true";

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${robotoMono.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {!hasSeenIntro && <IntroLoader />}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
