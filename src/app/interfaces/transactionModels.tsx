export interface ITypeTransaction {
  id: string,
  description: string
}
export interface ITransaction {
  typeTrasaction: ITypeTransaction,
  amount: string,
  date: Date,
  accountNumber: string
}
