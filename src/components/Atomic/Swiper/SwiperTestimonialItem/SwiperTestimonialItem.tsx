import { FC } from 'react'
import * as styles from './SwiperTestimonialItem.styles'

type Props = {
    author: {
        image: any
        imageAlt?: string
        name?: string
        position: string
    }
    text: string
}

const SwiperTestimonialItem: FC<Props> = (props) => {
    const { author, text } = props
    const { image, imageAlt, name, position } = author
    return (
        <div css={styles.testimonialItem}>
            <div css={styles.testimonialText}>{text}</div>
            <div css={styles.testimonialAuthor}>
                <div css={styles.testimonialAuthorImage}>
                    <img alt={imageAlt || ''} src={image} />
                </div>
                <div css={styles.testimonialAuthorInfo}>
                    <div css={styles.testimonialAuthorInfoName}>{name}</div>
                    <div css={styles.testimonialAuthorInfoPosition}>{position}</div>
                </div>
            </div>
        </div>
    )
}

SwiperTestimonialItem.displayName = 'SwiperTestimonialItem'

export default SwiperTestimonialItem
