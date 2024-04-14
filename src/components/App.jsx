import styled from 'styled-components'
import Ilustration from './Ilustration'
import Header from './Header'

const Wrapper = styled.div`
  background-color: var(--color-white);
  height: 100vh;
`

const Content = styled.main`
  padding: 40px 20px;
`

const App = () => {
  return (
    <Wrapper>
      <Ilustration />
      <Content>
        <Header />
      </Content>
    </Wrapper>
  )
}

export default App