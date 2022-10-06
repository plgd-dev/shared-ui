import React, { FC } from 'react'
import { Props, defaultProps } from './SignInForm.types'
import * as styles from './SignInForm.styles'
import Button from '../../Button'
import { ReactComponent as IconApple } from './assets/icon-apple.svg'
import { ReactComponent as IconGoogle } from './assets/icon-google.svg'
import { ReactComponent as IconGithub } from './assets/icon-github.svg'

const SignInForm: FC<Props> = (props) => {
    const { action, autoComplete, inputs, actions, cta, footerActions, method, terms } = { ...defaultProps, ...props }

    const getFooterActions = () =>
        !footerActions ? null : (
            <>
                <div css={styles.formSeparator}>
                    <div css={styles.formSeparatorLine}></div>
                    <div css={styles.formSeparatorText}>or via</div>
                </div>
                <div css={styles.formAltLogins}>
                    <Button className='formAltLogin' fullWidth={true} icon={<IconApple />} variant='tertiary'>
                        Apple
                    </Button>
                    <Button className='formAltLogin' fullWidth={true} icon={<IconGoogle />} variant='tertiary'>
                        Google
                    </Button>
                    <Button className='formAltLogin' fullWidth={true} icon={<IconGithub />} variant='tertiary'>
                        Github
                    </Button>
                </div>
            </>
        )

    return (
        <form action={action} autoComplete={autoComplete ? 'autoComplete' : undefined} method={method}>
            <div>{inputs}</div>
            {actions && <div css={styles.actions}>{actions}</div>}
            <div css={styles.cta}>{cta}</div>
            {terms && <div css={styles.terms}>{terms}</div>}
            {getFooterActions()}
        </form>
    )
}

SignInForm.displayName = 'SignInForm'
SignInForm.defaultProps = defaultProps

export default SignInForm
