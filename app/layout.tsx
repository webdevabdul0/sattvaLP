import type { Metadata } from "next";
import { Lato, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import ScrollHandler from "./components/ScrollHandler";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Adjust weights as needed
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"], // Only available weight for DM Serif Display
});

export const metadata: Metadata = {
  title: "Sattva",
  description: "Sattva - A Modern Landing Page",
  icons: {
    icon: "/favico.ico", // Make sure the file is named correctly and located in /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        <ScrollHandler />
        {children}
      </body>
    </html>
  );
}
