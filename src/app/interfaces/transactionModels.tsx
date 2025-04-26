export interface ITypeTransaction {
  id: string;
  description: string;
}
export interface ITransaction {
  typeTransaction: ITypeTransaction;
  amount: string;
  date: Date;
  accountNumber: string;
}
