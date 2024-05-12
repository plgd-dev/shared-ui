import { waitFor } from '@testing-library/react'
import { render } from '../../../../test/jest-wrapper'
import Icon, { IconsRaw } from '../Icon'

describe('<Icon>', () => {
    it('render correctly - snapshot', async () => {
        const { asFragment } = render(
            <div>
                {IconsRaw.map((icon, index) => (
                    <Icon icon={icon} key={index} />
                ))}
            </div>
        )

        await waitFor(() => {
            expect(asFragment()).toMatchSnapshot()
        })
    })
})
