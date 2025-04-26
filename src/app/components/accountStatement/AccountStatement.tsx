'use client';

import { formatCurrency, formatDate } from '@/app/shared/utils';
import * as db from '../../database/db.json';
import { LuPencil } from 'react-icons/lu';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import { transactionServices } from '@/app/api/TransactionServices/transactionServices';

export default function AccountStatement() {
  const [updatedTransactions, setUpdatedTransactions] = useState(
    db.transactions || []
  );

  const handleTransactionDelete = async (transactionId: string) => {
    try {
      await transactionServices.delete(transactionId);

      if (updatedTransactions) {
        const remainingTransactions = updatedTransactions.filter(
          (transaction) => transaction.id !== transactionId
        );

        // Update the state or database with the new transactions list
        setUpdatedTransactions(remainingTransactions);

        //TODO: Implement a success dialog
        alert('Transação excluída com sucesso!');
      }
    } catch (error) {
      //TODO: Implement a error dialog
      console.error('Error deleting transaction:', error);
    }
  };

  const handleTransactionDeleteConfirmation = (transactionId: string) => {
    //TODO: Implement the dialog confirmation for deletion
    const confirmDelete = window.confirm(
      'Você tem certeza que deseja excluir esta transação?'
    );

    if (confirmDelete) {
      handleTransactionDelete(transactionId);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-xl w-full max-w-full shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-bold">Extrato</h2>
      </div>

      <ul className="flex flex-col gap-5 text-left pt-5">
        {updatedTransactions.length > 0 ? (
          updatedTransactions.map((transaction, index) => (
            <div key={index} className="mb-4 pb-4 border-b border-link">
              <p className="text-link font-semibold">
                {formatDate(transaction.date)}
              </p>
              <div className="flex justify-between items-baseline">
                <div>
                  <p className="text-lg">
                    {transaction.typeTrasaction.description}
                  </p>
                  <p
                    className={`text-lg font-bold ${
                      parseFloat(transaction.amount) < 0
                        ? 'text-red-600'
                        : 'text-black'
                    }`}
                  >
                    {parseFloat(transaction.amount) < 0 ? '-' : ''}{' '}
                    {formatCurrency(Math.abs(parseFloat(transaction.amount)))}
                  </p>
                </div>
                <p className="text-sm text-gray-400 flex flex-col">
                  <button className="bg-teal-900 text-white p-2 rounded-full mb-3">
                    <LuPencil size={20} />
                  </button>
                  <button
                    className="bg-teal-900 text-white p-2 rounded-full"
                    onClick={() =>
                      handleTransactionDeleteConfirmation(transaction.id)
                    }
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </p>
              </div>
            </div>
          ))
        ) : (
          <span className="text-gray-500 text-center">
            Nenhuma transação encontrada.
          </span>
        )}
      </ul>
    </div>
  );
}
