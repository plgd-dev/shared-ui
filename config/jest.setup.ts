import { ReactPortal } from 'react'
import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'
import ReactDOM from 'react-dom'

import 'regenerator-runtime/runtime'
import { cleanup } from '@testing-library/react'
expect.extend(matchers)

const ResizeObserverOrigin = window.ResizeObserver

beforeAll(() => {
    console.error = (error) => {
        console.log(error)
        throw new Error(error)
    }

    ReactDOM.createPortal = jest.fn((element) => element as ReactPortal)
})

beforeEach(() => {
    // @ts-ignore
    delete window.ResizeObserver

    window.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }))
})

afterEach(() => {
    window.ResizeObserver = ResizeObserverOrigin
    jest.resetAllMocks()
    cleanup()
})
