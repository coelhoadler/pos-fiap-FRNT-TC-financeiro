'use client'

import { ITypeTransaction } from '@/app/interfaces/transactionModels';

import { ApiServices } from '../apiServices';

export const typeTransactionService = new ApiServices<ITypeTransaction>('/typeTransaction');
