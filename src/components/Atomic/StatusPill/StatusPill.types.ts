import { states } from './constants'
import { ReactNode } from 'react'

export type StatusPillStatusType = (typeof states)[keyof typeof states]

export type Props = {
    label: string
    status: StatusPillStatusType
    pending?: {
        text: string
        onClick: () => void
    }
    tooltipText?: ReactNode
}
