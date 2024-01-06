import Switch from '../../components/Atomic/Switch'
import Example from './Switch.snip'

export default {
    title: 'Form/Switch',
    component: Switch,
    argTypes: {},
}

export const Default = Example.bind({})
Default.args = {}

export const Loading = Example.bind({})
Loading.args = {
    loading: true,
}

export const Disabled = Example.bind({})
Loading.args = {
    disabled: true,
}
