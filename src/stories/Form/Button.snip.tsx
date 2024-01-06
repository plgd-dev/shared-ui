import React, { useState } from 'react'
import Button from '../../components/Atomic/Button'

export default (args: any) => (
    <div>
        <div className='custom-row'>
            <div className='custom-cell'>
                <Button {...args} children='Primary big' size='big' variant='primary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Primary normal' size='normal' variant='primary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Primary small' size='small' variant='primary' />
            </div>
        </div>

        <br />
        <br />

        <div className='custom-row'>
            <div className='custom-cell'>
                <Button {...args} children='Secondary big' size='big' variant='secondary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Secondary normal' size='normal' variant='secondary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Secondary small' size='small' variant='secondary' />
            </div>
        </div>

        <br />
        <br />

        <div className='custom-row'>
            <div className='custom-cell'>
                <Button {...args} children='Tertiary big' size='big' variant='tertiary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Tertiary normal' size='normal' variant='tertiary' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Tertiary small' size='small' variant='tertiary' />
            </div>
        </div>

        <br />
        <br />

        <div className='custom-row'>
            <div className='custom-cell'>
                <Button {...args} children='Filter big' size='big' variant='filter' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Filter normal' size='normal' variant='filter' />
            </div>
            <div className='custom-cell'>
                <Button {...args} children='Filter small' size='small' variant='filter' />
            </div>
        </div>
    </div>
)

export const LoadingTemplate = (args: any) => {
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [loading3, setLoading3] = useState(false)
    return (
        <div>
            <div className='custom-row'>
                <div className='custom-cell'>
                    <Button
                        {...args}
                        children='Update'
                        loading={loading1}
                        loadingText='Updating'
                        onClick={() => setLoading1(!loading1)}
                        size='normal'
                        variant='primary'
                    />
                </div>
                <div className='custom-cell'>
                    <Button
                        {...args}
                        children='Update'
                        loading={loading2}
                        loadingText='Updating'
                        onClick={() => setLoading2(!loading2)}
                        size='normal'
                        variant='secondary'
                    />
                </div>
                <div className='custom-cell'>
                    <Button
                        {...args}
                        children='Update'
                        loading={loading3}
                        loadingText='Updating'
                        onClick={() => setLoading3(!loading3)}
                        size='normal'
                        variant='tertiary'
                    />
                </div>
                <div className='custom-cell'>
                    <Button
                        children='Stop all'
                        onClick={() => {
                            setLoading1(false)
                            setLoading2(false)
                            setLoading3(false)
                        }}
                        size='normal'
                        variant='filter'
                    />
                </div>
            </div>
        </div>
    )
}
