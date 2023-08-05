import { createContext } from 'react'
import { AppContextType } from './AppContext.types'

const AppContext = createContext<AppContextType>({})

export default AppContext
