import { ReactPortal } from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import ReactDOM from 'react-dom'

expect.extend(matchers)

beforeAll(() => {
    console.error = (error) => {
        console.log(error)
        throw new Error(error)
    }

    ReactDOM.createPortal = jest.fn((element) => element as ReactPortal)
})

afterEach(() => {
    jest.resetAllMocks()
})
