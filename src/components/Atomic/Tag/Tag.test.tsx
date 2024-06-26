import React from 'react'
import { render } from '../../../../test/jest-wrapper'
import Tag from './Tag'
import TagGroup from '../TagGroup'

describe('<Tag>', () => {
    it('render correctly - snapshot', () => {
        const { asFragment } = render(
            <div>
                <TagGroup
                    i18n={{
                        more: 'more',
                        modalHeadline: 'types',
                    }}
                >
                    <Tag>oic.d.clouddevice</Tag>
                    <Tag>oic.wk.d</Tag>
                    <Tag>oic.wk.e</Tag>
                    <Tag>oic.wk.f</Tag>
                    <Tag>oic.wk.g</Tag>
                </TagGroup>
            </div>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
