import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto ({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "PROVA PRÁTICA - FRONT END 1",
    icons: {
    icon: "/icons/favicon.ico",
  },
    description: "Projeto pra realização da Prova Prática - Next.js Front End 1",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>{children}</body>
        </html>
    );
}