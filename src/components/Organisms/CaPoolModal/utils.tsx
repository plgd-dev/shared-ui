import React, { Dispatch, SetStateAction } from 'react'
import { MenuType } from './CaPoolModal.types'

export const getMenu = (data?: string | {}[]) =>
    !data || typeof data === 'string'
        ? []
        : data?.map((i: any, key: number) => ({
              id: key.toString(),
              title: i.subject.cn || i.subject.ou || i.subject.o || 'EMPTY',
              link: '',
          }))

export const getCommonNameElement = (name: string, activeItem: string, setActiveItem: Dispatch<SetStateAction<string>>, menu?: MenuType) => {
    const itemFromMenu = menu?.find((item) => item.title === name)

    if (itemFromMenu && activeItem !== itemFromMenu.id) {
        return (
            <a
                href='#'
                onClick={(e) => {
                    e.preventDefault()
                    setActiveItem(itemFromMenu.id)
                }}
            >
                {name}
            </a>
        )
    }

    return name
}

export const findInEntries = (entries: any, name: string) => {
    const index = entries.findIndex((item: any) => item[0] === name)

    return index >= 0 ? entries[index][1] : '-'
}

export const buildCATranslations = (_: any, t: any, g: any) => ({
    algorithm: _(t.algorithm),
    authorityInfoAIA: _(t.authorityInfoAIA),
    authorityKeyID: _(t.authorityKeyID),
    basicConstraints: _(t.basicConstraints),
    certificateAuthority: _(t.certificateAuthority),
    certificatePolicies: _(t.certificatePolicies),
    commonName: _(t.commonName),
    country: _(t.country),
    dNSName: _(t.dNSName),
    download: _(t.download),
    embeddedSCTs: _(t.embeddedSCTs),
    exponent: _(t.exponent),
    extendedKeyUsages: _(t.extendedKeyUsages),
    fingerprints: _(t.fingerprints),
    issuerName: _(t.issuerName),
    keySize: _(t.keySize),
    keyUsages: _(t.keyUsages),
    location: _(t.location),
    logID: _(t.logID),
    menuTitle: _(t.certificates),
    method: _(t.method),
    miscellaneous: _(t.miscellaneous),
    modules: _(t.modules),
    no: _(g.no),
    notAfter: _(t.notAfter),
    notBefore: _(t.notBefore),
    organization: _(t.organization),
    policy: _(t.policy),
    publicKeyInfo: _(t.publicKeyInfo),
    purposes: _(t.purposes),
    serialNumber: _(t.serialNumber),
    signatureAlgorithm: _(t.signatureAlgorithm),
    subjectAltNames: _(t.subjectAltNames),
    subjectKeyID: _(t.subjectKeyID),
    subjectName: _(t.subjectName),
    timestamp: _(t.timestamp),
    validity: _(t.validity),
    value: _(t.value),
    version: _(g.version),
    yes: _(g.yes),
})
