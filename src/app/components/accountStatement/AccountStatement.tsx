import { formatCurrency, formatDate } from '@/app/shared/utils';
import * as db from '../../database/db.json';

export default function AccountStatement() {
  return (
    <div className="bg-gray-100 p-8 rounded-xl w-full max-w-full shadow-md">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-bold">Extrato</h2>
      </div>

      <ul className="flex flex-col gap-5 text-left pt-5">
      {
        db?.transactions?.length > 0 ? (
          db.transactions.map((transaction, index) => (
        <div key={index} className="mb-4 pb-4 border-b border-link">
          <p className="text-link font-semibold">{formatDate(transaction.date)}</p>
          <div className="flex justify-between items-baseline">
            <div>
              <p className="text-lg">{transaction.typeTrasaction.description}</p>
              <p className={`text-lg font-bold ${parseFloat(transaction.amount) < 0 ? 'text-red-600' : 'text-black'}`}>
                {parseFloat(transaction.amount) < 0 ? '-' : ''} {formatCurrency(Math.abs(parseFloat(transaction.amount)))}
              </p>
            </div>
            <p className="text-sm text-gray-400 flex flex-col">
              <button className="bg-teal-900 text-white p-2 rounded-full mb-3">
                EDITAR
              </button>
              <button className="bg-teal-900 text-white p-2 rounded-full">
                LIXEIRA
              </button>
            </p>
          </div>
        </div>
      ))
    ) : (
      <span className="text-gray-500 text-center">
        Nenhuma transação encontrada.
      </span>
    )
      }
      </ul>
    </div>
  );
}

