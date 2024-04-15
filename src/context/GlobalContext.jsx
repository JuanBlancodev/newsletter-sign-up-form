import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [suscription, setSuscription] = useState({
    state: false,
    email: ''
  })

  return (
    <GlobalContext.Provider value={{
      suscription,
      setSuscription
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }