import { FC, ReactNode } from 'react'
import { DescriptionProps, HeadlineProps, SubHeadlineProps, GroupHeadlineProps, ToggleConfigurationProps } from './Components'

export interface ComponentType<P> extends FC<P> {
    Description: FC<DescriptionProps>
    Headline: FC<HeadlineProps>
    SubHeadline: FC<SubHeadlineProps>
    GroupHeadline: FC<GroupHeadlineProps>
    ToggleConfiguration: FC<ToggleConfigurationProps>
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
