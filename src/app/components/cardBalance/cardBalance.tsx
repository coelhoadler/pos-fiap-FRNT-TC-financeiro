"use client";

export default function CardBalance({balance: valueStart }: { balance: number }) {
    const date: string = new Date().toLocaleDateString("pt-br", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric", });
    const saldoFormato = (valueStart || 0).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    return (
        <div className="flex relative max-sm:flex-col max-sm:h-[700px] sm:min-h-[350px] w-full text-white bg-primary rounded-[10px]">
          <div className="flex flex-col justify-between max-sm:text-center max-sm:p-12 max-sm:pb-1 max-sm:w-full w-1/2 z-20">
            <div className="flex flex-col sm:pt-8 sm:pl-10 max-sm:pt-0 max-sm:pl-0">
              <span className="pb-5 text-[24px] font-semibold"> Olá, Joana!</span>
              <span className="text-sm">{date}</span>
            </div>
          </div>
    
          <div className="flex flex-col text-xl max-sm:p-10 sm:pt-24 sm:pr-28 max-sm:w-full w-1/2 z-20">
            <div className="flex text-lg font-bold pb-2 border-b-2 border-white">
              <h2 className="text-lg font-bold">Saldo</h2>
            {/* TODO: Adicionar botão de visualizar ou não visualizar o saldo */}
            </div>
            <span className="text-base pt-4">Conta Corrente</span>
            <span className="text-3xl pt-1">{saldoFormato}</span>
            {/* TODO: Adicionar imagens quando table ou mobile */}
          </div>
    

        </div>
      );
}