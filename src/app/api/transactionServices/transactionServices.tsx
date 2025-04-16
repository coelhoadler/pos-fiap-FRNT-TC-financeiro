import { ITransaction } from "@/app/interfaces/TransactionModels"
import { ApiServices } from "../ApiServices"

export const transactionServices = new ApiServices<ITransaction>("/transactions")