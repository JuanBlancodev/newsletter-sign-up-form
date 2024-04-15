import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { GlobalContextProvider } from './context/GlobalContext.jsx'

import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
)
