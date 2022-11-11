import styled from 'styled-components'
import Image from 'next/image'

const BestNftsStyled = styled.div`
  display: flex;
  gap: .5rem;
  padding: 1rem;
  align-items: center;
  color: var(--black);
  border-block-end: 1px solid var(--grey);
  .number{
    font: var(--body-16bold);
  }

  .principal{
    display: flex;
    align-items: center;
    gap: .5rem;
    max-inline-size: 15.4375rem;
    /* inline-size: 100%; */
    flex: 1;
    .name-volume{
      font: var(--body-16bold);
      .name{
        margin: 0;
        color: var(--black);
      }

      .volume{
        display: flex;
        align-items: center;
        color: var(--grey);
      }
    }
  }

  .price{
    color: var(--green);
    font: var(--body-16regular);
  }

`

function BestNfts({ name, image, volume, price, numberList }) {
  
  return (
    <BestNftsStyled>
      <span className='number'>{numberList}</span>
      <div className='principal'>
        <Image src={image} alt="" width="56"  height="56" />
        <div className='name-volume'>
          <h4 className='name'>{name}</h4>
          <span className='volume'>
            <Image src="/eth.svg" alt='' width={14} height={14} />
            {volume}
          </span>
        </div>
      </div>
      <h4 className='price'>{price}</h4>
    </BestNftsStyled>
    
  )
}

export default BestNfts
