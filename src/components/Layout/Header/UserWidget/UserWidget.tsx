import { FC, useRef, useState } from 'react'
import { Props } from './UserWidget.types'
import * as styles from './UserWidget.styles'
import Avatar from 'react-avatar'
import { useClickOutside } from '../../../../common/hooks'
import { offset, shift, useFloating } from '@floating-ui/react'
import Icon from '../../../Atomic/Icon'

const UserWidget: FC<Props> = (props) => {
    const { name, description, defaultOpen, dropdownItems, image, loading } = props
    const [open, setOpen] = useState(defaultOpen ?? false)
    const clickRef = useRef<HTMLDivElement>(null)
    useClickOutside(clickRef, () => setOpen(false))

    const { x, y, reference, floating, strategy } = useFloating({
        placement: 'bottom-end',
        strategy: 'fixed',
        middleware: [shift(), offset(4)],
    })

    if (loading) {
        return null
    }

    const handleClick = () => {
        dropdownItems && setOpen(!open)
    }

    return (
        <div ref={clickRef}>
            <div css={styles.widgetReference} onClick={handleClick} ref={reference}>
                <div css={[styles.userWidget, dropdownItems && styles.clickable]}>
                    {image && <div css={styles.image}>{typeof image === 'string' ? <img alt={name} src={image} /> : image}</div>}
                    {!image && (
                        <div css={styles.image}>
                            <Avatar color='#255897' name={name} round='50%' size='44' />
                        </div>
                    )}
                    <div>
                        <div css={styles.name}>{name}</div>
                        {description && <div css={styles.description}>{description}</div>}
                    </div>
                </div>
                {dropdownItems && (
                    <div css={styles.widgetArrow}>
                        <Icon css={[styles.icon, open && styles.iconActive]} icon='arrow-down' size={12} />
                    </div>
                )}
            </div>

            {dropdownItems && open && (
                <div
                    css={styles.floatingMenu}
                    ref={floating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                        width: 'max-content',
                    }}
                >
                    {dropdownItems.map((item) => (
                        <div css={styles.item} onClick={item.onClick} key={item.title}>
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

UserWidget.displayName = 'UserWidget'

export default UserWidget
