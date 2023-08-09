import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'

const meta = {
  title: 'App/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const LabelButton: Story = {
  args: {
    label: 'Button',
    color: 'bg-custom'
  },
}

export const LabelText: Story = {
  args: {
    label: 'Text',
    color: 'bg-cyan-600'
  },
}

export const ClickMe: Story = {
  args: {
    label: 'Click me!',
    color: 'bg-green-700'
  }
}
