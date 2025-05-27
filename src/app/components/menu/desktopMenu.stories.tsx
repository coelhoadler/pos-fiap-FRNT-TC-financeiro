import type { Meta, StoryObj } from '@storybook/react'
import { DesktopMenu } from './menu'

const meta: Meta<typeof DesktopMenu> = {
   title: 'Tech Challenge Components/DesktopMenu',    
    component: DesktopMenu,
}

export default meta

type Story = StoryObj<typeof DesktopMenu>
export const Default: Story = {
    args: {
        menuItems: [
            { title: 'Inicio', path: '/home' },
            { title: 'Transferências', path: '/extract' },
            { title: 'Investimentos', path: '#investimentos' },
            { title: 'Outros serviços', path: '#outros-servicos' },
        ],
    },
    render: (args: any) => <DesktopMenu {...args} />,
    parameters: {
        layout: 'fullscreen',
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
          <div
            className="flex flex-col w-full min-h-[200px] gap-8 mx-auto p-5 bg-white rounded-[8px] shadow-md"
          >
            <Story />
          </div>
        ),
      ],

    tags: ['autodocs'],
}
