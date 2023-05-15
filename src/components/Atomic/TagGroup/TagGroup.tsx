import React, { Children, FC, useState } from 'react'
import { Props } from './TagGroup.types'
import * as styles from './TagGroup.styles'
import Tag from '../Tag'
import { tagVariants } from '../Tag/constants'
import Modal from '../Modal'

const TagGroup: FC<Props> = (props) => {
    const { className, id, children } = props
    const [show, setShow] = useState(false)
    const childrenArray = Children.toArray(children)

    const Inner = () => {
        if (childrenArray.length > 3) {
            return (
                <div css={styles.tagGroup}>
                    <div css={styles.tag}>{childrenArray[0]}</div>
                    <div css={styles.tag}>{childrenArray[1]}</div>
                    <div css={styles.tag}>
                        <Tag onClick={() => setShow(true)} variant={tagVariants.BLUE}>
                            {childrenArray.length - 2} more
                        </Tag>
                    </div>
                </div>
            )
        } else {
            return (
                <div css={styles.tagGroup}>
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

    return (
        <div css={className} id={id}>
            <Inner />

            <Modal
                appRoot={document.getElementById('root')}
                onClose={() => setShow(false)}
                portalTarget={document.getElementById('modal-root')}
                renderBody={renderBody}
                show={show}
                title='Types'
            />
        </div>
    )
}

TagGroup.displayName = 'TagGroup'

export default TagGroup
