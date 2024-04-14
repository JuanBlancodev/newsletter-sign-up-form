import styled from 'styled-components'

const Container = styled.header`

`

const H1 = styled.h1`
  
`

const Header = () => {
  return (
    <Container>
      <H1 className='color-charcoal-grey'>Stay updated!</H1>
    </Container>
  )
}

export default Header