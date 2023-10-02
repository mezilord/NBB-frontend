"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppContextProvider } from "./context/data";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const handle = useFullScreenHandle();
  return (
    <html lang="en">
      {/* <FullScreen handle={handle}> */}
        <AppContextProvider>
          <body className={inter.className}>{children}</body>
        </AppContextProvider>
      {/* </FullScreen> */}
    </html>
  );
}
