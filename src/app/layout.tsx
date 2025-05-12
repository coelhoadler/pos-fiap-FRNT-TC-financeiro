import type { Metadata } from 'next';
import './styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Roboto } from 'next/font/google';

import Header from './components/header/header';
import { TransactionProvider } from './context/TransactionContext';
import { DesktopMenu } from './components/menu/menu';
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({
  subsets: ['latin']
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
        className={`${roboto.className} antialiased scroll-smooth`}
      >
        <Header nameUser={'Joana da Silva Oliveira'} />
        <TransactionProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" 
            />
          <main className="flex justify-center min-w-[320px] pt-[116px] pb-[1rem] max-w-[80%] m-auto max-lg:max-w-full max-lg:px-[15px] max-lg:pb-7">
            <div className="lg:grid-cols-[250px_auto] lg:grid-colums md:grid-cols-1 w-full  grid gap-3 grid-cols-1">
              <div className="lg:justify-center lg:items-start max-sm:hidden flex justify-center items-center box-content grow-1">
                <DesktopMenu />
              </div>
              <div className="lg:justify-center items-center md:items-start flex grow-3 justify-center max-lg:pt-5">
                {children}
                <SpeedInsights /> 
              </div>
            </div>
          </main>
        </TransactionProvider>
      </body>
    </html>
  );
}
