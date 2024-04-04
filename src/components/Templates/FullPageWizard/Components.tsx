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

export type HeadlineProps = {
    children: string
}

export type GroupHeadlineProps = {
    children: string
    noBorder?: boolean
}

export const Description: FC<DescriptionProps> = (props) => <p css={[styles.description, props.large && styles.descriptionLarge]}>{props.children}</p>

export const SubHeadline: FC<SubHeadlineProps> = (props) => <h2 css={[styles.subHeadline, props.noBorder && styles.noBorder]}>{props.children}</h2>

export const Headline: FC<HeadlineProps> = (props) => <h1 css={[styles.headline]}>{props.children}</h1>

export const GroupHeadline: FC<GroupHeadlineProps> = (props) => <h3 css={[styles.groupHeadline]}>{props.children}</h3>
