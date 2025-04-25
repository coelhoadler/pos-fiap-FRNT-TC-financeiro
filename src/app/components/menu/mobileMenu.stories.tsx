import type { Meta, StoryObj } from '@storybook/react'
import { MobileMenu } from './menu'

const meta: Meta<typeof MobileMenu> = {
   title: 'Tech Challenge Components/MobileMenu',    
    component: MobileMenu,
}

export default meta

type Story = StoryObj<typeof MobileMenu>
export const Default: Story = {
    args: {
        onClickItem: () => {},
    },
    render: (args: any) => <MobileMenu {...args} />,
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
