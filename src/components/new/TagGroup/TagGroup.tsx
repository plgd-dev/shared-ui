import React, { Children, FC, useState } from 'react'
import { Props } from './TagGroup.types'
import * as styles from './TagGroup.styles'
import Tag from '../Tag'
import { tagVariants } from '../Tag/constants'
import Modal from '../Modal'

const TagGroup: FC<Props> = (props) => {
    const { className, id, children } = props
    const [show, setShow] = useState(false)
    const countArray = Children.toArray(children).length

    console.log(children)

    const Inner = () => {
        if (countArray > 3) {
            return (
                <div css={styles.tagGroup}>
                    <div css={styles.tag}>{children[0]}</div>
                    <div css={styles.tag}>{children[1]}</div>
                    <div css={styles.tag}>
                        <Tag variant={tagVariants.BLUE} onClick={() => setShow(true)}>
                            {countArray - 2} more
                        </Tag>
                    </div>
                </div>
            )
        } else {
            return (
                <div css={styles.tagGroup}>
                    {children.map((tag, key) => (
                        <div key={key} css={styles.tag}>
                            {tag}
                        </div>
                    ))}
                </div>
            )
        }
    }

    const renderBody = () => (
        <div css={styles.tagGroup}>
            {children.map((tag, key) => (
                <div key={key} css={styles.tag}>
                    {tag}
                </div>
            ))}
        </div>
    )

    return (
        <div css={className} id={id}>
            <Inner />

            <Modal
                show={show}
                title='Types'
                onClose={() => setShow(false)}
                appRoot={document.getElementById('root')}
                portalTarget={document.getElementById('modal-root')}
                renderBody={renderBody}
            />
        </div>
    )
}

TagGroup.displayName = 'TagGroup'

export default TagGroup
