import { FC, memo, useState } from 'react'
import { useIntl } from 'react-intl'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'
import { format } from 'date-fns'
import { messages as t } from './Footer.i18n'
import './Footer.scss'
import { useAppConfig } from '@/containers/App'
import { copyToClipboard } from '../../../common/utils'
import { showSuccessToast } from '../../old/toast'
import Display from '../Display'
import { FooterLinkType, Props } from './Footer.types'

const Footer: FC<Props> = memo(({ links }) => {
    const { formatMessage: _ } = useIntl()
    const { buildInformation } = useAppConfig()
    const [show, setShow] = useState(false)

    const handleOnMouseEnter = () => {
        setShow(true)
    }
    const handleOnMouseLeave = () => {
        setShow(false)
    }

    const copyVersion = () => {
        if (buildInformation?.version) {
            copyToClipboard(buildInformation.version)
            showSuccessToast({
                title: _(t.done),
                message: _(t.copied),
            })
        }
    }

    const BuildInformation = () => {
        if (!buildInformation?.buildDate) {
            return null
        }
        return (
            <Display when={!!buildInformation}>
                <OverlayTrigger
                    placement='top'
                    overlay={
                        <Tooltip className='plgd-tooltip' id='footer-version'>
                            {_(t.clickToCopy)}
                        </Tooltip>
                    }
                >
                    <span className='copy' onClick={copyVersion}>
                        <i className={`fas fa-copy m-r-10`} />
                    </span>
                </OverlayTrigger>

                <OverlayTrigger
                    placement='top-start'
                    show={show}
                    delay={{ show: 0, hide: 1000 }}
                    overlay={
                        <Popover
                            id='popover-positioned-top'
                            className='plgd-popover interactive'
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                        >
                            <Popover.Body>
                                <div className='footerBuildInfo'>
                                    <div className='line'>
                                        <div className='attr'>Build time:</div>
                                        <div className='val'>{format(new Date(buildInformation.buildDate), 'Pp')}</div>
                                    </div>
                                    <div className='line'>
                                        <div className='attr'>Commit hash:</div>
                                        <a
                                            className='val'
                                            href={`https://github.com/plgd-dev/client-application/commit/${buildInformation.commitHash}`}
                                            target='_blank'
                                        >
                                            {buildInformation.commitHash}
                                        </a>
                                    </div>
                                </div>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <span onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                        {buildInformation.version}
                    </span>
                </OverlayTrigger>
            </Display>
        )
    }

    return (
        <footer id='footer'>
            <div id='pending-commands-wrapper'></div>
            <div className='left'>
                <BuildInformation />
            </div>
            <div className='right'>
                {links.map((item: FooterLinkType, index) => {
                    // @ts-ignore
                    const tran = _(t[item.i18key])
                    return (
                        <a href={item.to} target='_blank' rel='noopener' key={index}>
                            {tran}
                        </a>
                    )
                })}
            </div>
        </footer>
    )
})

Footer.displayName = 'Footer'

export default Footer
