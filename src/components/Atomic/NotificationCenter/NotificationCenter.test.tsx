import { render } from '@testing-library/react'
import NotificationCenter from './NotificationCenter'

describe('<NotificationCenter>', () => {
    it('should render without crashing', () => {
        const { container, asFragment } = render(
            <NotificationCenter i18n={{ notifications: 'notifications', noNotifications: 'noNotifications', markAllAsRead: 'markAllAsRead' }} />
        )
        expect(container).toBeTruthy()
        expect(asFragment()).toMatchSnapshot()
    })
})
