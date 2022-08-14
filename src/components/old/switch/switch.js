import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'

export const Switch = ({ id, label, ...rest }) => {
  return (
    <Form.Switch
      {...rest}
      id={id}
      label={label}
    />
  )
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
}
