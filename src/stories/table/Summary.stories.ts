import type { Meta, StoryObj } from '@storybook/react'
import { SummaryTable } from '../../components'

const meta = {
  title: 'App/Tables/SummaryTable',
  component: SummaryTable,
  tags: ['autodocs'],
} satisfies Meta<typeof SummaryTable>

export default meta

type Story = StoryObj<typeof meta>

export const One: Story = {
  args: {
    label: 'Button',
  },
}

export const Two: Story = {
  args: {
    label: 'Text',
  },
}

export const Three: Story = {
  args: {
    label: 'Click me!'
  }
}
