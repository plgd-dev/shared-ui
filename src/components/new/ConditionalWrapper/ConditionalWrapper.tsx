import { Props } from './ConditionalWrapper.types'
import { ReactElement } from 'react'

const ConditionalWrapper = ({ condition, wrapper, children }: Props) => (condition ? wrapper(children as ReactElement) : children)

ConditionalWrapper.displayName = 'ConditionalWrapper'

export default ConditionalWrapper
