import { CSSProperties, Ref } from 'react'
import { editorModes } from './constants'

export type EditorModeType = (typeof editorModes)[keyof typeof editorModes]

export type EditorRefType = {
    setValue: (value: any) => void
}

export type Props = {
    autofocus?: boolean
    className?: boolean
    containerRef?: (ref: Ref<any>) => void
    dataTestId?: string
    disabled?: boolean
    editorRef?: (ref: Ref<any> | null) => void
    height?: string
    i18n?: {
        viewText?: string
    }
    json: string | [] | object | number | boolean
    mode?: EditorModeType
    onBlur?: (value: any) => void
    onChange?: (json: any) => void
    onError?: (error: any) => void
    onResize?: (width: number, height: number, callback: () => void) => void
    onValidation?: (data: any) => void
    onViewChange?: (fullview: boolean) => void
    schema?: [] | object
    style?: CSSProperties
    width?: string
}

export const defaultProps = {
    height: '300px',
    mode: editorModes.CODE,
    width: '100%',
}
