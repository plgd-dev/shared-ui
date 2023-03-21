import React from 'react'
import { Icon } from '../components/new/Icon'
import './global.css'

export default {
    title: 'Assets/Icon',
    component: Icon,
    argTypes: {},
}

const data = [
    { name: 'actions' },
    { name: 'arrow-down' },
    { name: 'arrow-left' },
    { name: 'arrow-right' },
    { name: 'chat' },
    { name: 'close' },
    { name: 'close-circle' },
    { name: 'cloud-error' },
    { name: 'cloud-success' },
    { name: 'cloud-warning' },
    { name: 'collapse' },
    { name: 'copy' },
    { name: 'dashboard' },
    { name: 'device-update' },
    { name: 'devices' },
    { name: 'docs' },
    { name: 'edit' },
    { name: 'error' },
    { name: 'icon-hide-password' },
    { name: 'icon-show-password' },
    { name: 'info' },
    { name: 'integrations' },
    { name: 'link' },
    { name: 'loader' },
    { name: 'lock' },
    { name: 'log' },
    { name: 'net' },
    { name: 'network' },
    { name: 'notification' },
    { name: 'pending-commands' },
    { name: 'plus' },
    { name: 'refresh' },
    { name: 'remote-clients' },
    { name: 'search' },
    { name: 'settings' },
    { name: 'sort-down' },
    { name: 'sort-up' },
    { name: 'success' },
    { name: 'table-arrow-down' },
    { name: 'table-arrow-up' },
    { name: 'toast-close' },
    { name: 'trash' },
    { name: 'warning' },
]

const chunkify = (a, n = 3, balanced = true) => {
    if (n < 2) return [a]

    let len = a.length,
        out = [],
        i = 0,
        size

    if (len % n === 0) {
        size = Math.floor(len / n)
        while (i < len) {
            out.push(a.slice(i, (i += size)))
        }
    } else if (balanced) {
        while (i < len) {
            size = Math.ceil((len - i) / n--)
            out.push(a.slice(i, (i += size)))
        }
    } else {
        n--
        size = Math.floor(len / n)
        if (len % size === 0) size--
        while (i < size * n) {
            out.push(a.slice(i, (i += size)))
        }
        out.push(a.slice(size * n))
    }

    return out
}

const Template = (args) => (
    <>
        <div className='custom-row'>
            {chunkify(data).map((chunk, key) => (
                <div className='custom-cell' key={key}>
                    <table className='custom-table'>
                        <tbody>
                            {chunk.map((icon, innerKey) => {
                                const { name, ...rest } = icon
                                return (
                                    <tr key={innerKey}>
                                        <td>
                                            {icon.name}
                                            {icon.size ? ` (size: ${icon.size}px)` : ''}
                                        </td>
                                        <td>
                                            <Icon {...args} {...rest} icon={icon.name} size={icon?.size || 32} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    </>
)

export const Default = Template.bind({})
Default.args = {}
