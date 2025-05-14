
import { accountServices } from '@/app/api/accountServices/accountServices';
import AccountStatement from '@/app/components/accountStatement/AccountStatement';
import CardBalance from '@/app/components/cardBalance/cardBalance'
import FormTransaction from '@/app/components/transaction/transaction'
import { IAccount } from '@/app/interfaces/accountModel';
import '@/app/styles/globals.css';

export default async function Home() {
  const accountStart: IAccount = await accountServices.getAccountById("123456789"); // Joana accountNumber is 123456789;
  return (
      <div className="flex w-full h-full gap-3 mx-auto max-lg:flex-col ">
        <div className="flex flex-col bg-white rounded-[8px] shadow-md p-5 w-full gap-4">
          <CardBalance balance={accountStart.balance || 0} />
          <FormTransaction />
        </div>
        <div className="min-w-[350px]">
          <AccountStatement />
        </div>
      </div>
  );
}
