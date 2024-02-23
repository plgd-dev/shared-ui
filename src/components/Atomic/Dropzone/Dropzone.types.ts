import { ReactNode } from 'react'
import { Accept, FileError } from 'react-dropzone'

export type CustomFileRenderType = {
    format: string
    icon: ReactNode
}

export type Props = {
    accept?: Accept
    customFileRenders?: CustomFileRenderType[]
    description?: ReactNode
    disabled?: boolean
    maxFiles?: number
    maxSize?: number
    onFileDrop?: (fileContent: string) => void
    onFilesDrop?: (files: string[]) => void
    renderThumbs?: boolean
    smallPadding?: boolean
    title: string
    validator?: <T extends File>(file: T) => FileError | FileError[] | null
}

export const defaultProps: Partial<Props> = {
    renderThumbs: true,
}
