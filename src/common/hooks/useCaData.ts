import { useEffect, useState } from 'react'
import isFunction from 'lodash/isFunction'

import { CA_BASE64_PREFIX } from '../../components/Organisms/CaPool'
import { parse, pemToDER } from '../utils/cert-decoder.mjs'
import { formatCertName, parseCertificate } from '../services/certificates'

type Options = {
    data: string[]
    onError?: (message: string) => void
    onSuccess?: (parsedData: any) => void
    singleMode?: boolean
}

export function useCaData(options: Options) {
    const { data, onError, onSuccess, singleMode } = options

    const [loading, setLoading] = useState(false)
    const [parsedData, setParsedData] = useState<any>([])
    const [error, setError] = useState<boolean>(false)

    const parseCaPool = async (certs: any, singleMode = false) => {
        const parsed = certs?.map(async (p: string, key: number) => {
            try {
                if (p.startsWith('/')) {
                    return { id: key, name: p, data: undefined }
                }

                const certsData = atob(p.replace(CA_BASE64_PREFIX, ''))

                if (singleMode) {
                    const data = await parse(pemToDER(certsData.replace(/(-----(BEGIN|END) CERTIFICATE-----|[\n\r])/g, ''))).then((c) => c)
                    return { id: key, name: formatCertName(data), nameRaw: formatCertName(data, true), data: data, dataChain: p }
                } else {
                    return await parseCertificate(certsData, key)
                }
            } catch (e: any) {
                let error = e
                if (!(error instanceof Error)) {
                    error = new Error(e)
                }

                isFunction(onError) && onError(error.message)
                setError(true)
            }
        })

        return await Promise.all(parsed)
    }

    useEffect(() => {
        if (data && data.length > 0 && !error) {
            parseCaPool(data, singleMode)
                .catch((e) => {
                    console.error(e)
                    setError(true)
                    setLoading(false)
                })
                .then((c) => {
                    isFunction(onSuccess) && onSuccess(c)
                    setParsedData(c)
                })
        } else if (parsedData.length > 0 && data.length === 0 && setParsedData.length > 0) {
            setParsedData([])
            setLoading(false)
        }
    }, [data?.length, parsedData?.length])

    return { loading, parsedData }
}
