import { ButtonWhite } from './button'
import styled from 'styled-components'
import Image from 'next/image'

const CardStyled = styled.div`
  max-inline-size: 24rem;
  display: flex;  
  flex-direction: column;
  gap: 1rem;
  background: ${({bg}) => bg};
  padding-block-end: 1rem;
  border-radius: .75rem;
  overflow: hidden;
  .details{
    text-align: center;
    color: var(--white);
    padding-inline: .5rem;
    .title{
      margin: 0;
      font: var(--subtitle-22bold);
    }

    .description{
      margin: 0;
      margin-block-start: .5rem;
      margin-block-end: 2rem;
      /* padding-block-end: 1rem; */
      font: var(--body-16regular);
    }
  }
`

function Card({ bg, src }) {
  
  return (
    <CardStyled bg={bg}>
      <Image src={src} alt="" width="380" height="400" />
      <div className='details'>
        <h3 className='title'>
          seussian de eniosta.
        </h3>
        <p className='description'>
          en el primer y más grande mercado de NFT del mundo
        </p>
        <ButtonWhite>
          Live
        </ButtonWhite>
      </div>
    </CardStyled>
    
  )
}

export default Card
