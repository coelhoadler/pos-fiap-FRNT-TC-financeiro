"use client";

import { useEffect, useState } from "react";
import TransactionItem from "../transactionItem/transactionItem";
import { useTransaction } from "@/app/context/TransactionContext";
import { ITransaction } from "@/app/interfaces/transactionModels";
import { toast } from "react-toastify";
import { sortExtractByAscDate } from "@/app/shared/utils";
import { accountServices } from "@/app/api/accountServices/accountServices";

type TAccountStatement = {
  destinationPageName?: string;
};

export default function AccountStatement({
  destinationPageName,
}: TAccountStatement) {
  const [updatedTransactions, setUpdatedTransactions] = useState<
    ITransaction[]
  >([]);

  const { extract, transactionServices, setBalance } = useTransaction();

  useEffect(() => {
    const extractOrdered = sortExtractByAscDate(extract || []);
    setUpdatedTransactions(extractOrdered || []);
  }, [extract]);

  const handleTransactionDelete = async (transactionId: string) => {
    try {
      await transactionServices.delete(transactionId);

      if (updatedTransactions) {
        const remainingTransactions = updatedTransactions.filter(
          (transaction) => transaction.id !== transactionId
        );

        handlerUpdateAccount(remainingTransactions)
        setUpdatedTransactions(remainingTransactions);

        toast.success("Transação excluída com sucesso!");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const handleTransactionDeleteConfirmation = (transactionId: string) => {
    const confirmDelete = window.confirm(
      "Você tem certeza que deseja excluir esta transação?"
    );

    if (confirmDelete) {
      handleTransactionDelete(transactionId);
    }
  };

  const calculateTotalAmount = (responseData: ITransaction[]) => {
    return responseData.reduce((total, item) => {
      const amount = parseFloat(item.amount.replace('R$', '').trim().replace('.', '').replace(',', '.'));
      return total + amount;
    }, 0);
  };

  const handlerUpdateAccount = async (responseData: ITransaction[]) => {
    const accountJoana =  {
      accountNumber: '123456789',
      balance: calculateTotalAmount(responseData || []),
      currency: 'BRL',
      accountType: 'Conta Corrente'
    }
    setBalance(accountJoana.balance)
    await accountServices.updateAccountById('123456789', accountJoana);
  }

  return (
    <div className="bg-gray-100 p-8 rounded-xl w-full max-w-full h-full shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-bold">Extrato</h2>
      </div>

      <ul className="flex flex-col gap-5 text-left pt-5">
        {updatedTransactions.length > 0 ? (
          updatedTransactions.map((transaction, index) => (
            <TransactionItem
              destinationPageName={destinationPageName}
              item={transaction}
              key={index}
              onDelete={() =>
                handleTransactionDeleteConfirmation(transaction.id!)
              }
            />
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
