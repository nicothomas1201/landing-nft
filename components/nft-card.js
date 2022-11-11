import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const NftCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-inline-size: 11.25rem;
  border-radius: .75rem;
  overflow: hidden;
  border: 0.99px solid #71717133;
  cursor: pointer;


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
        display: flex;
        align-items: center;
        font: var(--body-16bold);
        color: var(--grey);
      }

      .before-eth{
        font: var(--body-14regular);
        color: var(--grey);
        display: flex;
        align-items: center;
      }
    }

    .card-section.end{
      align-items: end;
    }
  }

  .likes{
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
    color: var(--grey);
    font: var(--body-14regular);
    padding-inline-end: .5rem;
    padding-inline-start: .5rem;
    padding-block-end: .5rem;
  }

`

function NftCard({image, name, eth, beforeEth, likes, number, id}) {
  return (
    <Link href={`../nft/${id}`}>
      <NftCardStyled>
        <Image src={image} alt="" width="180" height="180" />
        <div className='nft-details'>
          <div className='card-section'>
            <h4 className='name'>{name}</h4>
            <h4 className='number'>{number}</h4>
          </div>
          <div className='card-section end'>
            <span className='top'>Top Bid</span>
            <span className='eth'>
              <Image src="/eth.svg" alt='' width={14} height={14} />
              {eth}
            </span>
            <span className='before-eth'>Antes 
              <Image src="/eth.svg" alt='' width={14} height={14} />
              {beforeEth}
            </span>
          </div>
        </div>
        <span className='likes'>
          <Image src="/hearth.svg" alt="" width="13" height="13" />
          {likes}
        </span>
      </NftCardStyled>
    </Link>
    
  )
}

export default NftCard
