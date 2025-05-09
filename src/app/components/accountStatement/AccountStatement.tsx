'use client';

import { useEffect, useState } from 'react';
import TransactionItem from '../transactionItem/transactionItem';
import { useTransaction } from '@/app/context/TransactionContext';
import { ITransaction } from '@/app/interfaces/transactionModels';
import { toast } from 'react-toastify';
import { sortExtractByAscDate } from '@/app/shared/utils';
import { showConfirmToast, showSuccessToast } from '../showCustomToast/showCustomToast';

export default function AccountStatement() {
  const [updatedTransactions, setUpdatedTransactions] = useState<ITransaction[]>([]);

  const { extract, transactionServices } = useTransaction()

  useEffect(()=> {
    const extractOrdered = sortExtractByAscDate(extract || []);
    setUpdatedTransactions(extractOrdered || []);
  },[extract])

  const handleTransactionDelete = async (transactionId: string) => {
    try {
      await transactionServices.delete(transactionId)

      if (updatedTransactions) {
        const remainingTransactions = updatedTransactions.filter(
          (transaction) => transaction.id !== transactionId
        )

        setUpdatedTransactions(remainingTransactions)

        showSuccessToast({ message: 'Transação excluída com sucesso!'})

      }
    } catch (error) {
      console.error('Error deleting transaction:', error)
    }
  }

  return (
    <div className="bg-gray-100 p-8 rounded-xl w-full max-w-full h-full shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-bold">Extrato</h2>
      </div>

      <ul className="flex flex-col gap-5 text-left pt-5">
        {updatedTransactions.length > 0 ? (
          updatedTransactions.map((transaction, index) => (
            <TransactionItem item={transaction} key={index} onDelete={() => showConfirmToast({ onClick: () => handleTransactionDelete(transaction.id!), type: "delete" })} />
          ))
        ) : (
          <span className="text-gray-500 text-center">
            Nenhuma transação encontrada.
          </span>
        )}
      </ul>
    </div>
  )
}
