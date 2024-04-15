import styled from 'styled-components'
import Ilustration from './Ilustration'
import Header from './Header'
import Form from './Form'

const Wrapper = styled.div`
  background-color: var(--color-white);
  height: 100%;

  @media (width >= 800px){
    width: 800px;
    height: 600px;
    margin: 50px auto;

    padding: 15px;
    border-radius: 30px;

    display: flex;
    flex-direction: row-reverse;
  }
`

const Content = styled.main`
  display: grid;
  row-gap: 30px;
  padding: 40px 20px;
`

const Homepage = () => {
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

export default Homepage