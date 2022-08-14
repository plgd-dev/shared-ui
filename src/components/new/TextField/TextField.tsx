import Form from 'react-bootstrap/Form'
import { FC } from 'react'
import { Props } from './TextField.types'

const TextField: FC<Props> = ({ value, inputRef, ...rest }) => <Form.Control {...rest} ref={inputRef} type='text' value={value} />

TextField.displayName = 'TextField'

export default TextField
