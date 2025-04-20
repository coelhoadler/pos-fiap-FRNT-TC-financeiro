'use client'

import { ITypeTransaction } from '@/app/interfaces/transactionModels';

import { ApiServices } from '../ApiServices';

export const typeTransactionService = new ApiServices<ITypeTransaction>('/typeTransaction');
