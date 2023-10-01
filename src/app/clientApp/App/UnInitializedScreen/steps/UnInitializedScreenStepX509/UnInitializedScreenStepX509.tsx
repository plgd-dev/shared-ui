import { FC, useCallback, useMemo, useState } from 'react'
import { Props } from './UnInitializedScreenStepX509.types'
import FormGroup from '../../../../../../components/Atomic/FormGroup'
import FormLabel from '../../../../../../components/Atomic/FormLabel'
import FormInput from '../../../../../../components/Atomic/FormInput'
import * as stepStyles from '../../UnInitializedScreen.styles'
import Button from '../../../../../../components/Atomic/Button'
import * as styles from './UnInitializedScreenStepX509.styles'
import Link from '../../../../../../components/Atomic/Link'

const UnInitializedScreenStepX509: FC<Props> = (props) => {
    const { wellKnownConfig, goBack } = props
    const [values, setValues] = useState({
        authority: wellKnownConfig?.remoteProvisioning?.authority || '',
        scope: wellKnownConfig?.remoteProvisioning?.webOauthClient?.scopes?.join?.(' ') || '',
        client_id: wellKnownConfig?.remoteProvisioning?.webOauthClient?.clientId || '',
        audience: wellKnownConfig?.remoteProvisioning?.webOauthClient?.audience || false,
    })

    const handleUpdateValues = useCallback((key: string, value: string) => {
        setValues((values: any) => ({ ...values, [key]: value }))
    }, [])

    const hasAllData = useMemo(() => !!values.authority && !!values.scope && !!values.client_id, [values])

    return (
        <div css={stepStyles.formHolder}>
            <div css={stepStyles.header}>
                <Link onClick={goBack}>back</Link>
            </div>
            <FormGroup id='authority'>
                <FormLabel text='Authority' />
                <FormInput onChange={(e) => handleUpdateValues('authority', e.target.value)} value={values.authority} />
            </FormGroup>
            <FormGroup id='scope'>
                <FormLabel text='Scope' />
                <FormInput onChange={(e) => handleUpdateValues('scope', e.target.value)} value={values.scope} />
            </FormGroup>
            <FormGroup id='client_id'>
                <FormLabel text='Client_id' />
                <FormInput onChange={(e) => handleUpdateValues('client_id', e.target.value)} value={values.client_id} />
            </FormGroup>
            <FormGroup id='audience'>
                <FormLabel text='Audience' />
                <FormInput onChange={(e) => handleUpdateValues('audience', e.target.value)} value={values.audience.toString()} />
            </FormGroup>

            <Button css={styles.width} disabled={!hasAllData} size='big' variant='primary'>
                Initialize
            </Button>
        </div>
    )
}

UnInitializedScreenStepX509.displayName = 'UnInitializedScreenStepX509'

export default UnInitializedScreenStepX509
