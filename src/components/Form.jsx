import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import useGlobalContext from '../hooks/useGlobalContext'

const FormContainer = styled.form`
  display: grid;
  row-gap: 20px;
`

const Field = styled.div`
  display: grid;
  row-gap: 10px;
`

const Messages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Span = styled.span`
  color: red;
`

const Input = styled.input`
  width: 100%;
  padding: 20px;

  border: 1px solid var(--color-grey);
  border-radius: 10px;

  font-size: 1em;

  &::placeholder{
    color: var(--color-grey);
  }
`

const Form = () => {
  const { setSuscription } = useGlobalContext()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const emailRules = {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email is invalid'
    }
  }

  const onSubmit = ({ email }) => {
    setSuscription({ state: true, email })
  }

  return (
    <section>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Messages>
            <p className='fw-bold color-charcoal-grey'>Email address</p>
            { errors.email && <Span>{ errors.email.message }</Span> }
          </Messages>
          <Input
            type="email"
            placeholder="email@company.com"
            { ...register('email', emailRules) }
          />
        </Field>
        <button className='btn fw-bold color-white fs-normal'>Subscribe to monthly newsletter</button>
      </FormContainer>
    </section>
  )
}

export default Form