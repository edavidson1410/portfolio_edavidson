import { Roboto } from "next/font/google";
import React from 'react';
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto_init = Roboto({ subsets: ['latin'], weight: '300' });

export const metadata = {
  title: "Eric Davidson Portfolio",
  description: "Portfolio to showcase Web Development skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={roboto_init.className}>
        {children}
        </body>
    </html>
  );
}
