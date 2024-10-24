import { ReactNode } from 'react'

export type Props = {
    content: ReactNode
    dataTestId?: string
    header: ReactNode
    isIframeMode?: boolean
    leftPanel?: ReactNode
    mockApiMode?: boolean
}
