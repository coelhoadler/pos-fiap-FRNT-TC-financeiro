import { ITransaction } from "@/app/interfaces/transactionModels"
import { ApiServices } from "../ApiServices"

export const transactionServices = new ApiServices<ITransaction>("/transactions")