import styled from 'styled-components'
import Link from 'next/link'

const CardCollectionStyled = styled.div`
  border: 1px solid #71717133;
  border-radius: .75rem;
  inline-size: 24rem;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding-block-end: 1rem;
  cursor: pointer;
  /* border: 10px solid green; */
  /* padding-block: .5rem; */

  .images{
    inline-size: 100%;
    position: relative;
    margin-block-end: 1.25rem;
    .collection-img{
      block-size: 16.875rem;
      inline-size: 100%;
      border-radius: .5rem .5rem 0 0;
      background: ${({collection}) => `url(${collection.src})`};
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }

    .user-img{
      inline-size: 3rem;
      block-size: 3rem;
      background: ${({user}) => `url(${user.src})`};
      background-position: center;
      background-size: 100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      z-index: 1;
    }
  }

  .title{
    margin: 0;
    font: var(--subtitle-22bold);
    color: var(--black);
  }

  .autor{
    font: var(--body-16bold);
    color: var(--gruy);
    .active{
      color: var(--primary);
    }
    
  }

  

  .description{
    margin: 0;
    text-align: center;
    color: var(--grey);
    font: var(--body-16regular);
  }
`

function CardCollection({collection, user, title, autor, description}) {

  return (
    <Link href='../collection/Cool Cats NFT'>
      <CardCollectionStyled collection={collection} user={user}>
        <div className='images'>
          <div className='collection-img'></div>
          <div className='user-img'></div>
        </div>
        <h3 className='title'>{title}</h3>
        <span className='autor'>Por <span className='active'>{autor}</span></span>
        <p className='description'>{description}</p>
      </CardCollectionStyled>
    </Link>
  )

  
}

export default CardCollection
