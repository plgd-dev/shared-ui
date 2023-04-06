// @ts-nocheck
import React, { FC, MutableRefObject, useEffect, useRef } from 'react'
import { defaultProps, Props } from './Editor.types'
import * as styles from './Editor.styles'
import classNames from 'classnames'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'
import isFunction from 'lodash/isFunction'

const Editor: FC<Props> = (props) => {
    const { autofocus, className, editorRef, containerRef, onChange, onError, json, schema, height, width, style, onResize, disabled, mode, ...rest } = props

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
                jsoneditor?.current?.aceEditor?.resize?.()
            })
        }
    }

    useEffect(() => {
        // setTimeout(() => {
        const options = {
            mode,
            mainMenuBar: false,
            statusBar: false,
            onChangeText,
            onValidationError: onValidationError,
            schema,
            disabled: true,
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

        // lineHeight
        jsonEditor.current.aceEditor.setOptions({
            minLines: 1000,
            fontSize: 14,
            // highlightGutterLine: false,
        })

        if (typeof ResizeObserver === 'function' && container.current) {
            resizeObserver.current = new ResizeObserver(handleResize)
            resizeObserver.current.observe(container.current)
        }

        handleEditorRef(jsonEditor)
        // }, 1)

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
    }, [])

    return (
        <div
            {...rest}
            className={classNames(className, 'editor', {
                disabled,
                resize: !!ResizeObserver,
            })}
            css={styles.editor}
            ref={(ref) => handleContainerRef(ref)}
            style={{ ...style, width, height }}
        />
    )
}

Editor.displayName = 'Editor'
Editor.defaultProps = defaultProps

export default Editor
