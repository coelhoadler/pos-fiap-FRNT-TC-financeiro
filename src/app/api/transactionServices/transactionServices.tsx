import { ITransaction } from "@/app/interfaces/transactionModels"
import { ApiServices } from "../apiServices"

export const transactionServices = new ApiServices<ITransaction>("/transactions")