import "@/app/styles/globals.css";

import CardBalance from "@/app/components/cardBalance/cardBalance";
import FormTransaction from "@/app/components/FormTransaction/FormTransaction";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-max gap-8 mx-auto p-5 bg-white rounded-[8px] shadow-md">
        <CardBalance balance={1000} />
        <FormTransaction />
      </div>
    </>
  );
}
