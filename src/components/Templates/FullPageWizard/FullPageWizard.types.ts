import { FC, ReactNode } from 'react'
import { DescriptionProps, SubHeadlineProps } from './Components'

export interface ComponentType<P> extends FC<P> {
    Description: FC<DescriptionProps>
    SubHeadline: FC<SubHeadlineProps>
}

export type Props = {
    activeStep: number
    children?: ReactNode
    i18n: {
        close: string
    }
    onClose: () => void
    onStepChange: (step: number) => void
    steps: { name: string; description?: string; link?: string }[]
    title: string
    visitedStep?: number
}
