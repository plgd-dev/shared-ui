import { i18nType } from '../CaPoolModal.types'

export type Props = {
    i18n: i18nType
    data: CerType[]
    maxHeight?: number
}

export interface CerType {
    ext: EXT
    files: Files
    fingerprint: Fingerprint
    issuer: Issuer
    notBefore: string
    notBeforeUTC: string
    notAfter: string
    notAfterUTC: string
    subject: Issuer
    serialNumber: string
    signature: Signature
    subjectPublicKeyInfo: SubjectPublicKeyInfo
    unsupportedExtensions: any[]
    version: string
}

export interface EXT {
    aia?: Aia
    aKID?: Kid
    basicConstraints?: BasicConstraints
    crlPoints?: CrlPoints
    cp?: Cp
    eKeyUsages?: KeyUsages
    keyUsages?: KeyUsages
    msCrypto?: MSCrypto
    ocspStaple?: OcspStaple
    scts?: Scts
    sKID?: Kid
    san?: SAN
}

export interface Kid {
    critical: boolean
    id: string
}

export interface Aia {
    descriptions: Description[]
    critical: boolean
}

export interface Description {
    location: string
    method: string
}

export interface BasicConstraints {
    cA: boolean
    critical: boolean
}

export interface Cp {
    critical: boolean
    policies: Policy[]
}

export interface Policy {
    id: string
    name: string
    value: string
}

export interface CrlPoints {
    critical: boolean
    points: string[]
}

export interface KeyUsages {
    critical: boolean
    purposes: string[]
}

export interface MSCrypto {
    exists?: boolean
    caVersion: any
    certificatePolicies: any
    certificateTemplate: any
    certificateType: any
    previousHash: any
}

export interface OcspStaple {
    critical: boolean
    required: boolean
}

export interface SAN {
    altNames: any[]
    critical: boolean
}

export interface Scts {
    critical: boolean
    timestamps: any[]
}

export interface Files {
    pem: string
}

export interface Fingerprint {
    sha1: string
    sha256: string
}

export interface Issuer {
    cn: string
    dn?: any
    entries: Array<string[]>
}

export interface Signature {
    name: string
    type: string
}

export interface SubjectPublicKeyInfo {
    e: number
    kty: string
    n: string
    keysize?: number
    x?: any
    y?: any
    xy?: any
}
