import styled from "styled-components";

const Button = styled.button`
  border: 1px solid transparent;
  color: var(--white);
  background-color: var(--primary);
  border-radius: .5rem;
  font: var(--body-16bold);
  padding: .5rem 1rem;
  cursor: pointer;


  ${({secondary}) => {
    if(secondary){
      return `
        background-color: transparent;
        color: var(--primary);
        border-color: var(--primary);
      `
    }
  }}
`

export const ButtonWhite = styled(Button)`
  background: transparent;
  border-color: var(--white);
  color: var(--white);
`

export default Button