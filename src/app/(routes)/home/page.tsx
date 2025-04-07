import '@/app/styles/globals.css';


export default function Home() {
    return (
        <>
            <h1 style={{ color: 'var(--color-danger)' }}>Inline CSS</h1>
            <h2 className="text-[var(--color-warning)]">Tailwind direto com colchete</h2>
            <h3 className="text-success">Classe personalizada via Tailwind</h3>
        </>
    );
}
