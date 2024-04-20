import { render, waitFor } from '@testing-library/react'
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
