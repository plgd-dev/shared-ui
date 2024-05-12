import { render } from '../../../../test/jest-wrapper'
import FormInput from '../FormInput'
import { IconPlus } from '../Icon'

describe('<FormInput>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <h3>Placeholder</h3>
                <FormInput placeholder='Placeholder text' />
                <br />
                <h3>Default text</h3>
                <FormInput defaultValue='Default value text' />
                <br />
                <h3>Disabled</h3>
                <FormInput defaultValue='Default value text' disabled={true} />
                <br />
                <h3>Error</h3>
                <FormInput defaultValue='Default value text' error={true} />
                <br />
                <h3>Password</h3>
                <form action=''>
                    <FormInput defaultValue='Text' name='new-password' type='password' />
                </form>
                <br />
                <h3>Copy</h3>
                <FormInput copy={true} defaultValue='Text' />
                <br />
                <h3>Copy secret</h3>
                <form action=''>
                    <FormInput copy={true} defaultValue='Text' name='new-password' type='password' />
                </form>
                <br />
                <h3>Phone</h3>
                <FormInput defaultValue='Text' icon={<IconPlus />} telPattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' telPrefix='+421' type='tel' />
                <br />
                <h3>Normal size</h3>
                <FormInput defaultValue='Normal size' size='normal' />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
