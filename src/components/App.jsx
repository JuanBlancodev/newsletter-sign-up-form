import useGlobalContext from '../hooks/useGlobalContext'
import Homepage from './Homepage'
import Suscribed from './Suscribed'

const App = () => {
  const { suscription: { state } } = useGlobalContext()

  return (
    <>
      { state ? <Suscribed /> : <Homepage /> }
    </>
  )
}

export default App