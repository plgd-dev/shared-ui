import React from 'react'
import ConfirmButton from '../../components/Atomic/ConfirmButton'

export default (args?: any) => (
    <ConfirmButton body={<div>Body</div>} cancelButtonText='Cancel' confirmButtonText='Confirm' onConfirm={console.log} title='Title'>
        Action
    </ConfirmButton>
)
