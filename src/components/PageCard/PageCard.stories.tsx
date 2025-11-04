import type { Meta, StoryObj } from '@storybook/react-vite';
import Page from './PageCard';




const meta = {
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Page = StoryObj<typeof meta>;

export const Default: Page = {
    args: {

    },
};
