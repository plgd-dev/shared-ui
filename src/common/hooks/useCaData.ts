import { useEffect, useState } from 'react'
import isFunction from 'lodash/isFunction'

import { CA_BASE64_PREFIX } from '../../components/Organisms/CaPool'
import { parse, pemToDER } from '../utils/cert-decoder.mjs'
import { findCertName, formatCertName } from '../../components/Organisms/CaPool/utils'

type Options = {
    data: string[]
    onError?: (message: string) => void
    onSuccess?: (parsedData: any) => void
    singleMode?: boolean
}

export function useCaData(options: Options) {
    const { data, onError, onSuccess } = options

    const [loading, setLoading] = useState(false)
    const [parsedData, setParsedData] = useState<any>([])

    const parseCaPool = async (certs: any, singleMode = false) => {
        const parsed = certs?.map(async (p: string, key: number) => {
            try {
                if (p.startsWith('/')) {
                    return { id: key, name: p, data: undefined }
                }

                const certsData = atob(p.replace(CA_BASE64_PREFIX, ''))

                if (singleMode) {
                    const data = await parse(pemToDER(certsData.replace(/(-----(BEGIN|END) CERTIFICATE-----|[\n\r])/g, ''))).then((c) => c)
                    return { id: key, name: formatCertName(data), data: data, dataChain: p }
                } else {
                    const groups = [...certsData.matchAll(/(-----[BEGIN \S]+?-----[\S\s]+?-----[END \S]+?-----)/g)]
                    const certs = groups.map((g) => parse(pemToDER(g[0].replace(/(-----(BEGIN|END) CERTIFICATE-----|[\n\r])/g, ''))).then((c) => c))
                    const data = await Promise.all(certs)

                    return { id: key, name: findCertName(data), data, dataChain: p }
                }
            } catch (e: any) {
                let error = e
                if (!(error instanceof Error)) {
                    error = new Error(e)
                }

                isFunction(onError) && onError(error.message)
            }
        })

        return await Promise.all(parsed)
    }

    useEffect(() => {
        if (data && data.length > 0) {
            setLoading(true)
            parseCaPool(data)
                .catch(console.error)
                .then((c) => {
                    setLoading(false)
                    isFunction(onSuccess) && onSuccess(c)
                    setParsedData(c)
                })
        } else if (parsedData.length > 0 && data.length === 0) {
            setParsedData([])
            setLoading(false)
        }
    }, [data, onSuccess, parsedData.length])

    return { loading, parsedData }
}
