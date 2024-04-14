import styled from 'styled-components'
import ilustrationMobile from '../assets/illustration-sign-up-mobile.svg'

const Container = styled.section`
  width: 100%;
  height: 284px;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Ilustration = () => {
  return (
    <Container>
      <Img src={ilustrationMobile} />
    </Container>
  )
}

export default Ilustration