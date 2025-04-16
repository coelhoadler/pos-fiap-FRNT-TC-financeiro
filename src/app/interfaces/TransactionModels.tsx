export interface ITypeTransaction{
  id: string,
  description: string
}
export interface ITransaction{
  typeTrasaction: ITypeTransaction,
  amount: number,
  date: Date,
  accountNumber: string
}
