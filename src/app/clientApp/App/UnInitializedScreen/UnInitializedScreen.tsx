import { FC, useCallback, useState } from 'react'
import { ThemeProvider } from '@emotion/react'

import { Props } from './UnInitializedScreen.types'
import * as styles from './UnInitializedScreen.styles'
import UnInitializedScreenStep1 from './steps/UnInitializedScreenStep1'
import { DEVICE_AUTH_MODE } from '../../constants'
import UnInitializedScreenStepX509 from './steps/UnInitializedScreenStepX509/UnInitializedScreenStepX509'
import UnInitializedScreenStepPreShared from './steps/UnInitializedScreenStepPreShared/UnInitializedScreenStepPreShared'
import plgd from '../../../../components/Atomic/_theme/plgd'

const UnInitializedScreen: FC<Props> = (props) => {
    const { wellKnownConfig } = props
    const [step, setStep] = useState(1)

    const [values, setValues] = useState({
        authority: wellKnownConfig?.remoteProvisioning?.authority || '',
        deviceAuthenticationMode: wellKnownConfig?.deviceAuthenticationMode || '',
    })

    const setAuthMode = useCallback((authMode: string) => {
        setValues((prevValue: any) => ({
            ...prevValue,
            deviceAuthenticationMode: authMode,
        }))
        setStep(2)
    }, [])

    const goBack = useCallback(() => {
        setStep(1)
    }, [])

    return (
        <ThemeProvider theme={plgd}>
            <div css={styles.unInitializedScreen}>
                <div>
                    {step === 1 && <UnInitializedScreenStep1 setAuthMode={setAuthMode} />}
                    {step === 2 && values.deviceAuthenticationMode === DEVICE_AUTH_MODE.X509 && (
                        <UnInitializedScreenStepX509 goBack={goBack} wellKnownConfig={wellKnownConfig} />
                    )}
                    {step === 2 && values.deviceAuthenticationMode === DEVICE_AUTH_MODE.PRE_SHARED_KEY && <UnInitializedScreenStepPreShared goBack={goBack} />}
                </div>
            </div>
        </ThemeProvider>
    )
}

UnInitializedScreen.displayName = 'UnInitializedScreen'

export default UnInitializedScreen
