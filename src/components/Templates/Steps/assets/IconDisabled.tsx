import { FC } from 'react'

const IconDisabled: FC<any> = (props) => {
    return (
        <svg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg' {...props}>
            <circle cx='8' cy='8' fill='none' r='6.5' stroke='#D7D8DA' strokeWidth='1.5' />
        </svg>
    )
}

IconDisabled.displayName = 'IconDisabled'

export default IconDisabled
