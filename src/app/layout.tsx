import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

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
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <section className='h-screen w-screen flex items-center justify-center min-w-[360px]'>
          <div className="w-[80%] grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="flex sm:justify-center lg:justify-start sm:items-center lg:items-start justify-center items-center">Aqui vai o menu (desktop/tablet)</div>
            <div className="flex sm:justify-center lg:justify-center items-center sm:items-center grow-1 justify-center">{children}</div>
            <div className="flex lg:justify-end sm:justify-center items-end sm:items-center justify-center">aqui vai o componente de extrato</div>
          </div>
        </section>
      </body>
    </html>
  );
}
