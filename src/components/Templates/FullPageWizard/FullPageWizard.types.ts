import { ReactNode } from 'react'

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
}
