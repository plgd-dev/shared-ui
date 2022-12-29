import { states } from './constants'

export type StatusPillStatusType = typeof states[keyof typeof states]

export type Props = {
    label: string
    status: StatusPillStatusType
    pending?: {
        text: string
        onClick: () => void
    }
    tooltipText?: string
}
