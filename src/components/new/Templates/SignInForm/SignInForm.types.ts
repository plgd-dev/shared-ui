import { FormEvent, ReactNode } from 'react'

export type Props = {
    action?: string
    actions?: ReactNode | ReactNode[]
    autoComplete?: boolean
    cta: ReactNode | ReactNode[]
    footerActions?: boolean
    inputs: ReactNode | ReactNode[]
    method?: string
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    terms?: ReactNode
}

export const defaultProps: Partial<Props> = {
    footerActions: true,
    method: 'post',
}
