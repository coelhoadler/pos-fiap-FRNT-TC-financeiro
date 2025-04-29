'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

import { ApiServices } from "../api/apiServices";
import { ITransaction, ITypeTransaction } from "../interfaces/transactionModels";
import { typeTransactionService } from "../api/typeTransactionService/typeTransactionServices";
import { transactionServices } from "../api/transactionServices/transactionServices";

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
};
 
const TransactionContext = createContext<TransactionContextType | undefined>(undefined);
 
type TransactionProviderProps = {
  children: ReactNode;
};
 
export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [id, setId] = useState("")
  const [valueEdit, setValueEdit] = useState("")
  const [extract, setExtract] = useState<any[]>([])
  const [typeTransaction, setTypeTransaction] = useState<ITypeTransaction[]>([])
  const [typeTransactionEdit, setTypeTransactionEdit] = useState<ITypeTransaction>({} as ITypeTransaction)


  useEffect(() => {
    const fetchTransaction = async () => { 
      const responseData = await transactionServices.getAll();
      setExtract(responseData || []);
    }
    fetchTransaction()

    const fetchTypeTransaction = async () => { 
      const responseData = await typeTransactionService.getAll();
      setTypeTransaction(responseData || []);
    }

    fetchTypeTransaction()

  },[])

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
      typeTransactionEdit, setTypeTransactionEdit    
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