import { Props as ModalProps } from '../../Atomic/Modal/Modal.types'

export type i18nType = {
    algorithm: string
    authorityInfoAIA: string
    authorityKeyID: string
    basicConstraints: string
    certificateAuthority: string
    certificatePolicies: string
    commonName: string
    country: string
    dNSName: string
    download: string
    embeddedSCTs: string
    exponent: string
    extendedKeyUsages: string
    fingerprints: string
    issuerName: string
    keySize: string
    keyUsages: string
    location: string
    logID: string
    menuTitle: string
    method: string
    miscellaneous: string
    modules: string
    no: string
    notAfter: string
    notBefore: string
    organization: string
    policy: string
    publicKeyInfo: string
    purposes: string
    serialNumber: string
    signatureAlgorithm: string
    subjectAltNames: string
    subjectKeyID: string
    subjectName: string
    timestamp: string
    validity: string
    value: string
    version: string
    yes: string
}

export type Props = {
    data?: string | {}[]
    dataChain?: any
    i18n: i18nType
} & ModalProps

export type MenuType = {
    id: string
    title: string
    link: string
}[]
