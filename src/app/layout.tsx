import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './styles/globals.css';
import Header from './components/header/header';
import { DesktopMenu } from './components/menu/menu';
import AccountStatement from './components/accountStatement/accountStatement';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pós Tech FIAP - Challenge 1',
  description: 'Tech Challenge 1 - FIAP',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Header nameUser={'Joana da Silva Oliveira'} />
        <main className="w-screen flex justify-center min-w-[320px] pt-[150px] max-sm:pt-[116px] h-dvh pb-[1rem]">
          <div className="lg:grid-cols-[250px_auto_350px] lg:grid-colums md:grid-cols-1 w-[95%] md:w-[80%] grid gap-3 grid-cols-1">
            <div className="lg:justify-center lg:items-start max-sm:hidden flex justify-center items-center box-content grow-1">
              <DesktopMenu />
            </div>
            <div className="lg:justify-center items-center md:items-start flex grow-3 justify-center">
              {children}
            </div>
            <div className="lg:justify-center lg:items-start md:items-end flex justify-center items-center grow-1 h-full">
              <AccountStatement />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
