import type { Meta, StoryObj } from '@storybook/react';
import ButtonAtom from './index';

const meta = {
  title: 'Atoms/Button',
  component: ButtonAtom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof ButtonAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonLabel: 'Primary',
    disabled: false,
    disableElevation: false,
    size: 'medium',
    variant: 'contained',
  },
};
