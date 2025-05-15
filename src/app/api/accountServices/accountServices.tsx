import { ApiServices } from "../apiServices"
import { IAccount } from "@/app/interfaces/accountModel"

export const accountServices = new ApiServices<IAccount>("/account")