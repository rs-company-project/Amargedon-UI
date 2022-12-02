import { Meta, StoryObj } from '@storybook/react'
import {DashCard, IDashCardProps} from '../lib/components/DashCard'

export default {
  title: 'Components/DashCard',
  component: DashCard,
  args: {
    title:'Aparelhos',
    typeOfCall: 'Conectados',
    qtdCalls: 11
  }
} as Meta<IDashCardProps>

export const Default: StoryObj<IDashCardProps> = {}