import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '../components'

const meta = {
  title: 'App/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderFirst: Story = {
  args: {
    text: 'App first',
  },
}

export const HeaderSecond: Story = {
  args: {
    text: 'App second',
  },
}

export const HeaderThird: Story = {
  args: {
    text: 'App third',
  },
}
