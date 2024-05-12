import { render } from '../../../../test/jest-wrapper'
import FormGroup from './FormGroup'
import FormLabel from '../FormLabel'
import FormInput from '../FormInput'

describe('<FormGroup>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <FormGroup id='form-group-1'>
                    <FormLabel text='Placeholder text' />
                    <FormInput placeholder='Placeholder text' />
                </FormGroup>
                <FormGroup id='form-group-2'>
                    <FormLabel text='Placeholder text' />
                    <FormInput defaultValue='Default value text' />
                </FormGroup>
                <FormGroup id='form-group-3'>
                    <FormLabel text='Disabled text' />
                    <FormInput defaultValue='Disabled text' disabled={true} />
                </FormGroup>
                <FormGroup error='Error message' id='form-group-4'>
                    <FormLabel text='Error text' />
                    <FormInput defaultValue='Error text' />
                </FormGroup>
                <FormGroup id='form-group-5'>
                    <FormLabel text='Password' />
                    <FormInput defaultValue='Text' type='password' />
                </FormGroup>
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
