import React, { FC } from 'react'
import { Props, defaultProps } from './SignInForm.types'
import * as styles from './SignInForm.styles'
import Button from '../../Atomic/Button'

import IconApple from './assets/IconApple'
import IconGoogle from './assets/IconGoogle'
import IconGitHub from './assets/IconGitHub'

const SignInForm: FC<Props> = (props) => {
    const { action, autoComplete, className, id, inputs, actions, cta, socialProviders, method, terms, onSubmit } = { ...defaultProps, ...props }

    const getSocialProviderIcon = (providerId: string) => {
        switch (providerId) {
            case 'apple':
                return <IconApple />
            case 'google':
                return <IconGoogle />
            case 'github':
                return <IconGitHub />
        }
    }

    const getSocialProviders = () =>
        !socialProviders ? null : (
            <>
                <div css={styles.formSeparator}>
                    <div css={styles.formSeparatorLine}></div>
                    <div css={styles.formSeparatorText}>or via</div>
                </div>
                <div css={styles.formAltLogins}>
                    {socialProviders.map((item) => (
                        <>
                            <a href={item.loginUrl} id={`social-${item.alias}-helper`} style={{ display: 'none' }}>
                                {item.displayName}
                            </a>
                            <Button
                                className='formAltLogin'
                                fullWidth={true}
                                icon={getSocialProviderIcon(item.providerId)}
                                id={`social-${item.alias}`}
                                key={item.providerId}
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById(`social-${item.alias}-helper`)?.click()
                                }}
                                variant='tertiary'
                            >
                                {item.displayName}
                            </Button>
                        </>
                    ))}
                </div>
            </>
        )

    return (
        <>
            <form action={action} autoComplete={autoComplete ? 'autoComplete' : undefined} className={className} id={id} method={method} onSubmit={onSubmit}>
                <div>{inputs}</div>
                {actions && <div css={styles.actions}>{actions}</div>}
                <div css={styles.cta}>{cta}</div>
                {terms && <div css={styles.terms}>{terms}</div>}
            </form>
            {getSocialProviders()}
        </>
    )
}

SignInForm.displayName = 'SignInForm'

export default SignInForm
