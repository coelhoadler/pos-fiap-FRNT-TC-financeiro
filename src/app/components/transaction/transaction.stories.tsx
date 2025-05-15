import type { Meta, StoryObj } from '@storybook/react'
import FormTransaction from './transaction'
import { TransactionProviderWrapper } from './TransactionProviderWrapper'
import { ITransaction, ITypeTransaction } from '@/app/interfaces/transactionModels'

const mockTypeTransactions: ITypeTransaction[] = [
    { id: '1', description: 'Câmbio e Moedas' },
    { id: '2', description: 'DOC/TED' },
    { id: '3', description: 'Empréstimo e Financiamento'},
    { id: '4', description: 'Pagamento de Conta'},
    { id: '5', description: 'Transferência PIX'},
]

const mockTransaction: ITransaction = {
    id: '123',
    typeTransaction: mockTypeTransactions[0],
    amount: 'R$ 1.000,00',
    date: new Date().toISOString(),
    accountNumber: '123456789'
}

const meta: Meta<typeof FormTransaction> = {
    title: 'Tech Challenge Components/FormTransaction',
    component: FormTransaction,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Formulário para criar ou editar transações financeiras'
            }
        }
    },
    decorators: [
        (Story) => (
            <div className="flex flex-col w-full h-max gap-8 mx-auto p-5 bg-white rounded-[8px] shadow-md">
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FormTransaction>

export const NovaTransacao: Story = {
    decorators: [
        (Story) => (
            <TransactionProviderWrapper initialValues={{
                typeTransaction: mockTypeTransactions
            }}>
                <Story />
            </TransactionProviderWrapper>
        ),
    ],
    parameters: {
        docs: {
            description: {
                story: 'Estado inicial do formulário para criar uma nova transação'
            }
        }
    }
}

export const EditandoTransacao: Story = {
    args: {
        onlyTransactionEditing: () => console.log('Editando transação...')
    },
    decorators: [
        (Story) => (
            <TransactionProviderWrapper initialValues={{
                id: mockTransaction.id,
                typeTransactionEdit: mockTransaction.typeTransaction,
                valueEdit: mockTransaction.amount,
                typeTransaction: mockTypeTransactions
            }}>
                <Story />
            </TransactionProviderWrapper>
        ),
    ],
    parameters: {
        docs: {
            description: {
                story: 'Estado do formulário quando está editando uma transação existente'
            }
        }
    }
}
