import React, { FC, useMemo, useState } from 'react'

import Spacer from '../../../Atomic/Spacer'
import Headline from '../../../Atomic/Headline'
import SimpleStripTable from '../../../Atomic/SimpleStripTable'
import { Row as SimpleStripTableRowType } from '../../../Atomic/SimpleStripTable/SimpleStripTable.types'
import { findInEntries, getCommonNameElement, getMenu } from '../utils'
import { Props } from './CaPoolModalContent.types'
import Column from '../../../Atomic/Grid/Column'
import ContentMenu from '../../../Atomic/ContentMenu'
import ContentSwitch from '../../../Atomic/ContentSwitch'
import Row from '../../../Atomic/Grid/Row'

const CaPoolModalContent: FC<Props> = (props) => {
    const { data, i18n, maxHeight } = props

    console.log(data)

    const [activeItem, setActiveItem] = useState('0')

    const menu = useMemo(() => (data ? getMenu(data) : []), [data])
    const hasContentMenu = useMemo(() => data && Array.isArray(data) && data.length > 1, [data])

    return (
        <Row style={{ width: 'calc(100% + 16px)', height: '100%', overflow: 'hidden' }}>
            {hasContentMenu && (
                <Column size={3}>
                    <ContentMenu
                        menuSearch
                        activeItem={activeItem}
                        handleItemClick={(item) => setActiveItem(item.id)}
                        handleSubItemClick={(_item, parentItem) => {
                            _item.contentRef?.current?.scrollIntoView({ behavior: 'smooth' })
                            setActiveItem(parentItem.id)
                        }}
                        menu={menu!}
                        title={i18n.menuTitle}
                    />
                </Column>
            )}
            <Column size={hasContentMenu ? 9 : 12} style={{ height: '100%', overflow: 'auto', maxHeight }}>
                {data && Array.isArray(data) && (
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
                                                {
                                                    attribute: i18n.country,
                                                    value: findInEntries(item?.issuer?.entries, 'Country'),
                                                },
                                                {
                                                    attribute: i18n.organization,
                                                    value: findInEntries(item?.issuer?.entries, 'Organization'),
                                                },
                                                {
                                                    attribute: i18n.commonName,
                                                    value: getCommonNameElement(
                                                        findInEntries(item?.issuer?.entries, 'Common Name'),
                                                        activeItem,
                                                        setActiveItem,
                                                        menu
                                                    ),
                                                },
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
                                {item?.ext?.san?.altNames && (
                                    <>
                                        <Spacer type='mt-8 mb-4'>
                                            <Headline type='h6'>{i18n.subjectAltNames}</Headline>
                                        </Spacer>
                                        <SimpleStripTable
                                            leftColSize={6}
                                            rightColSize={6}
                                            rows={[
                                                {
                                                    attribute: i18n.dNSName,
                                                    value: findInEntries(item?.ext?.san?.altNames, 'DNS Name'),
                                                },
                                            ]}
                                        />
                                    </>
                                )}
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
                                                    {
                                                        attribute: i18n.keySize,
                                                        value: item?.subjectPublicKeyInfo.keysize,
                                                    },
                                                    {
                                                        attribute: i18n.exponent,
                                                        value: item?.subjectPublicKeyInfo.keysize,
                                                    },
                                                    item?.subjectPublicKeyInfo.n
                                                        ? {
                                                              attribute: i18n.modules,
                                                              value: (
                                                                  <span
                                                                      style={{
                                                                          overflow: 'hidden',
                                                                          textOverflow: 'ellipsis',
                                                                      }}
                                                                  >
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
                                <Spacer type='mt-8 mb-4'>
                                    <Headline type='h6'>{i18n.miscellaneous}</Headline>
                                </Spacer>
                                <SimpleStripTable
                                    leftColSize={6}
                                    rightColSize={6}
                                    rows={
                                        [
                                            item?.serialNumber
                                                ? {
                                                      attribute: i18n.serialNumber,
                                                      value: item?.serialNumber,
                                                  }
                                                : undefined,
                                            item?.signature?.name
                                                ? {
                                                      attribute: i18n.signatureAlgorithm,
                                                      value: item?.signature?.name,
                                                  }
                                                : undefined,
                                            { attribute: i18n.version, value: item?.version },
                                            item?.files
                                                ? {
                                                      attribute: i18n.download,
                                                      value: (
                                                          <span>
                                                              <a
                                                                  download='PEM(cert).pem'
                                                                  href={window.URL.createObjectURL(
                                                                      new Blob([item.files.pem.replace(/%0D%0A/g, '\n').replace(/%20/g, ' ')], {
                                                                          type: 'application/x-pem-file',
                                                                      })
                                                                  )}
                                                              >
                                                                  PEM (cert)
                                                              </a>
                                                          </span>
                                                      ),
                                                  }
                                                : undefined,
                                        ].filter((i) => !!i) as SimpleStripTableRowType[]
                                    }
                                />
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
                                                                  <span
                                                                      style={{
                                                                          overflow: 'hidden',
                                                                          textOverflow: 'ellipsis',
                                                                      }}
                                                                  >
                                                                      {item?.fingerprint?.sha256}
                                                                  </span>
                                                              ),
                                                          }
                                                        : undefined,
                                                    item?.fingerprint?.sha1
                                                        ? {
                                                              attribute: 'SHA-1',
                                                              value: (
                                                                  <span
                                                                      style={{
                                                                          overflow: 'hidden',
                                                                          textOverflow: 'ellipsis',
                                                                      }}
                                                                  >
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
                                                    value: (
                                                        <span
                                                            style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                            }}
                                                        >
                                                            {item?.ext?.sKID?.id}
                                                        </span>
                                                    ),
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
                                                    value: (
                                                        <span
                                                            style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                            }}
                                                        >
                                                            {item?.ext?.aKID?.id}
                                                        </span>
                                                    ),
                                                },
                                            ]}
                                        />
                                    </>
                                )}
                                {item?.ext?.aia?.descriptions && (
                                    <>
                                        <Spacer type='mt-8'>
                                            <Headline type='h6'>{i18n.authorityInfoAIA}</Headline>
                                        </Spacer>
                                        {Object.values(item?.ext?.aia?.descriptions).map((aiaItem: any, key) => (
                                            <Spacer key={key} type={`mt-${key === 0 ? 4 : 6}`}>
                                                <SimpleStripTable
                                                    headerLeft={'#' + `${key + 1}`.padStart(2, '0')}
                                                    leftColSize={6}
                                                    rightColSize={6}
                                                    rows={[
                                                        {
                                                            attribute: i18n.location,
                                                            value: aiaItem.location,
                                                        },
                                                        {
                                                            attribute: i18n.method,
                                                            value: aiaItem.method,
                                                        },
                                                    ]}
                                                />
                                            </Spacer>
                                        ))}
                                    </>
                                )}
                                {item?.ext?.cp?.policies && (
                                    <>
                                        <Spacer type='mt-8'>
                                            <Headline type='h6'>{i18n.certificatePolicies}</Headline>
                                        </Spacer>
                                        {Object.values(item?.ext?.cp?.policies).map((policy: any, key) => (
                                            <Spacer key={key} type={`mt-${key === 0 ? 4 : 6}`}>
                                                <SimpleStripTable
                                                    headerLeft={'#' + `${key + 1}`.padStart(2, '0')}
                                                    leftColSize={6}
                                                    rightColSize={6}
                                                    rows={[
                                                        {
                                                            attribute: i18n.policy,
                                                            value: policy.name,
                                                        },
                                                        {
                                                            attribute: i18n.value,
                                                            value: policy.value,
                                                        },
                                                    ]}
                                                />
                                            </Spacer>
                                        ))}
                                    </>
                                )}
                                {item?.ext?.scts?.timestamps?.length > 0 && (
                                    <>
                                        <Spacer type='mt-8'>
                                            <Headline type='h6'>{i18n.embeddedSCTs}</Headline>
                                        </Spacer>
                                        {item?.ext?.scts?.timestamps.map((timestampItem: any, key: number) => (
                                            <Spacer key={key} type={`mt-${key === 0 ? 4 : 6}`}>
                                                <SimpleStripTable
                                                    headerLeft={'#' + `${key + 1}`.padStart(2, '0')}
                                                    leftColSize={6}
                                                    rightColSize={6}
                                                    rows={[
                                                        {
                                                            attribute: i18n.logID,
                                                            value: (
                                                                <span
                                                                    style={{
                                                                        overflow: 'hidden',
                                                                        textOverflow: 'ellipsis',
                                                                    }}
                                                                >
                                                                    {timestampItem.logId}
                                                                </span>
                                                            ),
                                                        },
                                                        {
                                                            attribute: i18n.signatureAlgorithm,
                                                            value: timestampItem.signatureAlgorithm,
                                                        },
                                                        {
                                                            attribute: i18n.version,
                                                            value: timestampItem.version,
                                                        },
                                                        {
                                                            attribute: i18n.timestamp,
                                                            value: timestampItem.timestampUTC,
                                                        },
                                                    ]}
                                                />
                                            </Spacer>
                                        ))}
                                    </>
                                )}
                            </div>
                        ))}
                    </ContentSwitch>
                )}
            </Column>
        </Row>
    )
}

CaPoolModalContent.displayName = 'CaPoolModalContent'

export default CaPoolModalContent
