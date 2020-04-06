
import styled from 'styled-components'

const StyledInput = styled.div`
  margin-bottom: 1rem;

  .input-container {
    position: relative;
  }
  input {
    width: 100%;
    box-sizing: border-box;
  }
  input.error {
    border: 1px solid red;
  }
  .input-success::after {
    display: inline-block;
    content: '*';
    position: absolute;
    top: 0;
    right: 1rem;
    color: green;
  }
`

function Input({
  id,
  label,
  onChange,
  value,
  type = 'text',
  required = false,
  error = '',
  autoComplete = '',
  max = '',
  min = ''
}) {
  const inputSuccess = value.length > 0 && error.length === 0

  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <div className={`input-container ${inputSuccess ? 'input-success' : ''}`}>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          autoComplete={autoComplete}
          required={required}
        />
      </div>
      {
        error.length > 0 &&
        <span>{error}</span>
      }
    </StyledInput>
  )
}

export default Input