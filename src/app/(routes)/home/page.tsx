import CardBalance from '@/app/components/cardBalance/cardBalance';
import FormTransaction from '@/app/components/formTransaction/formTransaction';
import '@/app/styles/globals.css';



export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-full gap-8 mx-auto p-5 bg-white rounded-[8px] shadow-md">
        <CardBalance balance={1000} />
        <FormTransaction />
      </div>
    </>
  );
}
