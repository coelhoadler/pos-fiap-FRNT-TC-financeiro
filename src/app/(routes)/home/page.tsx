
import AccountStatement from '@/app/components/accountStatement/AccountStatement';
import CardBalance from '@/app/components/cardBalance/cardBalance'
import FormTransaction from '@/app/components/transaction/transaction'
import '@/app/styles/globals.css';

export default function Home() {
  return (
    <>
      <div className="flex w-full h-full gap-3 mx-auto max-lg:flex-col ">
        <div className="flex flex-col bg-white rounded-[8px] shadow-md p-5 w-full gap-4">
          <CardBalance balance={1000} />
          <FormTransaction />
        </div>
        <div className="min-w-[350px]">
          <AccountStatement />
        </div>
      </div>
    </>
  );
}
