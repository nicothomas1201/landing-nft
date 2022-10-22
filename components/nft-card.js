import styled from 'styled-components'
import Image from 'next/image'

const NftCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-inline-size: 11.25rem;
  border-radius: .75rem;
  overflow: hidden;
  border: 0.99px solid #71717133;


  .nft-details{
    display: flex;
    justify-content: space-between;
    padding: .5rem;

    .card-section{
      display: flex;
      flex-direction: column;
      gap: .5rem;
  
      
      .name{
        margin: 0;
        font: var(--body-16bold);
        color: var(--black);
      }
  
      .number{
        margin: 0;
        font: var(--body-16bold);
        color: var(--black);
      }

      .top{
        font: var(--body-16regular);
        color: var(--grey);
      }

      .eth{
        font: var(--body-16bold);
        color: var(--grey);
      }

      .before-eth{
        font: var(--body-14regular);
        color: var(--grey);
      }
    }

    .card-section.end{
      align-items: end;
    }
  }

`

function NftCard({image, name, eth, beforeEth, likes, number}) {
  return (
    <NftCardStyled>
      <Image src={image} alt="" width="180" height="180" />
      <div className='nft-details'>
        <div className='card-section'>
          <h4 className='name'>{name}</h4>
          <h4 className='number'>{number}</h4>
        </div>
        <div className='card-section end'>
          <span className='top'>Top Bid</span>
          <span className='eth'>{eth}</span>
          <span className='before-eth'>Antes {beforeEth}</span>
        </div>
      </div>
      <span>{likes}</span>
    </NftCardStyled>
    
  )
}

export default NftCard
