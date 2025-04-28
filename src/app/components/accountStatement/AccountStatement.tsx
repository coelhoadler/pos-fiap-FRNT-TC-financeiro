'use client';

import * as db from '../../database/db.json';
import { useState } from 'react';
import { transactionServices } from '@/app/api/transactionServices/transactionServices';
import TransactionItem from '../transactionItem/transactionItem';

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
    // TODO: Implement the dialog confirmation for deletion
    const confirmDelete = window.confirm(
      'Você tem certeza que deseja excluir esta transação?'
    );

    if (confirmDelete) {
      handleTransactionDelete(transactionId);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-xl w-full max-w-full h-full shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-bold">Extrato</h2>
      </div>

      <ul className="flex flex-col gap-5 text-left pt-5">
        {updatedTransactions.length > 0 ? (
          updatedTransactions.map((transaction, index) => (
            <TransactionItem item={transaction} key={index} onDelete={() => handleTransactionDeleteConfirmation(transaction.id)} />
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
