import { Children, ReactNode, ReactElement } from 'react'
import { Props, ComponentType } from './Show.types'

const Show: ComponentType<Props> = (props) => {
    let when: ReactNode | null = null
    let otherwise: ReactNode | null = null

    Children.forEach(props.children, (child) => {
        const children = child as ReactElement<{ isTrue?: boolean }>

        if (children.props.isTrue === undefined) {
            otherwise = children
        } else if (!when && children.props.isTrue === true) {
            when = children
        }
    })

    return when || otherwise
}

Show.displayName = 'Show'

Show.When = ({ isTrue, children }) => isTrue && children
Show.Else = ({ render, children }) => render || children

export default Show
