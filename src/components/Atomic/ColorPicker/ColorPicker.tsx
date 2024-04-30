import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChromePicker, ColorResult, RGBColor } from 'react-color'
import { offset, shift, useFloating } from '@floating-ui/react'
import { useTheme } from '@emotion/react'
import isFunction from 'lodash/isFunction'

import { Props, defaultProps } from './ColorPicker.types'
import * as styles from './ColorPicker.styles'
import { get } from '../_theme'
import { rgbToHex, hexToRgbA } from '../_utils/commonStyles'
import { colors } from '../_utils/colors'

const ColorPicker: FC<Props> = (props) => {
    const { defaultColor: defaultColorProps, className, dataTestId, id, menuProps, portalTarget, onToggle, onColorChange } = { ...defaultProps, ...props }
    const defaultColor: RGBColor = useMemo(() => {
        if (typeof defaultColorProps === 'string') {
            if (defaultColorProps.length === 7) {
                // hex color
                return hexToRgbA(defaultColorProps, 1, true) as RGBColor
            } else {
                // rgba color
                const parsed = defaultColorProps.split('(')[1].split(')')[0].split(',')
                return {
                    r: parseInt(parsed[0]),
                    g: parseInt(parsed[1]),
                    b: parseInt(parsed[2]),
                    a: parseFloat(parsed[3]),
                }
            }
        } else if (defaultColorProps) {
            return defaultColorProps
        }

        return hexToRgbA(colors.primary, 1, true) as RGBColor
    }, [defaultColorProps])

    const [color, setColor] = useState<RGBColor>(defaultColor)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setColor(defaultColor)
    }, [defaultColor])

    const { x, y, refs, strategy } = useFloating({
        placement: menuProps?.placement || 'bottom-start',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })

    const ref = useRef(null)
    const theme = useTheme()

    const getValue = useCallback((c: RGBColor) => (c.a !== 1 ? `rgba(${c.r},${c.g},${c.b},${c.a})` : rgbToHex(c.r, c.g, c.b)), [])

    const handleChange = useCallback(
        (color: ColorResult) => {
            setColor(color.rgb)
            isFunction(onColorChange) && onColorChange(getValue(color.rgb))
        },
        [getValue, onColorChange]
    )

    useEffect(() => {
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (ref?.current && !ref?.current?.contains(event.target)) {
                setOpen(false)
                isFunction(onToggle) && onToggle(false)
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, [ref, open, onToggle])

    const FloatingPanel = (
        <div
            css={styles.floatingMenu}
            ref={refs.setFloating}
            style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
            }}
        >
            <ChromePicker
                className='color-picker'
                color={color}
                onChange={handleChange}
                styles={{
                    default: {
                        body: {
                            background: get(theme, `ColorPicker.background`),
                        },
                    },
                }}
            />
        </div>
    )

    return (
        <div className={className} id={id} ref={ref}>
            <div
                css={[styles.colorPicker, getValue(color).startsWith('#') ? styles.hex : styles.rgba]}
                data-test-id={dataTestId}
                onClick={() => setOpen((prev) => !prev)}
            >
                <div
                    css={styles.color}
                    style={{
                        background: getValue(color),
                    }}
                />
                {color ? <span css={styles.label}>{getValue(color)}</span> : null}
            </div>
            {open && portalTarget && createPortal(FloatingPanel, portalTarget as Element)}
            {open && !portalTarget && FloatingPanel}
        </div>
    )
}

ColorPicker.displayName = 'ColorPicker'

export default ColorPicker
