import React, { FC, useState } from 'react'
import * as styles from './Components.styles'
import ConditionalWrapper from '../../Atomic/ConditionalWrapper'
import Tooltip from '../../Atomic/Tooltip'
import IconQuestion from '../../Atomic/Icon/components/IconQuestion'
import { convertSize } from '../../Atomic/Icon'
import ShowAnimate from '../../Atomic/ShowAnimate'
import IconSettings from '../../Atomic/Icon/components/IconSettings'

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
    tooltipText?: string
    tooltipMaxWidth?: number
}

export type ToggleConfigurationProps = {
    defaultShow?: boolean
    children: React.ReactNode | React.ReactNode[]
    i18n: {
        hide: string
        show: string
    }
    margin?: boolean
}

export const Description: FC<DescriptionProps> = (props) => <p css={[styles.description, props.large && styles.descriptionLarge]}>{props.children}</p>

export const SubHeadline: FC<SubHeadlineProps> = (props) => <h2 css={[styles.subHeadline, props.noBorder && styles.noBorder]}>{props.children}</h2>

export const Headline: FC<HeadlineProps> = (props) => <h1 css={[styles.headline]}>{props.children}</h1>

export const GroupHeadline: FC<GroupHeadlineProps> = (props) => (
    <ConditionalWrapper
        condition={!!props.tooltipText}
        wrapper={(children) => (
            <div css={[styles.flex, styles.groupHeadlineMargin]}>
                <span>{children}</span>
                <Tooltip content={props.tooltipText} delay={200} maxWidth={props.tooltipMaxWidth || 300} portalTarget={document.getElementById('modal-root')!}>
                    <IconQuestion {...convertSize(16)} />
                </Tooltip>
            </div>
        )}
    >
        <h3 css={[styles.groupHeadline, !props.tooltipText && styles.groupHeadlineMargin]}>{props.children}</h3>
    </ConditionalWrapper>
)

export const ToggleConfiguration: FC<ToggleConfigurationProps> = (props) => {
    const { i18n, children, margin = true } = props
    const [show, setShow] = useState(false)

    return (
        <>
            <ShowAnimate show={show}>
                <>{children}</>
            </ShowAnimate>
            <div css={[styles.expander, margin && styles.expanderMargin]} onClick={() => setShow(!show)}>
                <IconSettings /> {show ? i18n.hide : i18n.show}
            </div>
        </>
    )
}
