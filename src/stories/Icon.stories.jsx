import React from 'react'
import { Icon } from '../components/Atomic/Icon'
import './global.css'

export default {
    title: 'Assets/Icon',
    component: Icon,
    argTypes: {},
}

const data = [
    { name: 'icon-actions' },
    { name: 'icon-arrow-detail' },
    { name: 'icon-arrow-down' },
    { name: 'icon-arrow-down-no-padding' },
    { name: 'icon-arrow-left' },
    { name: 'icon-arrow-right' },
    { name: 'icon-arrow-triangle-full-up' },
    { name: 'icon-arrow-up' },
    { name: 'icon-bell' },
    { name: 'icon-certificate' },
    { name: 'icon-chat' },
    { name: 'icon-check' },
    { name: 'icon-close' },
    { name: 'icon-close-circle' },
    { name: 'icon-cloud-error' },
    { name: 'icon-cloud-success' },
    { name: 'icon-cloud-warning' },
    { name: 'icon-collapse' },
    { name: 'icon-copy' },
    { name: 'icon-dashboard' },
    { name: 'icon-device-update' },
    { name: 'icon-devices' },
    { name: 'icon-docs' },
    { name: 'icon-download' },
    { name: 'icon-edit' },
    { name: 'icon-error' },
    { name: 'icon-file-pem' },
    { name: 'icon-file-upload' },
    { name: 'icon-hide-password' },
    { name: 'icon-show-password' },
    { name: 'icon-info' },
    { name: 'icon-integrations' },
    { name: 'icon-link' },
    { name: 'icon-loader' },
    { name: 'icon-lock' },
    { name: 'icon-log' },
    { name: 'icon-net' },
    { name: 'icon-network' },
    { name: 'icon-notification' },
    { name: 'icon-pending-commands' },
    { name: 'icon-plus' },
    { name: 'icon-refresh' },
    { name: 'icon-remote-clients' },
    { name: 'icon-search' },
    { name: 'icon-settings' },
    { name: 'icon-shield' },
    { name: 'icon-show-password' },
    { name: 'icon-sort-down' },
    { name: 'icon-sort-up' },
    { name: 'icon-success' },
    { name: 'icon-table-arrow-down' },
    { name: 'icon-table-arrow-up' },
    { name: 'icon-toast-close' },
    { name: 'icon-trash' },
    { name: 'icon-warning' },
]

const chunkify = (a, n = 4, balanced = true) => {
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
