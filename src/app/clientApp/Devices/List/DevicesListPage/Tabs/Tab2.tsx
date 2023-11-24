import React, { FC, ReactNode, useContext, useEffect, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import isFunction from 'lodash/isFunction'
import omit from 'lodash/omit'

import { Props, Inputs } from './Tab2.types'
import SimpleStripTable from '../../../../../../components/Atomic/SimpleStripTable'
import { messages as t } from '../../../../RemoteClients/RemoteClients.i18n'
import FormSelect, { selectAligns } from '../../../../../../components/Atomic/FormSelect'
import { DEVICE_AUTH_MODE } from '../../../../constants'
import FormInput, { inputAligns } from '../../../../../../components/Atomic/FormInput'
import { mergeConfig, useIsMounted } from '../../../../../../common/hooks'
import AppContext from '../../../../../share/AppContext'
import BottomPanel from '../../../../../../components/Layout/BottomPanel/BottomPanel'
import Button from '../../../../../../components/Atomic/Button'
import FormGroup from '../../../../../../components/Atomic/FormGroup'
import Notification from '../../../../../../components/Atomic/Notification/Toast'
import DetailHeadline from '../../../../../../components/Organisms/DetailHeadline/DetailHeadline'
import * as styles from '../../../../../../components/Atomic/Modal/components/ProvisionDeviceModal/ProvisionDeviceModal.styles'
import Alert, { severities } from '../../../../../../components/Atomic/Alert'
import { remoteClientStatuses } from '../../../../RemoteClients/constants'
import { security } from '../../../../../../common/services'

interface RowsType {
    attribute: string
    value: ReactNode
}

const IGNORE_X509 = ['preSharedKey', 'preSharedSubjectId']
const IGNORE_PRE_SHARED_KEY = ['audience', 'authority', 'clientId', 'scope']

const Tab2: FC<Props> = (props) => {
    const { clientData, initializedByAnother } = props
    const { formatMessage: _ } = useIntl()
    const isMounted = useIsMounted()
    const { isHub, updateRemoteClient, updateAppWellKnownConfig } = useContext(AppContext)
    const dispatch = useDispatch()
    const wellKnownConfig = security.getWellKnowConfig()
    const appStore = useSelector((state: any) => state.app)

    const optionsBool = useMemo(
        () => [
            { value: false, label: _(t.no) },
            { value: true, label: _(t.yes) },
        ],
        []
    )

    const mergedWellKnownConfig = useMemo(() => {
        if (wellKnownConfig) {
            return mergeConfig(wellKnownConfig, appStore.userWellKnownConfig)
        }
        return undefined
    }, [appStore.userWellKnownConfig, wellKnownConfig])

    const defaultData = useMemo(() => {
        if (isHub) {
            return {
                authenticationMode: clientData?.authenticationMode,
                preSharedSubjectId: clientData?.preSharedSubjectId || '',
                preSharedKey: clientData?.preSharedKey || '',
            }
        } else {
            return {
                audience: mergedWellKnownConfig?.remoteProvisioning?.webOauthClient?.audience ?? optionsBool[0],
                authenticationMode: mergedWellKnownConfig?.deviceAuthenticationMode || '',
                authority: mergedWellKnownConfig?.remoteProvisioning?.authority,
                clientId: mergedWellKnownConfig?.remoteProvisioning?.webOauthClient?.clientId || '',
                preSharedSubjectId: mergedWellKnownConfig?.owner,
                preSharedKey: mergedWellKnownConfig?.preSharedKey,
                scopes: mergedWellKnownConfig?.remoteProvisioning?.webOauthClient?.scopes || '',
            }
        }
    }, [
        clientData?.authenticationMode,
        clientData?.preSharedKey,
        clientData?.preSharedSubjectId,
        isHub,
        optionsBool,
        mergedWellKnownConfig?.deviceAuthenticationMode,
        mergedWellKnownConfig?.owner,
        mergedWellKnownConfig?.preSharedKey,
        mergedWellKnownConfig?.remoteProvisioning?.authority,
        mergedWellKnownConfig?.remoteProvisioning?.webOauthClient?.audience,
        mergedWellKnownConfig?.remoteProvisioning?.webOauthClient?.clientId,
        mergedWellKnownConfig?.remoteProvisioning?.webOauthClient?.scopes,
    ])

    const options = useMemo(
        () => [
            { value: DEVICE_AUTH_MODE.X509, label: DEVICE_AUTH_MODE.X509 },
            { value: DEVICE_AUTH_MODE.PRE_SHARED_KEY, label: DEVICE_AUTH_MODE.PRE_SHARED_KEY },
        ],
        []
    )

    const defAuthMode = useMemo(
        () => options.find((o) => o.value === defaultData?.authenticationMode) || options[0],
        [defaultData?.authenticationMode, options]
    )

    const defAudience = useMemo(() => optionsBool.find((o) => o.value === defaultData?.audience) || optionsBool[0], [defaultData?.audience, optionsBool])

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
            ...defaultData,
            authenticationMode: defAuthMode,
        },
    })

    const authMode = watch('authenticationMode')

    useEffect(() => {
        trigger().then()

        if (authMode?.value === DEVICE_AUTH_MODE.X509) {
            // @ts-ignore
            IGNORE_X509.forEach((field) => setValue(field, ''))
        } else if (authMode?.value === DEVICE_AUTH_MODE.PRE_SHARED_KEY) {
            // @ts-ignore
            IGNORE_PRE_SHARED_KEY.forEach((field) => setValue(field, ''))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authMode])

    const rows: RowsType[] = [
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
                    <FormGroup
                        error={errors.preSharedKey ? _(t.preSharedKeyError) : undefined}
                        errorTooltip={true}
                        fullSize={true}
                        id='pre-shared-key'
                        marginBottom={false}
                    >
                        <FormInput
                            inlineStyle
                            align={inputAligns.RIGHT}
                            placeholder={_(t.key)}
                            {...register('preSharedKey', { required: true, validate: (val) => val !== '' })}
                        />
                    </FormGroup>
                ),
            }
        )
    }

    if (!isHub && authMode?.value === DEVICE_AUTH_MODE.X509) {
        rows.push(
            {
                attribute: _(t.authority),
                value: (
                    <FormInput
                        inlineStyle
                        align={inputAligns.RIGHT}
                        placeholder={_(t.authority)}
                        {...register('authority', { required: true, validate: (val) => val !== '' })}
                    />
                ),
            },
            {
                attribute: _(t.scopes),
                value: (
                    <FormInput
                        inlineStyle
                        align={inputAligns.RIGHT}
                        placeholder={_(t.scopes)}
                        {...register('scopes', { required: true, validate: (val) => val !== '' })}
                    />
                ),
            },
            {
                attribute: _(t.audience),
                value: (
                    <Controller
                        control={control}
                        name='audience'
                        render={({ field: { onChange, name, ref } }) => (
                            <FormSelect
                                inlineStyle
                                align={selectAligns.RIGHT}
                                defaultValue={defAudience}
                                name={name}
                                onChange={onChange}
                                options={optionsBool}
                                ref={ref}
                            />
                        )}
                    />
                ),
            },
            {
                attribute: _(t.clientId),
                value: (
                    <FormInput
                        inlineStyle
                        align={inputAligns.RIGHT}
                        placeholder={_(t.clientId)}
                        {...register('clientId', { required: true, validate: (val) => val !== '' })}
                    />
                ),
            }
        )
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const values = getValues()

        if (isHub) {
            // convert select value
            values.authenticationMode = values.authenticationMode.value as any

            // remote client is in local browser store -> update config
            isFunction(updateRemoteClient) && dispatch(updateRemoteClient({ ...values, id: clientData?.id }))
        } else {
            if (values.audience !== undefined) {
                values.audience = values.audience?.value as any
            }

            let ignoredValues = ['authenticationMode']

            if (values.authenticationMode.value === DEVICE_AUTH_MODE.X509) {
                ignoredValues = ignoredValues.concat(IGNORE_X509)
            } else if (values.authenticationMode.value === DEVICE_AUTH_MODE.PRE_SHARED_KEY) {
                ignoredValues = ignoredValues.concat(IGNORE_PRE_SHARED_KEY)
            }

            // authenticationMode -> deviceAuthenticationMode
            isFunction(updateAppWellKnownConfig) &&
                dispatch(
                    updateAppWellKnownConfig({
                        ...omit(values, ignoredValues),
                        deviceAuthenticationMode: values.authenticationMode.value,
                    })
                )
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
                {isHub && <DetailHeadline>{_(t.clientInformations)}</DetailHeadline>}
                {initializedByAnother && (
                    <Alert css={[styles.alert, !isHub && styles.alertTopSpace]} severity={severities.WARNING}>
                        {authMode?.value === DEVICE_AUTH_MODE.X509 ? _(t.initializedByAnotherX509) : _(t.initializedByAnotherPreSharedKey)}
                    </Alert>
                )}
                {isHub && clientData?.status === remoteClientStatuses.UNREACHABLE && <Alert css={styles.alert}>{_(t.certificateAcceptDescription)}</Alert>}
                {isHub && clientData?.version && (
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
                        iframeMode={!isHub}
                        leftPanelCollapsed={false}
                        show={Object.keys(dirtyFields).length > 0}
                        value={`${Object.keys(dirtyFields).length} ${Object.keys(dirtyFields).length > 1 ? _(t.settings) : _(t.setting)}`}
                    />,
                    document.querySelector('#modal-root') as Element
                )}
        </div>
    )
}

Tab2.displayName = 'Tab2'

export default Tab2
