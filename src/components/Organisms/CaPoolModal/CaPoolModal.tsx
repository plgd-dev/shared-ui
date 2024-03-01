import React, { FC } from 'react'
import Modal from '../../Atomic/Modal'
import { Props } from './CaPoolModal.types'
import useWindowDimensions from '../../../common/hooks/useWindowDimensions'
import CodeEditor from '../../Atomic/CodeEditor'
import CaPoolModalContent from './components/CaPoolModalContent'

const CaPoolModal: FC<Props> = (props) => {
    const { data, dataChain, i18n, ...rest } = props

    const { height } = useWindowDimensions()

    const body = data ? <CaPoolModalContent data={data as any} i18n={i18n} maxHeight={height - 40 - 48 - 98 - 24} /> : null

    const bodyRelative = <CodeEditor disabled value={data as string} />

    return (
        <Modal
            {...rest}
            appRoot={document.getElementById('root')}
            bodyStyle={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}
            maxHeight={height ? height - 40 : undefined}
            maxWidth={1100}
            portalTarget={document.getElementById('modal-root')}
            renderBody={typeof data === 'string' ? bodyRelative : body}
            width='100%'
            zIndex={25}
        />
    )
}

CaPoolModal.displayName = 'CaPoolModal'

export default CaPoolModal
