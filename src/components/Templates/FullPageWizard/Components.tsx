import { FC } from 'react'
import * as styles from './Components.styles'

export type DescriptionProps = {
    children: string
    large?: boolean
}

export type SubHeadlineProps = {
    children: string
    noBorder?: boolean
}

export const Description: FC<DescriptionProps> = (props) => <p css={[styles.description, props.large && styles.descriptionLarge]}>{props.children}</p>

export const SubHeadline: FC<SubHeadlineProps> = (props) => <h2 css={[styles.subHeadline, props.noBorder && styles.noBorder]}>{props.children}</h2>
