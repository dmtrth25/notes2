import type { Meta, StoryObj } from '@storybook/react'
import { TableHead } from '../../components'

const meta = {
  title: 'App/Tables/TableHead',
  component: TableHead,
  tags: ['autodocs'],
} satisfies Meta<typeof TableHead>

export default meta

type Story = StoryObj<typeof meta>

export const Time: Story = {
  args: {
    time: 'Create'
  },
}

export const Name: Story = {
  args: {
    name: 'Name2',
  },
}

export const ContentData: Story = {
  args: {
    content: 'Some content title'
  }
}

export const Dates: Story = {
  args: {
    dates: 'Some data'
  }
}
export const Content: Story = {
  args: {
    actions: 'Actions2'
  }
}
