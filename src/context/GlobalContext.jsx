import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const initialSuscription = {
    state: false,
    email: ''
  }
  const [suscription, setSuscription] = useState(initialSuscription)

  const resetSuscription = () => setSuscription(initialSuscription)

  return (
    <GlobalContext.Provider value={{
      suscription,
      setSuscription,
      resetSuscription
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }