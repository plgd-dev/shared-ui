import { Props } from './ConditionalWrapper.types';

const ConditionalWrapper  = ({ condition, wrapper, children }: Props) =>
    condition ? wrapper(children) : children

ConditionalWrapper.displayName = 'ConditionalWrapper'

export default ConditionalWrapper