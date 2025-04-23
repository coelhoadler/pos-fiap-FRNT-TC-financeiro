import type { Meta, StoryObj } from '@storybook/react'
import { MenuItens } from './Menu'

const meta: Meta<typeof MenuItens> = {
   title: 'Tech Challenge Components/MenuItens',    
    component: MenuItens,
}

export default meta

type Story = StoryObj<typeof MenuItens>
export const Default: Story = {
    args: {
        onClickItem: () => {},
    },
    render: (args: any) => <MenuItens {...args} />,
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
