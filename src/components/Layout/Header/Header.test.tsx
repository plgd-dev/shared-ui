import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import UserWidget from './UserWidget'

describe('<Header>', () => {
    it('render correctly - snapshot', () => {
        const userData = {
            profile: {
                name: '',
                family_name: '',
                picture: '',
            },
        }
        const { asFragment } = render(
            <Header
                breadcrumbs={<div id='breadcrumbsPortalTarget'></div>}
                userWidget={<UserWidget description={userData?.profile?.family_name} image={userData?.profile?.picture} name={userData?.profile?.name || ''} />}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
