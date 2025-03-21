import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  weight: ['400', '700'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Coline Fardel Portfolio",
  description: "Portfolio Coline Fardel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} ${saira.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
