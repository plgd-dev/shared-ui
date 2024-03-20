import { parse, pemToDER } from '../utils/cert-decoder.mjs'
import { CerType } from '../../components/Organisms/CaPoolModal/components/CaPoolModalContent.types'

export const formatCertName = (cert: any, raw = false) => {
    if (cert.subject.cn) {
        return `${raw ? '' : 'CN: '}${cert.subject.cn}`
    } else if (cert.subject.ou) {
        return `${raw ? '' : 'OU:'}${cert.subject.ou}`
    } else if (cert.subject.o) {
        return `${raw ? '' : 'O: '}${cert.subject.o}`
    }

    return ''
}

export const getCertType = (cert: CerType) => {
    if (!cert.ext.basicConstraints || cert.ext.basicConstraints?.cA === false) {
        return `Leaf Certificate`
    } else if (cert.issuer.cn === cert.subject.cn) {
        return `Root Certificate`
    }

    return `Intermediate Certificate`
}

export const findCertData = (data: CerType[]) => {
    let name = ''
    let serialNumber = ''
    let notBeforeUTC = ''
    let notAfterUTC = ''
    let status = undefined
    let type = ''

    data.forEach((d: CerType) => {
        if (name === '') {
            name = formatCertName(d)
        }
        if (serialNumber === '') {
            serialNumber = d.serialNumber
        }
        if (notBeforeUTC === '') {
            notBeforeUTC = d.notBeforeUTC
        }
        if (notAfterUTC === '') {
            notAfterUTC = d.notAfterUTC
        }
        if (type === '') {
            type = getCertType(d)
        }
    })

    if (notBeforeUTC && notAfterUTC) {
        const now = new Date()
        status = Date.parse(notBeforeUTC) <= now.valueOf() && now.valueOf() <= Date.parse(notAfterUTC)
    }

    return { name, serialNumber, notBeforeUTC, notAfterUTC, status, type }
}

export const parseCertificate = async (cert: string, id: number, customData?: any) => {
    const groups = [...cert.matchAll(/(-----[BEGIN \S]+?-----[\S\s]+?-----[END \S]+?-----)/g)]
    const certs = groups.map((g) => parse(pemToDER(g[0].replace(/(-----(BEGIN|END) CERTIFICATE-----|[\n\r])/g, ''))).then((c) => c))
    const data = await Promise.all(certs)
    const parsedData = findCertData(data as CerType[])

    return { id, data, dataChain: cert, ...parsedData, origin: customData }
}
