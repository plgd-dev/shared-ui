import FormSelect from '../../components/Atomic/FormSelect'
import '../global.css'
import Example from './FormSelect.snip'

export default {
    title: 'Form/FormSelect',
    component: FormSelect,
}

export const Default = Example.bind({})
Default.args = {}

export const Small = Example.bind({})
Small.args = {
    size: 'small',
}

export const Disabled = Example.bind({})
Disabled.args = {
    disabled: true,
}

export const Error = Example.bind({})
Error.args = {
    error: true,
}
