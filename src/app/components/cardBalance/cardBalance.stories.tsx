import type { Meta, StoryObj } from '@storybook/react';
import CardBalance from './cardBalance';
import { TransactionProvider } from '../../context/TransactionContext';

import { transactionServices as originalTransactionServices } from '../../api/transactionServices/transactionServices';
import { typeTransactionService as originalTypeTransactionService } from '../../api/typeTransactionService/typeTransactionServices';
import { accountServices as originalAccountServices } from '../../api/accountServices/accountServices';

// Mock dos serviços
const transactionServices = {
  ...originalTransactionServices,
  getAll: async () => [
    {
      id: '1',
      description: 'Compra em loja A',
      amount: 'R$ 100,00',
      date: '2025-05-20T23:03:05.428Z',
      typeTransaction: {
        id: '1',
        name: 'Compra',
        type: 'debit',
      },
    },
    {
      id: '2',
      description: 'Transferência recebida',
      amount: 'R$ 250,00',
      date: '2025-05-16T12:07:56.116Z',
      typeTransaction: {
        id: '2',
        name: 'Transferência',
        type: 'credit',
      },
    },
  ],
};

const typeTransactionService = {
  ...originalTypeTransactionService,
  getAll: async () => [
    { id: '1', name: 'Compra', type: 'debit' },
    { id: '2', name: 'Transferência', type: 'credit' },
  ],
};

const accountServices = {
  ...originalAccountServices,
  updateAccountById: async (id: string, data: any) => {
    console.log('Updating account:', id, data);
    return Promise.resolve();
  },
};

// Override os serviços originais
Object.assign(originalTransactionServices, transactionServices);
Object.assign(originalTypeTransactionService, typeTransactionService);
Object.assign(originalAccountServices, accountServices);

const meta: Meta<typeof CardBalance> = {
  title: 'Tech Challenge Components/CardBalance',
  component: CardBalance,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CardBalance>;

export const Default: Story = {
  render: (args) => <CardBalance {...args} />,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#f5f5f5' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col w-full h-max gap-8 mx-auto p-5 bg-white rounded-[8px] shadow-md">
        <TransactionProvider>
          <Story />
        </TransactionProvider>
      </div>
    ),
  ],
  tags: ['autodocs'],
};
