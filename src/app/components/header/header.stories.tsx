import type { Meta, StoryObj } from '@storybook/react'
import Header from './header'

const meta: Meta<typeof Header> = {
    title: 'Tech Challenge Components/Header',
    component: Header,
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
    args: {
        nameUser: 'Default User',
    },
    render: (args) => <Header {...args} />,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#000000' },
            ],
        },
        height: '250px',
        width: '100vw',
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

