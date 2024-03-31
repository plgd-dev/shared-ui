import React, { Children, FC, useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'lodash/debounce'

import { Props, defaultProps } from './TagGroup.types'
import * as styles from './TagGroup.styles'
import Tag from '../Tag'
import { tagVariants } from '../Tag/constants'
import Modal from '../Modal'
import { justifyContent } from './constants'

const TagGroup: FC<Props> = (props) => {
    const { className, id, i18n, children, justifyContent: justifyContentProp } = props
    const [show, setShow] = useState(false)
    const [tagsToDisplay, setTagsToDisplay] = useState(0)
    const childrenArray = Children.toArray(children)

    const parent = useRef<any>(null)
    const tags: any = useRef<any>([])
    const moreTags: any = useRef<any>(null)

    const Inner = () => {
        if (childrenArray.length > tagsToDisplay) {
            return (
                <div css={[styles.tagGroup, justifyContentProp === justifyContent.END && styles.justifyEnd]}>
                    {childrenArray.slice(0, tagsToDisplay).map((item, key) => (
                        <div css={styles.tag} key={key}>
                            {item}
                        </div>
                    ))}
                    <div css={styles.tag}>
                        <Tag onClick={() => setShow(true)} variant={tagVariants.BLUE}>
                            {childrenArray.length - tagsToDisplay} more
                        </Tag>
                    </div>
                </div>
            )
        } else {
            return (
                <div css={[styles.tagGroup, justifyContentProp === justifyContent.END && styles.justifyEnd]}>
                    {childrenArray.map((tag, key) => (
                        <div css={styles.tag} key={key}>
                            {tag}
                        </div>
                    ))}
                </div>
            )
        }
    }

    const renderBody = () => (
        <div css={styles.tagGroup}>
            {childrenArray.map((tag, key) => (
                <div css={styles.tag} key={key}>
                    {tag}
                </div>
            ))}
        </div>
    )

    const calculate = useCallback(() => {
        const parentWidth = parent?.current?.clientWidth ?? 0
        let totalChildWidth = 2
        const childArray: number[] = []

        tags.current.forEach((tag: any, key: number) => {
            totalChildWidth += tag?.clientWidth
            if (key !== 0) {
                totalChildWidth += 4
            }
            childArray.push(tag?.clientWidth + 4)
        })

        if (totalChildWidth > parentWidth) {
            let currentWidth = moreTags?.current?.clientWidth ?? 0
            let numbersToRender = 0
            let findingIsOver = false

            childArray.forEach((child: any) => {
                if (currentWidth + child < parentWidth && !findingIsOver) {
                    currentWidth += child
                    numbersToRender++
                } else {
                    findingIsOver = true
                }
            })

            setTagsToDisplay(numbersToRender)
        } else {
            setTagsToDisplay(childArray.length)
        }
    }, [parent, tags, moreTags])

    const debouncedCallback = debounce(() => {
        calculate()
    }, 500)

    useEffect(() => {
        window.addEventListener('resize', debouncedCallback)
        return () => window.removeEventListener('resize', debouncedCallback)
    }, [debouncedCallback])

    useEffect(() => {
        calculate()
    }, [calculate])

    return (
        <div className={className} css={styles.parent} id={id} ref={parent}>
            <div css={styles.test}>
                <div css={styles.testInner}>
                    {childrenArray.map((tag, key) => (
                        <div css={styles.tag} key={key} ref={(el) => (tags.current[key] = el)}>
                            {tag}
                        </div>
                    ))}
                    <Tag ref={moreTags} variant={tagVariants.BLUE}>
                        {childrenArray.length} {i18n.more}
                    </Tag>
                </div>
            </div>

            {tagsToDisplay > 0 && <Inner />}
            {tagsToDisplay === 0 && (
                <Tag onClick={() => setShow(true)} variant={tagVariants.BLUE}>
                    {childrenArray.length} {i18n.more}
                </Tag>
            )}

            <Modal
                appRoot={document.getElementById('root')}
                maxWidth={600}
                onClose={() => setShow(false)}
                portalTarget={document.getElementById('modal-root')}
                renderBody={renderBody}
                show={show}
                title={i18n.modalHeadline}
            />
        </div>
    )
}

TagGroup.displayName = 'TagGroup'
TagGroup.defaultProps = defaultProps

export default TagGroup
