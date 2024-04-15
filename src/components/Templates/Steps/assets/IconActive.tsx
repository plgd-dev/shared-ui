import { FC } from 'react'

const IconActive: FC<any> = (props) => {
    return (
        <svg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg' {...props}>
            <circle cx='8' cy='8' fill='none' r='6.25' stroke='#2261AE' strokeWidth='1.5' />
        </svg>
    )
}

IconActive.displayName = 'IconActive'

export default IconActive
