import { FC } from 'react'

const IconCircle: FC<any> = (props) => {
    return (
        <svg fill='none' height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='16' cy='16' r='6.25' stroke={props.fill || '#2261AE'} strokeWidth='1.5' />
        </svg>
    )
}

IconCircle.displayName = 'IconCircle'

export default IconCircle
