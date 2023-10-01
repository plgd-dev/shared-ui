import { WellKnownConfigType } from '../../../../common/hooks'

export type Props = {
    updateWellKnownConfig: (data: WellKnownConfigType) => void
    wellKnownConfig: WellKnownConfigType
}
