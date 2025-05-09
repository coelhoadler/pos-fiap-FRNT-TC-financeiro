import type { Meta, StoryObj } from '@storybook/react'
import FormTransaction from './formTransaction'

const meta: Meta<typeof FormTransaction> = {
    title: 'Tech Challenge Components/FormTransaction',
    component: FormTransaction,
}

export default meta

type Story = StoryObj<typeof FormTransaction>

export const Default: Story = {
    args: {
        typeTransactionOptions: [
            { id: '1', description: 'Câmbio e Moedas' },
            { id: '2', description: 'DOC/TED' },
            { id: '3', description: 'Empréstimo e Financiamento'},
        ],
    },
    render: (args: unknown) => <FormTransaction {...(args as Record<string, any>)} />,
    parameters: {
        layout: '',
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#000000' },
            ],
        },
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
