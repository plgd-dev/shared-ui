import { colors, colorsVariants } from '../_utils/colors'

const theme = {
    Button: {
        primary: {
            background: colors.primary,
            borderColor: colors.primary,
            color: '#23233C',
            hover: {
                background: colors.primaryHover,
                borderColor: colors.primaryHover,
                color: '#23233C',
            },
            disabled: {
                background: colors.disabled,
                borderColor: colors.disabled,
                color: colors.neutral000,
            },
        },
        secondary: {
            background: '#00af8e',
            borderColor: colors.primaryDarken,
            color: '#fff',
            hover: {
                background: colors.primaryDarken,
                borderColor: colors.primaryDarken,
                color: colors.neutral000,
            },
            disabled: {
                background: colorsVariants.secondary.background,
                borderColor: colors.disabled,
                color: colors.disabled,
            },
        },
        tertiary: {
            background: colors.neutral100,
            borderColor: colors.neutral100,
            color: colors.neutral900,
            hover: {
                background: colors.neutral300,
                borderColor: colors.neutral300,
                color: colors.neutral900,
            },
            disabled: {
                background: colors.neutral100,
                borderColor: colors.neutral100,
                color: colors.neutral300,
            },
        },
        filter: {
            background: '#23233c',
            borderColor: '#23233c',
            color: '#cacaca',
            hover: {
                background: '#23233c',
                borderColor: '#23233c',
                color: '#fff',
            },
            disabled: {
                background: colors.tertiary,
                borderColor: colors.tertiary,
                color: colors.disabled,
            },
        },
    },
}

export default theme
