import { createContext } from 'react'
import { AppContextType } from './AppContext.types'

const AppContext = createContext<AppContextType>({ isHub: true })

export default AppContext
