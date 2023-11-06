import React, { FC, ReactNode, useContext, useEffect, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'

import { Props, Inputs } from './Tab2.types'
import SimpleStripTable from '../../../../../../components/Atomic/SimpleStripTable'
import { messages as t } from '../../../../RemoteClients/RemoteClients.i18n'
import FormSelect, { selectAligns } from '../../../../../../components/Atomic/FormSelect'
import { DEVICE_AUTH_MODE } from '../../../../constants'
import FormInput, { inputAligns } from '../../../../../../components/Atomic/FormInput'
import { useIsMounted } from '../../../../../../common/hooks'
import AppContext from '../../../../../share/AppContext'
import BottomPanel from '../../../../../../components/Layout/BottomPanel/BottomPanel'
import Button from '../../../../../../components/Atomic/Button'
import FormGroup from '../../../../../../components/Atomic/FormGroup'
import Notification from '../../../../../../components/Atomic/Notification/Toast'
import DetailHeadline from '../../../../../../components/Organisms/DetailHeadline/DetailHeadline'
import * as styles from '../../../../../../components/Atomic/Modal/components/ProvisionDeviceModal/ProvisionDeviceModal.styles'
import Alert, { severities } from '../../../../../../components/Atomic/Alert'
import { remoteClientStatuses } from '../../../../RemoteClients/constants'

interface RowsType {
    attribute: string
    value: ReactNode
}

const Tab1: FC<Props> = (props) => {
    const { clientData, initializedByAnother } = props
    const { formatMessage: _ } = useIntl()
    const isMounted = useIsMounted()
    const { collapsed, isHub, updateRemoteClient } = useContext(AppContext)
    const dispatch = useDispatch()

    const options = useMemo(
        () => [
            { value: DEVICE_AUTH_MODE.X509, label: DEVICE_AUTH_MODE.X509 },
            { value: DEVICE_AUTH_MODE.PRE_SHARED_KEY, label: DEVICE_AUTH_MODE.PRE_SHARED_KEY },
        ],
        []
    )

    const defAuthMode = useMemo(() => options.find((o) => o.value === clientData?.authenticationMode) || options[0], [clientData, options])

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
        getValues,
        reset,
        watch,
        control,
        trigger,
        setValue,
    } = useForm<Inputs>({
        mode: 'all',
        reValidateMode: 'onSubmit',
        values: {
            authenticationMode: defAuthMode,
            preSharedSubjectId: clientData?.preSharedSubjectId || '',
            preSharedKey: clientData?.preSharedKey || '',
        },
    })

    const authMode = watch('authenticationMode')

    useEffect(() => {
        trigger().then()

        if (authMode?.value === DEVICE_AUTH_MODE.X509) {
            setValue('preSharedSubjectId', '')
            setValue('preSharedKey', '')
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authMode])

    const rows: RowsType[] = clientData
        ? [
              {
                  attribute: _(t.deviceAuthenticationMode),
                  value: (
                      <Controller
                          control={control}
                          name='authenticationMode'
                          render={({ field: { onChange, name, ref, value } }) => (
                              <FormSelect
                                  inlineStyle
                                  align={selectAligns.RIGHT}
                                  defaultValue={defAuthMode}
                                  name={name}
                                  onChange={onChange}
                                  options={options}
                                  ref={ref}
                                  value={value}
                              />
                          )}
                      />
                  ),
              },
          ]
        : []

    if (authMode?.value === DEVICE_AUTH_MODE.PRE_SHARED_KEY) {
        rows.push(
            {
                attribute: _(t.subjectId),
                value: (
                    <FormGroup
                        error={errors.preSharedSubjectId ? _(t.preSharedSubjectIdError) : undefined}
                        errorTooltip={true}
                        fullSize={true}
                        id='subject-id'
                        marginBottom={false}
                    >
                        <FormInput
                            inlineStyle
                            align={inputAligns.RIGHT}
                            placeholder={_(t.subjectId)}
                            {...register('preSharedSubjectId', { required: true, validate: (val) => val !== '' })}
                        />
                    </FormGroup>
                ),
            },
            {
                attribute: _(t.key),
                value: (
                    <FormInput
                        inlineStyle
                        align={inputAligns.RIGHT}
                        placeholder={_(t.key)}
                        {...register('preSharedKey', { required: true, validate: (val) => val !== '' })}
                    />
                ),
            }
        )
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const values = getValues()

        // convert select value
        values.authenticationMode = values.authenticationMode.value as any

        if (isHub && updateRemoteClient) {
            dispatch(updateRemoteClient({ ...values, id: clientData?.id }))
        }

        Notification.success({ title: _(t.clientsUpdated), message: _(t.clientsUpdatedMessage) })
    }

    return (
        <div
            style={{
                paddingTop: 8,
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <SimpleStripTable rows={rows} />
                <DetailHeadline>{_(t.clientInformations)}</DetailHeadline>
                {initializedByAnother && (
                    <Alert css={styles.alert} severity={severities.WARNING}>
                        {authMode?.value === DEVICE_AUTH_MODE.X509 ? _(t.initializedByAnotherX509) : _(t.initializedByAnotherPreSharedKey)}
                    </Alert>
                )}
                {clientData?.status === remoteClientStatuses.UNREACHABLE && <Alert css={styles.alert}>{_(t.certificateAcceptDescription)}</Alert>}
                {clientData?.version && (
                    <SimpleStripTable
                        rows={[
                            {
                                attribute: _(t.version),
                                value: <div style={{ padding: '0 16px' }}>{clientData.version}</div>,
                            },
                        ]}
                    />
                )}
            </form>
            {isMounted &&
                document.querySelector('#modal-root') &&
                ReactDOM.createPortal(
                    <BottomPanel
                        actionPrimary={
                            <Button disabled={Object.keys(errors).length > 0} onClick={() => onSubmit(getValues())} variant='primary'>
                                {_(t.saveChanges)}
                            </Button>
                        }
                        actionSecondary={
                            <Button onClick={() => reset()} variant='secondary'>
                                {_(t.reset)}
                            </Button>
                        }
                        attribute={_(t.changesMade)}
                        leftPanelCollapsed={collapsed}
                        show={Object.keys(dirtyFields).length > 0}
                        value={`${Object.keys(dirtyFields).length} ${Object.keys(dirtyFields).length > 1 ? _(t.settings) : _(t.setting)}`}
                    />,
                    document.querySelector('#modal-root') as Element
                )}
        </div>
    )
}

Tab1.displayName = 'Tab2'

export default Tab1
