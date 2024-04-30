// @ts-nocheck
import React, { forwardRef, MutableRefObject, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import classNames from 'classnames'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'
import isFunction from 'lodash/isFunction'

import { defaultProps, EditorRefType, Props } from './Editor.types'
import * as styles from './Editor.styles'
import IconShowPassword from '../Icon/components/IconShowPassword'

const Editor = forwardRef<EditorRefType, Props>((props, ref) => {
    const {
        autofocus,
        className,
        containerRef,
        disabled,
        editorRef,
        height: heightProp,
        i18n,
        json,
        mode,
        onBlur,
        onChange,
        onError,
        onResize,
        onViewChange,
        schema,
        style,
        width,
        ...rest
    } = { ...defaultProps, ...props }

    const [height, setHeight] = useState(heightProp)

    const container = useRef()
    const jsonEditor = useRef()
    const resizeObserver = useRef()

    const handleContainerRef = (node: any) => {
        if (containerRef) {
            containerRef(node)
        }

        container.current = node
    }

    const onChangeText = (json: any) => {
        if (onChange) {
            onChange(json)
        }
    }

    const onValidationError = (error: any) => {
        if (onError) {
            onError(error)
        }
    }

    const handleEditorRef = (editor: MutableRefObject<undefined> | null) => {
        if (editorRef) {
            editorRef(editor)
        }
    }

    // Triggers the resize method on the editor when resizing its parent container.
    const handleResize = (entries: any) => {
        const { width, height } = entries?.[0]?.contentRect || {}

        if (isFunction(onResize) && onResize) {
            onResize(width, height, () => {
                // @ts-ignore
                jsonEditor?.current?.aceEditor?.resize?.()
            })
        }
    }

    useEffect(() => {
        if (heightProp !== height) {
            setHeight(heightProp)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heightProp])

    useEffect(() => {
        const options = {
            mode,
            mainMenuBar: false,
            statusBar: false,
            onChangeText,
            onValidationError: onValidationError,
            schema,
        }

        jsonEditor.current = new JSONEditor(container.current, options)
        if (typeof json === 'object') {
            // @ts-ignore
            jsonEditor?.current?.set(json)
        } else if (typeof json === 'string') {
            // @ts-ignore
            jsonEditor?.current?.setText(json)
        }

        if (autofocus) {
            // @ts-ignore
            jsonEditor?.current?.focus()
        }

        const numberOfLines = jsonEditor.current.aceEditor.env.document.doc.$lines.length || 0
        const lineHeight = jsonEditor.current.aceEditor.renderer.lineHeight || 0

        heightProp === undefined && setHeight(Math.max(numberOfLines * lineHeight + 5, 300))

        // lineHeight
        jsonEditor.current.aceEditor.setOptions({
            minLines: 1000,
            fontSize: 14,
            readOnly: disabled,
            // highlightGutterLine: false,
            // showLineNumbers: false,
        })

        if (typeof ResizeObserver === 'function' && container.current) {
            resizeObserver.current = new ResizeObserver(handleResize)
            resizeObserver.current.observe(container.current)
        }

        handleEditorRef(jsonEditor)

        return () => {
            if (jsonEditor && jsonEditor.current) {
                handleEditorRef(null)
                // @ts-ignore
                jsonEditor?.current?.destroy()
            }

            if (typeof ResizeObserver === 'function' && container && container.current) {
                // @ts-ignore
                resizeObserver?.current?.unobserve(container.current)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleBlur = useCallback(() => {
        isFunction(onBlur) && onBlur(jsonEditor?.current?.getText())
    }, [onBlur])

    useImperativeHandle(ref, () => ({
        setValue: (value) => {
            if (typeof json === 'object') {
                // @ts-ignore
                jsonEditor?.current?.set(value)
            } else if (typeof json === 'string') {
                // @ts-ignore
                jsonEditor?.current?.setText(value)
            }
        },
    }))

    return (
        <div
            {...rest}
            className={classNames(className, 'editor', {
                disabled,
                resize: !!ResizeObserver,
            })}
            css={styles.editor}
            onBlur={handleBlur}
            ref={(ref) => handleContainerRef(ref)}
            style={{ ...style, width, height }}
        >
            {isFunction(onViewChange) && i18n?.viewText && (
                <a
                    css={styles.fullSizeBtn}
                    href='#'
                    onClick={(e) => {
                        e.preventDefault()
                        onViewChange()
                    }}
                >
                    <IconShowPassword /> <span css={styles.text}>{i18n?.viewText}</span>
                </a>
            )}
        </div>
    )
})

Editor.displayName = 'Editor'

export default Editor
