import React from 'react'
import { Icon, IconsRaw } from '../../components/Atomic/Icon'
import '../global.css'
import { StoryFn } from '@storybook/react'

export default {
    title: 'Assets/Icon',
    component: Icon,
    argTypes: {},
}

const chunkify = (a: any, n = 5, balanced = true) => {
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

const Template = (args: any) => (
    <>
        <div className='custom-row'>
            {chunkify(IconsRaw).map((chunk, key) => (
                <div className='custom-cell' key={key}>
                    <table className='custom-table'>
                        <tbody>
                            {chunk.map((icon: string, innerKey: string) => {
                                return (
                                    <tr key={innerKey}>
                                        <td>{icon}</td>
                                        <td>
                                            <Icon {...args} icon={icon} size={32} />
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

export const Default: StoryFn = Template.bind({})
Default.args = {}
