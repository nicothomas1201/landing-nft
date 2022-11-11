import styled from 'styled-components'
import Image from 'next/image'
import Button from './button'

const OffertStyled = styled.div`
  padding: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid rgba(113, 113, 113, 0.2);
  border-radius: .75rem;

  .time{
    display: flex;
    align-items: center;
    gap: .5rem;

    .time-text{
      font: var(--body-16regular);
      color: var(--grey);
    }
  }

  .current-price{
    max-inline-size: 12rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .text{
      font: var(--body-16regular);
      color: var(--grey);
    }

    .price{
      .price-image{
        display: flex;
        align-items: center;

        .price-eth{
          font: var(--title-32bold);
          color: var(--black);
          margin: 0;
        }
      }
    }
  }

  .buttons{
    display: flex;
    gap: .5rem;
  }
`

function Offert({eth}) {
  return (
    <OffertStyled>
      <div className="time">
        <Image src="/clock.svg" alt="" width="20" height="20" />
        <span className="time-text">La oferta finaliza el 30 de mayo de 2022 a las 6:26 am PST</span>
      </div>
      <div className="current-price">
        <span className="text">Precion actual</span>
        <div className="price">
          <div className="price-image">
            <Image src="/eth.svg" alt="" width="35" height="37" />
            <h3 className="price-eth">{eth}</h3>
          </div>
        </div>
      </div>

      <div className="buttons">
        <Button>Comprar Ahora</Button>
        <Button secondary>Hacer Oferta</Button>
      </div>
    </OffertStyled>
    
  )
}

export default Offert
