export interface ITypeTransaction{
  id: number,
  description: string
}

export interface ITypeTransactionResponse {
    data: ITypeTransaction[]
    status: number
    statusText: string
}