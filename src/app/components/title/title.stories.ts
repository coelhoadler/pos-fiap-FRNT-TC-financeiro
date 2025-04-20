import type { Meta, StoryObj } from '@storybook/react';
import Title from './title';

const meta = {
  title: 'Tech Challenge Components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Título Padrão',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    text: 'Título Pequeno',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: 'Título Grande',
    size: 'large',
  },
};

export const WithCustomClasses: Story = {
  args: {
    text: 'Título com Classes Customizadas',
    otherClasses: ['text-red-500', 'font-semibold'],
  },
};