import FormTransaction from '@/app/components/formTrasaction/formTransaction';

export default function Home() {
    return (
        <section className='flex flex-col gap-4'>
            <h1> -> card de boas vindas</h1>
            <h1> -> card de adicionar novo extrato</h1>
            <FormTransaction />
        </section>
    );
}
