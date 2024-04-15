import styled from 'styled-components'
import List from './List'

const Container = styled.header`
  display: grid;
  row-gap: 25px;
`

const H1 = styled.h1`
  font-size: 2.4em;
`

const Header = () => {
  return (
    <Container>
      <H1 className='color-charcoal-grey'>Stay updated!</H1>
      <p className='color-dark-slate-grey'>Join 60,000+ product managers receiving monthly updates on:</p>
      <List />
    </Container>
  )
}

export default Header