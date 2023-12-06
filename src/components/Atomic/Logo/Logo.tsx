import { FC } from 'react'

import { Props } from './Logo.types'

const Logo: FC<Props> = (props) => {
    const { css, logo, className, onClick, title } = props
    return <img alt={title || ''} className={className} css={css} height={logo.height} onClick={onClick} src={logo.source} width={logo.width} />
}

Logo.displayName = 'Logo'

export default Logo
