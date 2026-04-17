import { Positioner } from "~/components/positioner";
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Positioner/Positioner',
    component: Positioner,
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
} satisfies Meta<typeof Positioner>;
  
export default meta;

type Story = StoryObj<typeof meta>;

export const VisualizePosition: Story = {
  args: {
    coordinates: '1,1 NORTH'
  }
};