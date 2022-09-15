import { ReactElement } from 'react'

export type Props = {
    condition: boolean
    wrapper: (c: ReactElement) => ReactElement
    children: ReactElement
}
