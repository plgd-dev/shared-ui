import { Props as ModalProps } from '../../Atomic/Modal/Modal.types'

export type Props = {
    data: any
    i18n: {
        menuTitle: string
        commonName: string
        subjectName: string
        issuerName: string
        country: string
        organization: string
        validity: string
        notBefore: string
        notAfter: string
        publicKeyInfo: string
        algorithm: string
        keySize: string
        exponent: string
        modules: string
        fingerprints: string
        basicConstraints: string
        certificateAuthority: string
        yes: string
        no: string
        keyUsages: string
        purposes: string
        extendedKeyUsages: string
        subjectKeyID: string
        authorityKeyID: string
    }
} & ModalProps
