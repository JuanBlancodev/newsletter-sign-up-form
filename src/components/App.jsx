import styled from 'styled-components'
import Ilustration from './Ilustration'
import Header from './Header'
import Form from './Form'

const Wrapper = styled.div`
  background-color: var(--color-white);
  height: 100%;
`

const Content = styled.main`
  display: grid;
  row-gap: 30px;
  padding: 40px 20px;
`

const App = () => {
  return (
    <Wrapper>
      <Ilustration />
      <Content>
        <Header />
        <Form />
      </Content>
    </Wrapper>
  )
}

export default App