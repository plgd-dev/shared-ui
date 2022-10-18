import { FC, SVGProps } from 'react'

export type UseDynamicSVGImportOptions = {
    onCompleted?: (name: string, SvgIcon: FC<SVGProps<SVGSVGElement>> | undefined) => void
    onError?: (err: Error) => void
}

export type Props = {
    icon: string
    id?: string
    size?: number
}

export const defaultProps = {
    size: 16,
}
