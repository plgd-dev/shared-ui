import { colors, colorsVariants } from '../_utils/colors'

const theme = {
    Button: {
        primary: {
            background: colors.primary,
            borderColor: colors.primary,
            color: colors.neutral000,
            hover: {
                background: colors.primaryHover,
                borderColor: colors.primaryHover,
                color: colors.neutral000,
            },
            disabled: {
                background: colors.disabled,
                borderColor: colors.disabled,
                color: colors.neutral000,
            },
        },
        secondary: {
            background: colorsVariants.secondary.background,
            borderColor: colors.primaryDarken,
            color: colors.primaryDarken,
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
            background: colorsVariants.tertiary.background,
            borderColor: colors.neutral300,
            color: colorsVariants.tertiary.text,
            hover: {
                background: colors.neutral000,
                borderColor: colors.primary,
                color: colors.primary,
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
