import { ReactNode } from 'react'

export type Props = {
    content: ReactNode
    header: ReactNode
    isIframeMode?: boolean
    leftPanel?: ReactNode
    mockApiMode?: boolean
}
