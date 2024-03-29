import { FormEvent, ReactNode } from 'react'

type SocialProviderType = {
    providerId: string
    loginUrl: string
    alias: string
    displayName?: string
}

export type Props = {
    action?: string
    actions?: ReactNode | ReactNode[]
    autoComplete?: boolean
    className?: string
    cta: ReactNode | ReactNode[]
    id?: string
    inputs: ReactNode | ReactNode[]
    method?: string
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void
    socialProviders?: SocialProviderType[]
    terms?: ReactNode
}

export const defaultProps: Partial<Props> = {
    method: 'post',
}
