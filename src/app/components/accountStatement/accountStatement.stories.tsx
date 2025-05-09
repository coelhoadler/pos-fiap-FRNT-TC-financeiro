import type { Meta, StoryObj } from '@storybook/react';
import AccountStatement from './AccountStatement';

const meta: Meta<typeof AccountStatement> = {
  title: 'Tech Challenge Components/AccountStatement',
  component: AccountStatement,
};

export default meta;

type Story = StoryObj<typeof AccountStatement>;

export const Default: Story = {
  args: {},
  render: (args: unknown) => (
    <AccountStatement {...(args as Record<string, any>)} />
  ),
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
