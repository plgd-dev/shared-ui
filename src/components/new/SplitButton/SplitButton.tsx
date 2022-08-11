import { FC } from 'react'
import RBDropdown from 'react-bootstrap/Dropdown'
import classNames from 'classnames'
import Button, { buttonVariants, iconPositions } from '../Button'
import { Props, defaultProps } from './SplitButton.types'

const SplitButton: FC<Props> = (props) => {
    const { children, variant, className, menuProps, items, disabled, ...rest } = props

    return (
        <RBDropdown className='split-button'>
            <Button {...rest} variant={variant} disabled={disabled} className={classNames('split-button-left', className)}>
                {children}
            </Button>
            <RBDropdown.Toggle variant={variant} disabled={disabled} className='split-button-right' />

            <RBDropdown.Menu
                {...menuProps}
                popperConfig={{
                    strategy: 'fixed',
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 5],
                            },
                        },
                    ],
                }}
            >
                {items
                    .filter((item) => !item.hidden)
                    .map((item) => {
                        return (
                            item.component || (
                                <RBDropdown.Item className='btn btn-secondary' key={item.id || item.label} onClick={item.onClick}>
                                    {item.icon && <i className={`fas ${item.icon} m-r-10`} />}
                                    {item.label}
                                </RBDropdown.Item>
                            )
                        )
                    })}
            </RBDropdown.Menu>
        </RBDropdown>
    )
}

SplitButton.defaultProps = defaultProps
SplitButton.displayName = 'SplitButton'

export default SplitButton
