'use client'

import { ITypeTransaction } from '@/app/interfaces/TransactionModels';

import { ApiServices } from '../ApiServices';

export const typeTransactionService = new ApiServices<ITypeTransaction>('/typeTransaction');
