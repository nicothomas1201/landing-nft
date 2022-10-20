import styled from 'styled-components'
import Card from './card'

const SectionCardsStyled = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-block-start: 2.5rem;
  padding-block-end: 2.5rem;

`

function SectionCards() {
  
  return (
    <SectionCardsStyled>
      <Card bg="#DC8D68" src="/cards-image/card-1.png" />
      <Card bg="#A44D88" src="/cards-image/card-2.png" />
      <Card bg="#FE2900" src="/cards-image/card-3.png" />
    </SectionCardsStyled>
    
  )
}

export default SectionCards
