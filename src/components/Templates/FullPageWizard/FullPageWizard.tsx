import React from 'react'
import { useTheme } from '@emotion/react'
import isFunction from 'lodash/isFunction'

import * as styles from './FullPageWizard.styles'
import { ThemeType } from '../../Atomic/_theme'
import Logo from '../../Atomic/Logo'
import IconCircle from './assets/IconCircle'
import IconDone from './assets/IconDone'
import IconCloseCircle from '../../Atomic/Icon/components/IconCloseCircle'
import { convertSize } from '../../Atomic/Icon'
import { ComponentType, Props } from './FullPageWizard.types'
import { Description, SubHeadline, Headline, GroupHeadline, ToggleConfiguration, Separator } from './Components'
import { useDocumentTitle } from '../../../common/hooks'

const FullPageWizard: ComponentType<Props> = (props) => {
    const { children, title, i18n, steps, activeStep, onStepChange, onClose, visitedStep } = props

    const theme: ThemeType = useTheme()

    useDocumentTitle(title)

    return (
        <div css={styles.wizard}>
            <div css={styles.row}>
                <div css={styles.leftCol}>
                    <div css={styles.leftInner}>
                        {theme.logo && <Logo logo={theme.logo} />}

                        <ul css={styles.navigation}>
                            {steps.map((step, key) => (
                                <li css={[activeStep >= key && styles.visited]} key={key}>
                                    <div css={styles.icon}>
                                        {activeStep > key ? (
                                            <IconDone fill={theme?.colorPalette?.primary} />
                                        ) : (
                                            <IconCircle fill={activeStep >= key ? theme?.colorPalette?.primary : theme?.colorPalette?.neutral300} />
                                        )}
                                    </div>
                                    <a
                                        css={[
                                            styles.link,
                                            activeStep >= key && styles.visited,
                                            visitedStep !== undefined && visitedStep >= key && styles.activeLink,
                                        ]}
                                        href='#'
                                        onClick={(e) => {
                                            e.preventDefault()

                                            if (visitedStep !== undefined && visitedStep >= key) {
                                                isFunction(onStepChange) && onStepChange(key)
                                            }
                                        }}
                                    >
                                        {step.name}
                                    </a>
                                    {step.description && <p css={[styles.description, styles.visited]}>{step.description}</p>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div css={styles.rightInner}>
                    <a
                        css={styles.close}
                        href='#'
                        onClick={(e) => {
                            e.preventDefault()
                            isFunction(onClose) && onClose()
                        }}
                        role='button'
                    >
                        <span>{i18n?.close}</span>
                        <IconCloseCircle {...convertSize(32)} />
                    </a>
                    <div css={styles.content}>{children}</div>
                </div>
            </div>
        </div>
    )
}

FullPageWizard.displayName = 'FullPageWizard'
FullPageWizard.Description = Description
FullPageWizard.SubHeadline = SubHeadline
FullPageWizard.Headline = Headline
FullPageWizard.GroupHeadline = GroupHeadline
FullPageWizard.ToggleConfiguration = ToggleConfiguration
FullPageWizard.Separator = Separator

export default FullPageWizard
