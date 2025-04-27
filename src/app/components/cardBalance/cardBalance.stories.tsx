import type { Meta, StoryObj } from '@storybook/react';
import CardBalance from './CardBalance';

const meta: Meta<typeof CardBalance> = {
  title: 'Tech Challenge Components/CardBalance',
  component: CardBalance,
};

export default meta;

type Story = StoryObj<typeof CardBalance>;

export const Default: Story = {
  args: {
    balance: 1000,
  },
  render: (args: { balance: number }) => <CardBalance {...args} />,
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
      <div className="flex flex-col w-full h-max gap-8 mx-auto p-5 bg-white rounded-[8px] shadow-md">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};
