export const uiColorMap = {
    plgd: {
        primary: '#2261AE',
        primaryBonus: '#007BBF', // bonus
        primaryBright: '#87CEF2', // bright
        primaryDarken: '#0A2965', // darken
        primaryHover: '#1D589F', // hover
        light: '#F4F9FB',
        yellow: '#FEBF40',
        red: '#D74E3A',
        redBackground: '#F9E3DF',
        green: '#52c5a2',
        info: undefined,
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
        primaryDarken: '#00adb4',
        primary: '#00adb4',
        primaryHover: '#00adb4',
        primaryBonus: '#00BEDC',
        primaryBright: '#00adb4',
        yellow: '#ffd732',
        red: '#ef0137',
        green: '#00d7a0',
        info: '#5FBDEB',
        neutral900: '#000028',
        neutral800: '#23233c',
        neutral700: '#353640',
        neutral600: '#000028',
        neutral500: '#81868D',
        neutral400: '#000028',
        neutral300: '#000028',
        neutral200: '#000028',
        neutral100: '#000028',
        neutral000: '#FFFFFF',
        secondary: '#D7D8DA',
        tertiary: '#D7D8DA',
        disabled: '#D7D8DA',
    },
}

export const colors = uiColorMap.plgd

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
