import Modal from './Modal';
import { useState } from 'react';
import './Modal.css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Settings from '../../Settings/Settings';

const meta: Meta<typeof Modal> = {
  title: 'ui/Modal',
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;


export const DefaultModal: Story = {
  render: (args) => {
    const StoryComponent = () => {
      const [state, setState] = useState(true);

      return (
        <Modal
          {...args}
          isOpen={state}
          onClose={() => setState(false)}
        />
      );
    };

    return <StoryComponent />;
  },
};
export const ModalWithText: Story = {
  render: (args) => {
    const StoryComponent = () => {
      const [state, setState] = useState(true);

      return (
        <Modal
          {...args}
          isOpen={state}
          onClose={() => setState(false)}
        >
          <p>This is a modal with some text content inside it.</p>
        </Modal>
      );
    };

    return <StoryComponent />;
  },
};
export const ModalWithSettings: Story = {
  render: (args) => {
    const StoryComponent = () => {
      const [state, setState] = useState(true);

      return (
        <Modal
          {...args}
          isOpen={state}
          onClose={() => setState(false)}
        >
            <Settings />
        </Modal>
      );
    };

    return <StoryComponent />;
  },
};