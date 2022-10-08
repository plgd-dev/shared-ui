import React, { FC } from 'react'
import { Props, defaultProps } from './SignInForm.types'
import * as styles from './SignInForm.styles'
import Button from '../../Button'
import { ReactComponent as IconApple } from './assets/icon-apple.svg'
import { ReactComponent as IconGoogle } from './assets/icon-google.svg'
import { ReactComponent as IconGithub } from './assets/icon-github.svg'

const SignInForm: FC<Props> = (props) => {
    const { action, autoComplete, inputs, actions, cta, socialProviders, method, terms, onSubmit } = { ...defaultProps, ...props }

    const getSocialProviderIcon = (providerId: string) => {
        switch (providerId) {
            case 'apple':
                return <IconApple />
            case 'google':
                return <IconGoogle />
            case 'github':
                return <IconGithub />
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
                        <Button
                            className='formAltLogin'
                            fullWidth={true}
                            icon={getSocialProviderIcon(item.providerId)}
                            id={`zocial-${item.alias}`}
                            key={item.providerId}
                            onClick={() => (window.location.href = item.loginUrl)}
                            variant='tertiary'
                        >
                            {item.displayName}
                        </Button>
                    ))}
                </div>
            </>
        )

    return (
        <form action={action} autoComplete={autoComplete ? 'autoComplete' : undefined} method={method} onSubmit={onSubmit}>
            <div>{inputs}</div>
            {actions && <div css={styles.actions}>{actions}</div>}
            <div css={styles.cta}>{cta}</div>
            {terms && <div css={styles.terms}>{terms}</div>}
            {getSocialProviders()}
        </form>
    )
}

SignInForm.displayName = 'SignInForm'
SignInForm.defaultProps = defaultProps

export default SignInForm
