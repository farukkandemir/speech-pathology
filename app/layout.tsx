import type { Metadata } from "next";
import { Poppins, Mochiy_Pop_One } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/language-context";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const mochiyPopOne = Mochiy_Pop_One({
  variable: "--font-mochiy",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Müberra Kandemir | Speech Pathologist at Rota Rehabilitation Center",
  description:
    "Professional speech therapy services by Müberra Kandemir for children and adults at Rota Rehabilitation Center in Turkey. Specializing in articulation therapy, stuttering, and language development with bilingual support in English and Turkish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${mochiyPopOne.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
