"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppContextProvider } from "./context/data";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  document.documentElement.requestFullscreen({ navigationUI: 'hide' });

  return (
    <html lang="en">
        <AppContextProvider>
          <body className={inter.className}>{children}</body>
        </AppContextProvider>
    </html>
  );
}
