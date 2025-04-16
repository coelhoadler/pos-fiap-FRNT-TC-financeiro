
const transactions = [
  {
    month: 'Novembro',
    type: 'Depósito',
    amount: 150,
    date: '18/11/2022',
  },
  {
    month: 'Novembro',
    type: 'Depósito',
    amount: 100,
    date: '21/11/2022',
  },
  {
    month: 'Novembro',
    type: 'Depósito',
    amount: 50,
    date: '21/11/2022',
  },
  {
    month: 'Novembro',
    type: 'Transferência',
    amount: -500,
    date: '21/11/2022',
  },
];

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export default function AccountStatement() {
  return (
    <div className="bg-gray-100 p-8 rounded-xl w-full max-w-full shadow-md">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-bold">Extrato</h2>
        <div className="flex gap-2">
          <button className="bg-teal-900 text-white p-2 rounded-full">
            EDITAR
          </button>
          <button className="bg-teal-900 text-white p-2 rounded-full">
            LIXEIRA
          </button>
        </div>
      </div>



      <ul className="flex flex-col gap-5 text-left pt-5">
      {
        transactions.length > 0 ? (
      transactions.map((tx, index) => (
        <div key={index} className="mb-4 pb-4 border-b border-link pb-2">
          <p className="text-link font-semibold">{tx.month}</p>
          <div className="flex justify-between items-baseline">
            <div>
              <p className="text-lg">{tx.type}</p>
              <p className={`text-lg font-bold ${tx.amount < 0 ? 'text-red-600' : 'text-black'}`}>
                {tx.amount < 0 ? '-' : ''}{formatCurrency(Math.abs(tx.amount))}
              </p>
            </div>
            <p className="text-sm text-gray-400">{tx.date}</p>
          </div>
        </div>
      ))
    ) : (
      <span className="text-gray-500 text-center">
        Nenhuma transação encontrada
      </span>
    )
      }
      </ul>

    </div>
  );
}

