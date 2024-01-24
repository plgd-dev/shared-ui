export const fontPrimary = "'Poppins', sans-serif"
export const fontSecondary = "'Circular Pro', sans-serif"

export const commonStyles = {
    fontPrimary,
    fontSecondary,
}

export const hexToRgbA = (hex: string, opacity = 1, raw = false) => {
    let c: any = ''
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('')
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]]
        }
        c = '0x' + c.join('')

        if (raw) {
            return { r: (c >> 16) & 255, g: (c >> 8) & 255, b: c & 255, a: opacity }
        }

        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`
    }

    if (raw) {
        return { r: 255, g: 255, b: 255, a: 1 }
    }

    return ''
}

export const rgbToHex = (r: number, g: number, b: number) =>
    '#' +
    [r, g, b]
        .map((x) => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        })
        .join('')

export const getSizeInPx = (size: string | number) => (typeof size === 'string' ? size : `${size}px`)

export const getNumberFromPx = (size: string) => parseInt(size.replace('px', ''), 10)
