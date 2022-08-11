import { FC } from 'react'
import RB_Badge from 'react-bootstrap/Badge'

const Badge: FC = (props) => {
    const { children, ...rest } = props
    return (
        <RB_Badge pill {...rest} bg='info'>
            {children}
        </RB_Badge>
    )
}

Badge.displayName = 'Badge'

export default Badge
