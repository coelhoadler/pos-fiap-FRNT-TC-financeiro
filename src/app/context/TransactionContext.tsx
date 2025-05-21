'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

import { ApiServices } from "../api/apiServices";
import { ITransaction, ITypeTransaction } from "../interfaces/transactionModels";
import { typeTransactionService } from "../api/typeTransactionService/typeTransactionServices";
import { transactionServices } from "../api/transactionServices/transactionServices";
import { accountServices } from "../api/accountServices/accountServices";

type TransactionContextType = {
  id: string;
  setId: (id: string) => void;
  valueEdit: string;
  setValueEdit: (value: string) => void;
  extract: any[];
  setExtract: (extract: any[]) => void;
  transactionServices: ApiServices<ITransaction>;
  typeTransactionService: ApiServices<ITypeTransaction>;
  typeTransaction: ITypeTransaction[];
  setTypeTransaction: (typeTransaction: ITypeTransaction[]) => void;
  typeTransactionEdit: ITypeTransaction;
  setTypeTransactionEdit: (typeTransaction: ITypeTransaction) => void;
  balance: number;
  setBalance: (balance: number) => void;
};
 
const TransactionContext = createContext<TransactionContextType | undefined>(undefined);
 
type TransactionProviderProps = {
  children: ReactNode;
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
 
export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [id, setId] = useState("")
  const [valueEdit, setValueEdit] = useState("")
  const [extract, setExtract] = useState<any[]>([])
  const [typeTransaction, setTypeTransaction] = useState<ITypeTransaction[]>([])
  const [typeTransactionEdit, setTypeTransactionEdit] = useState<ITypeTransaction>({} as ITypeTransaction)
  const [balance, setBalance] = useState<number>(0)

  useEffect(() => {
    const fetchTransaction = async () => { 
      const responseData = await transactionServices.getAll();
      setExtract(responseData || []);
      handlerUpdateAccount(responseData || []);
    }
    fetchTransaction()

    const fetchTypeTransaction = async () => { 
      const responseData = await typeTransactionService.getAll();
      setTypeTransaction(responseData || []);
    }

    fetchTypeTransaction()
  },[])

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
    <TransactionContext.Provider value={{ 
      id, 
      setId,  
      valueEdit, 
      setValueEdit,
      extract, 
      setExtract,
      transactionServices: transactionServices,
      typeTransactionService: typeTransactionService,
      typeTransaction,
      setTypeTransaction,
      typeTransactionEdit, setTypeTransactionEdit,
      balance,
      setBalance
    }}>
        {children}
    </TransactionContext.Provider>
  );
};
 
export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};