import type { Metadata } from "next";
import { ptMono, outfit } from './fonts';
import "./globals.scss";
import dynamic from "next/dynamic";
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";

const StarsBackground = dynamic(() => import("@/widgets/particles/StarsBackground"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Топольский Даниил — Frontend Developer",
  description: "Портфолио: проекты, навыки и опыт работы как frontend-разработчика. React, Next.js, TypeScript, UI/UX.",
  keywords: ["портфолио", "frontend developer", "React", "Next.js", "TypeScript", "Danя", "веб-разработка"],
  authors: [{ name: "Даня", url: "https://github.com/TopolskiiDaniil" }],
  creator: "Даня",
  // openGraph: {
  //   title: "Портфолио Даня — Frontend Developer",
  //   description: "Портфолио Даня: проекты, навыки и опыт работы как frontend-разработчика. React, Next.js, TypeScript, UI/UX.",
  //   url: "https://твой-домен.ру",
  //   siteName: "Портфолио Даня",
  //   images: [
  //     {
  //       url: "/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Портфолио Даня",
  //     },
  //   ],
  //   locale: "ru_RU",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Портфолио Даня — Frontend Developer",
  //   description: "Портфолио Даня: проекты, навыки и опыт работы как frontend-разработчика.",
  //   images: ["/og-image.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${ptMono.variable} ${outfit.variable}`}>
      <body>
        <div className="app-wrapper">
          <StarsBackground />
          <Header />
          <div className="app-content">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
