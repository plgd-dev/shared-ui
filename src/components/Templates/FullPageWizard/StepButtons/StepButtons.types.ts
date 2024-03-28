export type Props = {
    disableNext?: boolean
    i18n: {
        back: string
        continue: string
        formError: string
        requiredMessage: string
    }
    onClickBack?: () => void
    onClickNext: () => void
}
