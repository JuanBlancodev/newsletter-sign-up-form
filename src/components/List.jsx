import styled from 'styled-components'
import ListItem from './ListItem'

const Ul = styled.ul`
  list-style: none;
`

const List = () => {
  const listInfo = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!'
  ]

  return (
    <Ul>
      { listInfo.map((item, index) => (
        <ListItem key={index} text={item} />
      )) }
    </Ul>
  )
}

export default List