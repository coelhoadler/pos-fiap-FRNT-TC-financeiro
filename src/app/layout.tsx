import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/header/header";
import { DesktopMenu } from "./components/menu/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pós Tech FIAP - Challenge 1",
  description: "Tech Challenge 1 - FIAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden scroll-smooth min-w-[1920px]`}
      >
        <Header nameUser={"Joana da Silva Oliveira"} />
        <main className="h-auto w-screen flex items-center justify-center min-w-[360px] pt-[150px] max-sm:pt-[116px]">
          <div className="lg:grid-cols-[250px_minmax(690px,_900px)_250px] lg:grid-colums md:grid-cols-1 w-[80%] grid gap-3 grid-cols-1">
            <div className="lg:justify-center lg:items-start max-sm:hidden flex justify-center items-center box-content grow-1">
              <DesktopMenu />
            </div>
            <div className="lg:justify-center items-center flex grow-3 justify-center">
              {children}
            </div>
            <div className="lg:justify-center lg:items-start md:items-end flex justify-center items-center grow-1">
              aqui vai o componente de extrato
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
