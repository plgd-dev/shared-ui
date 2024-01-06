import React, { useState } from 'react'

import ColorPicker from '../../components/Atomic/ColorPicker'

export default (args?: any) => {
    const [color, setColor] = useState('rgba(255,0,0,0.4)')
    return (
        <div className='custom-row'>
            <div className='custom-cell'>
                <ColorPicker {...args} defaultColor='rgba(255,0,0,1)' />
            </div>
            <div className='custom-cell'>
                <ColorPicker {...args} defaultColor='rgba(255,0,0,0.4)' onColorChange={(c) => setColor(c)} />
                color: {color}
            </div>
        </div>
    )
}
