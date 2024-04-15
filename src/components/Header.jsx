import styled from 'styled-components'
import List from './List'

const Container = styled.header`
  display: grid;
  row-gap: 25px;
`

const Header = () => {
  return (
    <Container>
      <h1 className='fs-large color-charcoal-grey'>Stay updated!</h1>
      <p className='color-dark-slate-grey'>Join 60,000+ product managers receiving monthly updates on:</p>
      <List />
    </Container>
  )
}

export default Header