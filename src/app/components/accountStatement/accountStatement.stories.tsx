import type { Meta, StoryObj } from '@storybook/react';
import AccountStatement from './AccountStatement';
import { TransactionProvider } from '../../context/TransactionContext';

import { transactionServices as originalTransactionServices } from '../../api/transactionServices/transactionServices';
import { typeTransactionService as originalTypeTransactionService } from '../../api/typeTransactionService/typeTransactionServices';
import { accountServices as originalAccountServices } from '../../api/accountServices/accountServices';

const extractMock = [
  {
    id: '1',
    description: 'Compra em loja A',
    amount: 'R$ 100,00',
    date: '2025-05-20T23:03:05.428Z',
    typeTransaction: {
      id: '1',
      name: 'Compra',
      type: 'debit'
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
      type: 'credit'
    },
  },
];

// Mock dos serviços
const transactionServices = {
  ...originalTransactionServices,
  getAll: async () => extractMock,
  delete: async (id: string) => {
    console.log('Deleting transaction:', id);
    return Promise.resolve();
  }
};

const typeTransactionService = {
  ...originalTypeTransactionService,
  getAll: async () => [
    { id: '1', name: 'Compra', type: 'debit' },
    { id: '2', name: 'Transferência', type: 'credit' }
  ]
};

const accountServices = {
  ...originalAccountServices,
  updateAccountById: async (id: string, data: any) => {
    console.log('Updating account:', id, data);
    return Promise.resolve();
  }
};

// Override os serviços originais
Object.assign(originalTransactionServices, transactionServices);
Object.assign(originalTypeTransactionService, typeTransactionService);
Object.assign(originalAccountServices, accountServices);

const meta: Meta<typeof AccountStatement> = {
  title: 'Tech Challenge Components/AccountStatement',
  component: AccountStatement,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AccountStatement>;

export const Default: Story = {
  args: {
    onEditTransaction: () => console.log('Edit transaction clicked'),
  },
  render: (args) => (
    <AccountStatement {...args} />
  ),
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
