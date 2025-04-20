'use client'

import Image from "next/image";
import { useState } from "react";


export default function CardBalance({ balance: valueStart }: { balance: number }) {
  const [showBalance, setShowBalance] = useState(true);
  const date: string = new Date().toLocaleDateString("pt-br", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric", });
  const saldoFormato = (valueStart || 0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  return (
    <div className="flex relative max-sm:flex-col max-sm:h-[700px] sm:min-h-[350px] w-full md:min-w-[320px] text-white bg-primary rounded-[10px]">
      <Image
        width={180}
        height={177}
        src={"/bg-card-transaction.png"}
        alt={"Fundo quadriculado do card de balanço financeiro"}
        className="absolute top-0 right-0 max-h-[177px] max-w-[180px] opacity-30 scale-y-[-1] rotate-270 z-1"
      />

      <div className="flex flex-col justify-between max-sm:text-center max-sm:p-12 max-sm:pb-1 max-sm:w-full w-1/2 z-20">
        <div className="flex flex-col sm:pt-8 sm:pl-10 max-sm:pt-0 max-sm:pl-0">
          <span className="pb-5 text-[24px] font-semibold"> Olá, Joana!</span>
          <span className="text-sm">{date}</span>
        </div>
      </div>

      <div className="flex flex-col text-xl max-sm:p-10 sm:pt-24 sm:pr-45 max-sm:w-full w-1/2 z-20">
        <div className="flex text-lg font-bold pb-2 border-b-2 border-orange-600 flex-row gap-7 items-center">
          <h2 className="text-lg font-bold">Saldo</h2>

          <svg onClick={() => setShowBalance(!showBalance)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`cursor-pointer size-6 text-orange-600 ${showBalance ? "visible" : "hidden"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

          <svg onClick={() => setShowBalance(!showBalance)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`cursor-pointer size-6 text-orange-600 ${showBalance ? "hidden" : "visible"}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>

        </div>
        {showBalance && <span className="text-3xl pt-2 mt-2">{saldoFormato}</span>}
        {!showBalance && <span className="text-3xl text-white pt-2 mt-2">• • • •</span>}
      </div>

      <Image
        width={283}
        height={228}
        src={"/banker.png"}
        alt={"Ícone de banqueiro"}
        className="absolute bottom-3 left-10 max-h-[228px] max-w-[283px] z-2"
      />

      <Image
        width={180}
        height={177}
        src={"/bg-card-transaction.png"}
        alt={"Fundo quadriculado do card de balanço financeiro"}
        className="absolute bottom-0 left-0 max-h-[177px] max-w-[180px] opacity-30 scale-y-[-1] rotate-90 z-1"
      />
    </div>
  );
}
