import RB_Badge from 'react-bootstrap/Badge'
import { Props } from './Badge.types'

const Badge = (props: Props) => {
    const { children, ...rest } = props
    return (
        <RB_Badge pill {...rest}>
            {children}
        </RB_Badge>
    )
}

Badge.displayName = 'Badge'

export default Badge
