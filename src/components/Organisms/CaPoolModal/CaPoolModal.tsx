import React, { FC, useCallback, useMemo, useState } from 'react'
import Modal from '../../Atomic/Modal'
import { Props } from './CaPoolModal.types'
import Row from '../../Atomic/Grid/Row'
import Column from '../../Atomic/Grid/Column'
import ContentMenu from '../../Atomic/ContentMenu'
import { ItemType } from '../../Atomic/ContentMenu/ContentMenu.types'
import Headline from '../../Atomic/Headline'
import SimpleStripTable from '../../Atomic/SimpleStripTable'
import { Row as SimpleStripTableRowType } from '../../Atomic/SimpleStripTable/SimpleStripTable.types'
import Spacer from '../../Atomic/Spacer'
import ContentSwitch from '../../Atomic/ContentSwitch'
import useWindowDimensions from '../../../common/hooks/useWindowDimensions'

const CaPoolModal: FC<Props> = (props) => {
    const { data, i18n, ...rest } = props

    const [activeItem, setActiveItem] = useState('0')

    const { height } = useWindowDimensions()

    const handleItemClick = useCallback((item: ItemType) => {
        setActiveItem(item.id)
    }, [])

    const menu = useMemo(
        () =>
            data?.map((i: any, key: number) => ({
                id: key.toString(),
                title: i.subject.cn || i.subject.o || 'EMPTY',
                link: '',
            })),
        [data]
    )

    const findInEntries = (entries: [], name: string) => {
        const index = entries.findIndex((item) => item[0] === name)

        if (index >= 0) {
            return entries[index][1]
        }

        return '-'
    }

    const body = (
        <Row style={{ width: 'calc(100% + 16px)', height: '100%', overflow: 'hidden' }}>
            <Column size={3}>
                <ContentMenu
                    menuSearch
                    activeItem={activeItem}
                    handleItemClick={handleItemClick}
                    handleSubItemClick={(_item, parentItem) => {
                        _item.contentRef?.current?.scrollIntoView({ behavior: 'smooth' })
                        setActiveItem(parentItem.id)
                    }}
                    menu={menu}
                    title={i18n.menuTitle}
                />
            </Column>
            <Column size={9} style={{ height: '100%', overflow: 'auto', maxHeight: height - 40 - 48 - 98 - 24 }}>
                {data && (
                    <ContentSwitch activeItem={parseInt(activeItem)}>
                        {data?.map((item: any, key: number) => (
                            <div key={key}>
                                <Spacer type='mb-4'>
                                    <Headline type='h6'>{i18n.subjectName}</Headline>
                                </Spacer>
                                <SimpleStripTable leftColSize={6} rightColSize={6} rows={[{ attribute: i18n.commonName, value: item.subject.cn }]} />
                                {item?.issuer?.entries && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.issuerName}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={[
                                                { attribute: i18n.country, value: findInEntries(item?.issuer?.entries, 'Country') },
                                                { attribute: i18n.organization, value: findInEntries(item?.issuer?.entries, 'Organization') },
                                                { attribute: i18n.commonName, value: findInEntries(item?.issuer?.entries, 'Common Name') },
                                            ]}
                                        />
                                    </>
                                )}
                                <Spacer type='mt-8 mb-4'>
                                    <Headline type='h6'>{i18n.validity}</Headline>
                                </Spacer>
                                <SimpleStripTable
                                    leftColSize={6}
                                    rightColSize={6}
                                    rows={[
                                        { attribute: i18n.notBefore, value: item?.notBeforeUTC },
                                        { attribute: i18n.notAfter, value: item?.notAfterUTC },
                                    ]}
                                />
                                {item?.subjectPublicKeyInfo && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.publicKeyInfo}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={
                                                [
                                                    { attribute: i18n.algorithm, value: item?.subjectPublicKeyInfo.kty },
                                                    { attribute: i18n.keySize, value: item?.subjectPublicKeyInfo.keysize },
                                                    { attribute: i18n.exponent, value: item?.subjectPublicKeyInfo.keysize },
                                                    item?.subjectPublicKeyInfo.n
                                                        ? {
                                                              attribute: i18n.modules,
                                                              value: (
                                                                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                                      {item?.subjectPublicKeyInfo.n}
                                                                  </span>
                                                              ),
                                                          }
                                                        : undefined,
                                                ].filter((i) => !!i) as SimpleStripTableRowType[]
                                            }
                                        />
                                    </>
                                )}
                                {item?.fingerprint && (item?.fingerprint?.sha256 || item?.fingerprint?.sha1) && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.fingerprints}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={
                                                [
                                                    item?.fingerprint?.sha256
                                                        ? {
                                                              attribute: 'SHA-256',
                                                              value: (
                                                                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                                      {item?.fingerprint?.sha256}
                                                                  </span>
                                                              ),
                                                          }
                                                        : undefined,
                                                    item?.fingerprint?.sha1
                                                        ? {
                                                              attribute: 'SHA-1',
                                                              value: (
                                                                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                                      {item?.fingerprint?.sha1}
                                                                  </span>
                                                              ),
                                                          }
                                                        : undefined,
                                                ].filter((i) => !!i) as SimpleStripTableRowType[]
                                            }
                                        />
                                    </>
                                )}
                                {item?.ext?.basicConstraints && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.basicConstraints}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={[
                                                {
                                                    attribute: i18n.certificateAuthority,
                                                    value: item?.ext?.basicConstraints.cA ? i18n.yes : i18n.no,
                                                },
                                            ]}
                                        />
                                    </>
                                )}
                                {item?.ext?.keyUsages?.purposes && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.keyUsages}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={[
                                                {
                                                    attribute: i18n.purposes,
                                                    value: item?.ext?.keyUsages.purposes.join(', '),
                                                },
                                            ]}
                                        />
                                    </>
                                )}
                                {item?.ext?.eKeyUsages?.purposes && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.extendedKeyUsages}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={[
                                                {
                                                    attribute: i18n.purposes,
                                                    value: item?.ext?.eKeyUsages.purposes.join(', '),
                                                },
                                            ]}
                                        />
                                    </>
                                )}
                                {item?.ext?.sKID?.id && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.subjectKeyID}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={[
                                                {
                                                    attribute: i18n.purposes,
                                                    value: <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item?.ext?.sKID?.id}</span>,
                                                },
                                            ]}
                                        />
                                    </>
                                )}
                                {item?.ext?.aKID?.id && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.authorityKeyID}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={[
                                                {
                                                    attribute: i18n.purposes,
                                                    value: <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item?.ext?.aKID?.id}</span>,
                                                },
                                            ]}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </ContentSwitch>
                )}
            </Column>
        </Row>
    )

    return (
        <Modal
            {...rest}
            appRoot={document.getElementById('root')}
            bodyStyle={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}
            maxHeight={height ? height - 40 : undefined}
            maxWidth={1100}
            portalTarget={document.getElementById('modal-root')}
            renderBody={body}
            width='100%'
        />
    )
}

CaPoolModal.displayName = 'CaPoolModal'

export default CaPoolModal
