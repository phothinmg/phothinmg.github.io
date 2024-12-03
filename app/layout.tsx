import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PHO THIN MAUNG",
  description: "Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#ffffff] dark:bg-[#222121] text-slate-600 dark:text-[#ededed]`}
      >
        <main className="md:flex max-w-md mx-auto overflow-hidden md:max-w-3xl">
          {children}
        </main>
      </body>
    </html>
  );
}
