import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: var(--color-white);
  height: 100%;

  @media (width >= 800px){
    width: 400px;
    height: 350px;
    margin: 50px auto;

    padding: 15px;
    border-radius: 30px;
  }
`

const Suscribed = () => {
  return (
    <Wrapper>
      Hello World
    </Wrapper>
  )
}

export default Suscribed