'use client'

import axiosClient from '../AxiosClient';
import { ITypeTransaction } from '../../interfaces/transactionModels';

export const getTypeTransaction = async () => {
    try {
        const response = await axiosClient.get('/typeTransaction'); // Usando a instância configurada

        if (response.status === 200) {
            const data: ITypeTransaction[] = response.data;
            return data;
        }

    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
}