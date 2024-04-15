import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ilustrationMobile from '../assets/illustration-sign-up-mobile.svg'
import ilustrationDesktop from '../assets/illustration-sign-up-desktop.svg'

const Container = styled.div`
  width: 100%;
  height: 284px;
  overflow: hidden;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  border-radius: 0 0 10px 10px;

  @media (width >= 700px){
    width: 400px;
    height: 570px;
    background-position: right;
    border-radius: 10px;
  }
`

const Ilustration = () => {
  const [imageWidth, setImageWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setImageWidth(width);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <Container image={imageWidth > 560 ? ilustrationDesktop : ilustrationMobile} />
  )
}

export default Ilustration