import { render } from '@testing-library/react'
import Checkbox from './Checkbox'

describe('<Checkbox>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <Checkbox defaultChecked={false} name='checkbox-01' />
                <Checkbox defaultChecked={true} name='checkbox-02' />
                <Checkbox indeterminate={true} name='checkbox-03' />
                <Checkbox
                    defaultChecked={false}
                    label='Sure, send me insightful product news, and occasional offers by email. I know I can unsubscribe at any time.'
                    name='checkbox-04'
                />
                <Checkbox
                    defaultChecked={true}
                    label='Sure, send me insightful product news, and occasional offers by email. I know I can unsubscribe at any time.'
                    name='checkbox-05'
                />
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
