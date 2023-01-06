import { colors, colorsVariants } from '../_utils/colors'

const theme = {
    Button: {
        primary: {
            background: colors.primary,
            border: colors.primary,
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
            borderColor: colors.primary,
            color: colors.primary,
            hover: {
                background: colorsVariants.secondary.background,
                borderColor: colorsVariants.secondary.hover,
                color: colorsVariants.secondary.hover,
            },
            disabled: {
                background: colorsVariants.secondary.background,
                borderColor: colors.disabled,
                color: colors.disabled,
            },
        },
        tertiary: {
            background: colorsVariants.tertiary.background,
            borderColor: colors.tertiary,
            color: colorsVariants.tertiary.text,
            hover: {
                background: colorsVariants.tertiary.hover,
                borderColor: colors.tertiary,
                color: colorsVariants.tertiary.text,
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
