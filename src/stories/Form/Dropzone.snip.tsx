import React from 'react'
import Dropzone from '../../components/Atomic/Dropzone'

export default (args?: any) => (
    <div>
        <Dropzone
            {...args}
            // accept={{
            //     cert: ['.pem', '.cer'],
            // }}
            customFileRenders={[{ format: 'pem', icon: 'icon-file-pem' }]}
            description='Supported formats:  PEM or CER (max 1 MB)'
            maxFiles={1}
            title='Drag & Drop or Choose file to upload'
        />
    </div>
)
