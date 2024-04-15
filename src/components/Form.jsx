import styled from 'styled-components'

const FormContainer = styled.form`
  display: grid;
  row-gap: 20px;
`

const Field = styled.div`
  display: grid;
  row-gap: 10px;
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
  return (
    <section>
      <FormContainer>
        <Field>
          <p className='fw-bold color-charcoal-grey'>Email address</p>
          <Input
            type="email"
            placeholder="email@company.com"
          />
        </Field>
        <button className='btn fw-bold color-white fs-normal'>Subscribe to monthly newsletter</button>
      </FormContainer>
    </section>
  )
}

export default Form