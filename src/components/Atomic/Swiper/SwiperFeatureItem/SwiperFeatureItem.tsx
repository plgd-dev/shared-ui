import { FC } from 'react'
import * as styles from './SwiperFeatureItem.styles'

type Props = {
    image: any
    imageAlt?: string
    name: string
    description: string
}

const SwiperFeatureItem: FC<Props> = (props) => {
    const { image, imageAlt, name, description } = props
    return (
        <div css={styles.featureItem}>
            <img alt={imageAlt || ''} css={styles.featureImage} src={image} />
            <div css={styles.featureName}>{name}</div>
            <div css={styles.featureDescription}>{description}</div>
        </div>
    )
}

SwiperFeatureItem.displayName = 'SwiperFeatureItem'

export default SwiperFeatureItem
