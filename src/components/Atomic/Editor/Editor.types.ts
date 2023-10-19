import { CSSProperties, Ref } from 'react'
import { editorModes } from './constants'

export type EditorModeType = (typeof editorModes)[keyof typeof editorModes]

export type Props = {
    autofocus?: boolean
    className?: boolean
    containerRef?: (ref: Ref<any>) => void
    disabled?: boolean
    editorRef?: (ref: Ref<any> | null) => void
    height?: string
    json: string | [] | object
    mode?: EditorModeType
    onChange?: (json: any) => void
    onError?: (error: any) => void
    onResize?: (width: number, height: number, callback: () => void) => void
    onViewChange?: (fullview: boolean) => void
    schema?: [] | object
    style?: CSSProperties
    width?: string
    i18n?: {
        viewText?: string
    }
}

export const defaultProps = {
    height: '300px',
    mode: editorModes.CODE,
    width: '100%',
}
