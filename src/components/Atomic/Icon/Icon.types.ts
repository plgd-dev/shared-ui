import { FC, SVGProps } from 'react'

export type Props = {
    className?: string
    icon: string
    id?: string
    onCompleted?: (name: string, SvgIcon: FC<SVGProps<SVGSVGElement>> | undefined) => void
    onError?: (err: Error) => void
    size?: number
} & SVGProps<SVGSVGElement>

export const defaultProps = {
    size: 16,
}
