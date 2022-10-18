import styled from 'styled-components'
import Image from 'next/image'
import Button from './button'

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  background-color: var(--white);
  .header-buttons{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

function Header() {
  return (
    <HeaderStyled>
      <Image src="/logo.png" alt="" width="48" height="48" />
      <div className="header-buttons">
        <Button secondary>Inicia Sesion</Button>
        <Button>Registrate</Button>
      </div>
    </HeaderStyled>
    
  )
}

export default Header
