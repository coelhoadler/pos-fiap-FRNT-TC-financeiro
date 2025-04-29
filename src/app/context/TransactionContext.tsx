'use client'

import { createContext, useContext, useState, ReactNode } from "react";
 
type TransactionContextType = {
  id: string;
  setId: (id: string) => void;
  typeTransaction: string;
  setTypeTransaction: (type: string) => void;
  value: string;
  setValue: (value: string) => void;
};
 
const TransactionContext = createContext<TransactionContextType | undefined>(undefined);
 
type TransactionProviderProps = {
  children: ReactNode;
};
 
export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [id, setId] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("");
  const [value, setValue] = useState("");
 
  return (
    <TransactionContext.Provider value={{ id, setId, typeTransaction, setTypeTransaction, value, setValue }}>
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