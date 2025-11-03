import type { Meta, StoryObj } from '@storybook/react-vite';
import StoryCard from './StoryCard';



const meta = {
  component: StoryCard,
} satisfies Meta<typeof StoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'The Brave Little Tailor',
        description: 'A classic fairy tale about a clever tailor who outsmarts giants and wins a kingdom.',
        imageUrl: 'https://picsum.photos/200/100',
    },
};
