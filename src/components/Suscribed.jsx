import styled from 'styled-components'
import iconSuccess from '../assets/icon-success.svg'
import useGlobalContext from '../hooks/useGlobalContext'

const Wrapper = styled.div`
  background-color: var(--color-white);
  height: 100vh;

  padding: 100px 20px;

  @media (width >= 440px){
    width: 400px;
    height: 450px;
    margin: 50px auto;

    padding: 50px;
    border-radius: 30px;
  }
`

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 100%;
`

const Header = styled.header`
  display: grid;
  row-gap: 20px;
`

const Section = styled.section`
  @media (width < 440px){
    flex: 1;
  }
`

const Suscribed = () => {
  const { suscription, resetSuscription } = useGlobalContext()

  return (
    <Wrapper>
      <Content>
        <Header>
          <img src={iconSuccess} />
          <h1 className='fs-large color-charcoal-grey'>Thanks for subscribing!</h1>
        </Header>
        <Section className='color-dark-slate-grey'>
          <p>
            A confirmation email has been sent to <span className="fw-bold">{ suscription.email }</span>.
            Please open it and click the button inside to confirm your subscription.
          </p>
        </Section>
        <button 
          className='btn color-white fw-bold fs-normal'
          onClick={() => resetSuscription()}>Dismiss message
        </button>
      </Content>
    </Wrapper>
  )
}

export default Suscribed