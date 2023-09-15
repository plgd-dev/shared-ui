export const uiColorMap = {
    light: {
        primaryDarken: '#0A2965', // darken
        primary: '#2261AE',
        primaryHover: '#1D589F', // hover
        primaryBonus: '#007BBF', // bonus
        primaryBright: '#87CEF2', // bright
        light: '#F4F9FB',
        yellow: '#FEBF40',
        red: '#D74E3A',
        green: '#52c5a2',
        neutral900: '#191A1A',
        neutral800: '#252626',
        neutral700: '#474747',
        neutral600: '#757676',
        neutral500: '#81868C',
        neutral400: '#A3A3A3',
        neutral300: '#D7D8DA',
        neutral200: '#E6E9ED',
        neutral100: '#F6F7F9',
        neutral000: '#FFFFFF',
        secondary: '#ffffff',
        tertiary: '#f6f7f9',
        disabled: '#D7D8DA',
    },
    dark: {
        primaryDarken: '#071E4A', // darken
        primary: '#3083DC',
        primaryHover: '#1E5699', // hover
        primaryBonus: '#1398E2', // bonus
        primaryBright: '#5FBDEB', // bright
        light: '#F4F9FB',
        yellow: '#FEB420',
        red: '#C72545',
        green: '#00C48A',
        neutral900: '#22222D',
        neutral800: '#2C2C37',
        neutral700: '#353640',
        neutral600: '#757676',
        neutral500: '#81868C',
        neutral400: '#81868C',
        neutral300: '#D7D8DA',
        neutral200: '#E6E9ED',
        neutral100: '#D7D8DA',
        neutral000: '#D7D8DA',
        secondary: '#ffffff', // TODO
        tertiary: '#f6f7f9', // TODO
        disabled: '#D7D8DA', // TODO
    },
    siemens: {
        primary: '#00adb4',
    },
}

export const colors = uiColorMap.light

export const colorsDark = uiColorMap.dark
export const colorsSiemens = uiColorMap.siemens

export const colorsVariants = {
    primary: {
        background: colors.primary,
        text: colors.neutral000,
        hover: '#1d589f',
    },
    secondary: {
        background: colors.secondary,
        text: colors.primary,
        hover: '#1d589f',
    },
    tertiary: {
        background: colors.neutral000,
        text: colors.neutral900,
        hover: colors.neutral200,
    },
    filter: {
        background: colors.neutral000,
        text: colors.neutral900,
        hover: colors.neutral200,
    },
}
