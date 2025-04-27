export interface ITypeTransaction {
  id: string;
  description: string;
}

export interface ITransaction {
  id: string;
  typeTransaction: ITypeTransaction;
  amount: string;
  date: string;
  accountNumber: string;
}
