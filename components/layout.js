import styled from 'styled-components'

const LayoutStyled = styled.div`
  inline-size: 100%;
  padding-inline: 1rem;
  box-sizing: border-box;
  
  @media screen and (min-width: 1194px){
    max-inline-size: 75rem;
    margin: auto;
    padding-inline: 0;
  }
`

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
