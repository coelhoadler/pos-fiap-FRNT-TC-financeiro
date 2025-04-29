import React from 'react';
import { LuPencil } from 'react-icons/lu';
import { FaTrashAlt } from 'react-icons/fa';
import { ITransaction } from '@/app/interfaces/transactionModels';
import { formatCurrency, formatDate } from '@/app/shared/utils';
import { useTransaction } from '@/app/context/TransactionContext';

interface TransactionItemProps {
    item: Partial<ITransaction>;
    onDelete: (transactionId: string) => void;
}
const TransactionItem: React.FC<TransactionItemProps> = ({
    item,
    onDelete,
    ...props
}) => {
    const { setId, setTypeTransaction, setValue } = useTransaction();
    
    const handleEditTransaction = (id: string, transactionTypeID: string, value: string) => {
        setId(id);
        setTypeTransaction(transactionTypeID);
        setValue(value);
    };

    // const handleEditTransaction = (id: string, transactionTypeID: string, value: string) => {
    //     console.log('Edit Transaction:', id, transactionTypeID, value);
    //     return (
    //         <FormTransaction transactionId={id} transactionTypeID={transactionTypeID} initialValue={value} />
    //     );
    // };    

    return (
        <div className="mb-4 pb-4 border-b border-link" {...props}>
            <p className="text-link font-semibold">
                {formatDate(item.date || '')}
            </p>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-md">{item.typeTransaction?.description}</p>
                    <p
                        className={`text-md font-bold ${parseFloat(item.amount || '0') < 0
                                ? 'text-red-600'
                                : 'text-black'
                            }`}
                    >
                        {parseFloat(item.amount || '0') < 0 ? '-' : ''} {' '}
                        {formatCurrency(Math.abs(parseFloat(item.amount || '0')))}
                    </p>
                </div>
                <p className="text-sm flex flex-col gap-3.5 text-white">
                    <button 
                        title='Editar' 
                        className="bg-primary rounded-full h-[40px] w-[40px] flex items-center justify-center"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleEditTransaction(item.id!, item.typeTransaction?.id!, item.amount!);
                        }}>
                        <LuPencil size={18} className='cursor-pointer' />
                    </button>
                    <button
                        title='Excluir'
                        className="bg-primary rounded-full h-[40px] w-[40px] flex items-center justify-center"
                        onClick={() => onDelete(item.id || '')}
                    >
                        <FaTrashAlt size={18} className='cursor-pointer' />
                    </button>
                </p>
            </div>
        </div>
    );
};

export default TransactionItem;