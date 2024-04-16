import PropTypes from 'prop-types'
import iconList from '../assets/icon-list.svg'
import styled from 'styled-components'

const Li = styled.li`
  display: flex;
  align-items: start;
  gap: 15px;


  margin: 10px 0;

  font-size: 18px;
`
const ListItem = ({ text }) => {
  return (
    <Li 
      className='color-dark-slate-grey fs-normal'>
        <img src={iconList} alt='check-list' />
        { text }
    </Li>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default ListItem