import { Meta, StoryObj } from '@storybook/react'
import { CardDeviceHistoric, ICardDeviceHistoricProps } from './CardDeviceHistoric'

export default {
    title: 'Components/CardDeviceHistoric',
    component: CardDeviceHistoric,
    args: {
        deviceName: 'Administração',
        image: 'https://cdn-icons-png.flaticon.com/512/5835/5835688.png',
        call: 'not-met',
        time: '1 minuto 5 segundos',
        status: 'off'
    },
    argTypes: {
        call: {
            options: ['answered', 'not-met'],
            control: {
                type: 'inline-radio'
            }
        },
        status: {
            options: ['on', 'off'],
            control: {
                type: 'inline-radio'
            }
        }
    }
    
} as Meta<ICardDeviceHistoricProps>

export const Default = {}
export const Online:StoryObj<ICardDeviceHistoricProps> = {
    args: {
        deviceName: 'Administração',
        image: 'https://cdn-icons-png.flaticon.com/512/5835/5835688.png',
        call: 'answered',
        time: '1 minuto 5 segundos',
        status: 'on'
    },
}
