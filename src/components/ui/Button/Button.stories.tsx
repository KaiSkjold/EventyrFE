import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import './Button.css'
import Sun from '../../Svg/Sun';


const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Black', value: '#000' },
        gray: { name: 'White', value: '#fff' },
      },
    },
    initialGlobals: {
    // Set the initial background color
    backgrounds: { value: 'white' },
  },
  },
  
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBorder: Story = {
    args: {
        children: 'Click Me',
        onClick: () => alert('Button clicked'),
        borderStyle: 'with-border',
    },
};

export const WithoutBorder: Story = {
    args: {
        children: 'Click Me',
        onClick: () => alert('Button clicked'),
        borderStyle: 'no-border',
    },
};

export const WithSunIcon: Story = {
    args: {
        borderStyle: 'no-border',
        children: <Sun width={20} height={20} />,
        onClick: () => alert('Sun icon button clicked'),
    },
};