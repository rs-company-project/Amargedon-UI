import { Meta, StoryObj } from '@storybook/react'
import { CardBilingsDesktop, ICardBilingsDesktop } from '../lib/components/CardBillingsDesktop'
import { InfoStatus } from "../lib/components/InfoStatus";
import { CurrencyCircleDollar, FilePdf } from "phosphor-react";

export default {
    title: 'Components/CardBilingsDesktop',
    component: CardBilingsDesktop.Root,
    args: {
        namePlan: 'PLANO PLUS',
        dueDate: '20 de nov de 2022',
        price: '200,00',
        coin: 'R$',
        infoStatus: (
            <InfoStatus label='pendente' color='golden'/>
        ),
        children: (
            <>
            <div className='ml-20'>
            <CardBilingsDesktop.Icon>
                <CurrencyCircleDollar weight='fill' width={29} height={29}/>
            </CardBilingsDesktop.Icon>
            </div>
            <div className='ml-10'>
            <CardBilingsDesktop.Icon>
                <FilePdf weight='fill' width={29} height={29} />
            </CardBilingsDesktop.Icon>
            </div>
            </>
        )
    }
} as Meta<ICardBilingsDesktop>

export const Default = {}
