import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start h-screen mt-10 mb-2">
      <h2 className='text-2xl font-bold mb-2'>Página não encontrada.</h2>
      <p className='mb-4'>Não foi possível localizar a página que você está procurando.</p>

      <Image
        src="/404.jpg"
        alt="Página não encontrada"
        width={400}
        height={300}
      />
      <br /><br />
      <Link href="/home" className='underline text-blue-500'>Voltar para a Home.</Link>
    </div>
  )
}