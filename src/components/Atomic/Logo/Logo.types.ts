export type Props = {
    collapsed?: boolean
    css?: any
    logo: { height: string | number; width: string | number; source: string }
    className?: string
    onResized?: (height: number, width: number) => void
    onClick?: () => void
    title?: string
}
