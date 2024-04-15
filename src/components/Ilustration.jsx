import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ilustrationMobile from '../assets/illustration-sign-up-mobile.svg'
import ilustrationDesktop from '../assets/illustration-sign-up-desktop.svg'

const Container = styled.div`
  width: 100%;
  height: 284px;
  overflow: hidden;

  @media (width >= 800px){
    width: 550px;
    height: 570px;
    grid-column: 2 / -1;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Ilustration = () => {
  const [imageWidth, setImageWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setImageWidth(width > 200 ? 400 : 200);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <Container>
      <Img src={imageWidth > 800 ? ilustrationDesktop : ilustrationMobile} />
    </Container>
  )
}

export default Ilustration