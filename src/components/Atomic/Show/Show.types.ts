import { FC, ReactElement, ReactNode } from 'react'

export type Props = {
    children: ReactNode
}

export interface ComponentType<P> extends FC<P> {
    When: FC<WhenProps>
    Else: FC<ElseProps>
}

export type WhenProps = {
    isTrue: boolean
    children: any
}

export type ElseProps = {
    render: ReactNode
    children: any
}
