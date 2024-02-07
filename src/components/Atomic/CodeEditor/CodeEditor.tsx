import { FC, useCallback, useMemo } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { loadLanguage } from '@uiw/codemirror-extensions-langs'
import isFunction from 'lodash/isFunction'
import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'
import { useTheme } from '@emotion/react'

import { Props, defaultProps } from './CodeEditor.types'
import * as styles from './CodeMirror.styles'
import { getSizeInPx } from '../_utils/commonStyles'
import { ThemeType } from '../_theme'

const CodeEditor: FC<Props> = (props) => {
    const { disabled, height, onChange, value } = { ...defaultProps, ...props }
    const globalTheme: ThemeType = useTheme()

    const handleChange = useCallback(
        (v: string) => {
            isFunction(onChange) && onChange(v)
        },
        [onChange]
    )

    const extensions = useMemo(() => {
        const ext = []

        if (isFunction(loadLanguage)) {
            ext.push(loadLanguage('markdown') as any)
        }

        return ext
    }, [])

    const theme = useMemo(
        () =>
            createTheme({
                theme: 'light',
                settings: {
                    background: globalTheme?.colors?.CodeEditor.background,
                    lineHighlight: globalTheme?.colors?.CodeEditor.lineHighlight,
                    selection: globalTheme?.colors?.CodeEditor.selection,
                },
                styles: [
                    { tag: t.comment, color: '#787b8099' },
                    { tag: t.variableName, color: '#0080ff' },
                    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
                    { tag: t.number, color: '#5c6166' },
                    { tag: t.bool, color: '#5c6166' },
                    { tag: t.null, color: '#5c6166' },
                    { tag: t.keyword, color: '#5c6166' },
                    { tag: t.operator, color: '#5c6166' },
                    { tag: t.className, color: '#5c6166' },
                    { tag: t.definition(t.typeName), color: '#5c6166' },
                    { tag: t.typeName, color: '#5c6166' },
                    { tag: t.angleBracket, color: '#5c6166' },
                    { tag: t.tagName, color: '#5c6166' },
                    { tag: t.attributeName, color: '#5c6166' },
                ],
            }),
        []
    )

    return (
        <CodeMirror
            basicSetup={{
                foldGutter: false,
                drawSelection: true,
            }}
            css={styles.editor}
            editable={disabled === true ? false : undefined}
            extensions={extensions}
            height={getSizeInPx(height!)}
            onChange={(v) => handleChange(v)}
            theme={theme}
            value={value}
        />
    )
}

CodeEditor.displayName = 'CodeEditor'
CodeEditor.defaultProps = defaultProps

export default CodeEditor
