import styled from 'styled-components'

const LayoutStyled = styled.div`
  inline-size: 100%;
  max-inline-size: 75rem;
  margin: auto;
`

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
