import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import './Button.css'


const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWithBorder: Story = {
    args: {
        children: 'Click Me',
        onClick: () => alert('Button clicked'),
        borderStyle: 'with-border',
    },
};

export const DefaultWithoutBorder: Story = {
    args: {
        children: 'Click Me',
        onClick: () => alert('Button clicked'),
        borderStyle: 'no-border',
    },
};