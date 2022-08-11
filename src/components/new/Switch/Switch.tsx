import { FC } from 'react'
import Form from 'react-bootstrap/Form'
import { Props } from './Switch.types'

const Switch: FC<Props> = ({ id, label, ...rest }) => <Form.Switch {...rest} id={id} label={label} bsCustomPrefix='switch-control' />

Switch.displayName = 'Switch'

export default Switch
