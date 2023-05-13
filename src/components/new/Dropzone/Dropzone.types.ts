import { ReactNode } from 'react'
import { Accept, FileError } from 'react-dropzone'

export type CustomFileRenderType = {
    format: string
    icon: string
}

export type Props = {
    accept?: Accept
    customFileRenders?: CustomFileRenderType[]
    description?: ReactNode
    disabled?: boolean
    maxFiles?: number
    maxSize?: number
    title: string
    validator?: <T extends File>(file: T) => FileError | FileError[] | null
}
