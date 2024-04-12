import { Props } from './ConditionalWrapper.types'
import { ReactElement, FC } from 'react'

const ConditionalWrapper: FC<Props> = ({ condition, wrapper, children }) => (condition ? wrapper(children as ReactElement) : children) as ReactElement

ConditionalWrapper.displayName = 'ConditionalWrapper'

export default ConditionalWrapper
