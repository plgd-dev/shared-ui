import { render } from '../../../../test/jest-wrapper'
import TagGroup from './TagGroup'
import Tag from '../Tag'

describe('TagGroup Component', () => {
    it('renders children when there is enough space', () => {
        const { getByText, asFragment } = render(
            <TagGroup i18n={{ more: 'more', modalHeadline: 'Modal Headline' }}>
                <Tag>Tag 1</Tag>
                <Tag>Tag 2</Tag>
            </TagGroup>
        )
        expect(getByText('Tag 1')).toBeInTheDocument()
        expect(getByText('Tag 2')).toBeInTheDocument()
        expect(asFragment()).toMatchSnapshot()
    })
})
