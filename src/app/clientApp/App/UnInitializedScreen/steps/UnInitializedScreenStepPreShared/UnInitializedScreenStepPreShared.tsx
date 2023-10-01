import { FC, useCallback, useMemo, useState } from 'react'
import { Props } from './UnInitializedScreenStepPreShared.types'
import * as stepStyles from '../../UnInitializedScreen.styles'
import Link from '../../../../../../components/Atomic/Link'
import FormLabel from '../../../../../../components/Atomic/FormLabel'
import FormInput from '../../../../../../components/Atomic/FormInput'
import FormGroup from '../../../../../../components/Atomic/FormGroup'
import Button from '../../../../../../components/Atomic/Button'
import * as styles from '../UnInitializedScreenStepX509/UnInitializedScreenStepX509.styles'

const UnInitializedScreenStepPreShared: FC<Props> = (props) => {
    const { goBack } = props

    const [values, setValues] = useState({
        subjectId: '',
        key: '',
    })

    const handleUpdateValues = useCallback((key: string, value: string) => {
        setValues((values: any) => ({ ...values, [key]: value }))
    }, [])

    const hasAllData = useMemo(() => !!values.subjectId && !!values.key, [values])

    return (
        <div css={stepStyles.formHolder}>
            <div css={stepStyles.header}>
                <Link onClick={goBack}>back</Link>
            </div>
            <FormGroup id='subjectId'>
                <FormLabel text='Subject Id' />
                <FormInput onChange={(e) => handleUpdateValues('subjectId', e.target.value)} value={values.subjectId} />
            </FormGroup>
            <FormGroup id='key'>
                <FormLabel text='Key' />
                <FormInput onChange={(e) => handleUpdateValues('key', e.target.value)} value={values.key} />
            </FormGroup>

            <Button css={styles.width} disabled={!hasAllData} size='big' variant='primary'>
                Initialize
            </Button>
        </div>
    )
}

UnInitializedScreenStepPreShared.displayName = 'UnInitializedScreenStepPreShared'

export default UnInitializedScreenStepPreShared
