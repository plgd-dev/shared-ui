export type Props = {
    disableNext?: boolean
    i18n: {
        back: string
        continue: string
    }
    onClickBack?: () => void
    onClickNext: () => void
}
