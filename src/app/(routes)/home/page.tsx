import '@/app/styles/globals.css';
import FormTransaction from '@/app/components/formTrasaction/formTransaction';
import CardBalance from '@/app/components/cardBalance/cardBalance';

export default function Home() {
    return (
        <>
            <div className="flex  flex-col w-full lg:max-w-[720px] h-max gap-10 mx-auto mt-10 mb-10 p-5 bg-white rounded-[8px] shadow-md">
            <CardBalance balance={1000} />
            <FormTransaction />
            </div>
        </>
    );
}
