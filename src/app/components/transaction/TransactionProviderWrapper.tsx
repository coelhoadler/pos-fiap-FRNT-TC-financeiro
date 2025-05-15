import React, { useEffect } from 'react';
import { TransactionProvider } from '@/app/context/TransactionContext';
import { ITypeTransaction } from '@/app/interfaces/transactionModels';

interface TransactionProviderWrapperProps {
    children: React.ReactNode;
    initialValues?: {
        id?: string;
        typeTransactionEdit?: ITypeTransaction;
        valueEdit?: string;
        typeTransaction?: ITypeTransaction[];
    };
}

export const TransactionProviderWrapper: React.FC<TransactionProviderWrapperProps> = ({
    children,
    initialValues
}) => {
    useEffect(() => {
        if (initialValues) {
            const event = new CustomEvent('setTransactionContext', {
                detail: initialValues
            });
            window.dispatchEvent(event);
        }
    }, [initialValues]);

    return <TransactionProvider>{children}</TransactionProvider>;
};
