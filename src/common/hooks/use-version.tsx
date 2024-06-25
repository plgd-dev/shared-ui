import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import FormGroup from '../../components/Atomic/FormGroup'
import FormLabel from '../../components/Atomic/FormLabel'
import FormSelect from '../../components/Atomic/FormSelect'
import { OptionType } from '../../components/Atomic/FormSelect/FormSelect.types'

type OptionsType = {
    i18n: { version: string; selectVersion: string }
    refresh: () => void
    versionData: any
}

export function useVersion(options: OptionsType) {
    const { i18n, versionData, refresh } = options

    const [searchParams, setSearchParams] = useSearchParams()
    const [version, setVersion] = useState('')
    const versionParam = searchParams.get('version')

    const versions = useMemo(
        () => versionData?.map((version: { version: string }) => ({ value: version.version, label: `v${version.version}` })),
        [versionData]
    )

    useEffect(() => {
        if (versionParam) {
            setVersion(versionParam)
        }
    }, [versionParam])

    const data = useMemo(() => {
        const v = version || versionData ? versionData?.length - 1 : 0
        setVersion(v.toString())
        return versionData && versionData?.length > 0 ? versionData[v] : []
    }, [versionData, version])

    const Selector = () => (
        <FormGroup inline id='version' marginBottom={false}>
            <FormLabel text={i18n.version} />
            <FormSelect
                onChange={(options: OptionType) => {
                    const v = options.value
                    setSearchParams({ version: v as string })
                    refresh()
                }}
                options={versions || []}
                placeholder={i18n.selectVersion}
                size='small'
                value={versions?.find((v: OptionType) => v.value === version) || null}
            />
        </FormGroup>
    )

    return { Selector, data, setSearchParams }
}
