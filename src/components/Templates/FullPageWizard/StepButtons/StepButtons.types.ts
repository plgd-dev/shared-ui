export type Props = {
    dataTestId?: string
    disableNext?: boolean
    i18n: {
        back: string
        continue: string
        formError: string
        requiredMessage: string
    }
    onClickBack?: () => void
    onClickNext: () => void
    showRequiredMessage?: boolean
}

export const defaultProps: Partial<Props> = {
    showRequiredMessage: true,
}
