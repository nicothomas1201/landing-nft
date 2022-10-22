import styled from 'styled-components'

const CollectionBannerStyled = styled.div`
  .images{
    inline-size: 100%;
    margin-block-end: 3.75rem;
    position: relative;
    .banner-img{
      inline-size: 100%;
      block-size: 17.75rem;
      background: ${({bannerImg}) => `url(${bannerImg.src})` };
    }

    .user-img{
      inline-size: 8rem;
      block-size: 8rem;
      border-radius: 50%;
      background: ${({userImg}) => `url(${userImg.src})` };
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
    }

  }
  .details{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: .5rem;
    padding-block-start: 3rem;
    padding-block-end: 3rem;

    .title{
      margin: 0;
      color: var(--black);
      font: var(--title-45bold);
    }
    .autor{
      margin: 0;
      font: var(--subtitle-22medium);
      color: var(--black);
      .active{
        color: var(--primary);
      }
    }
  }

`

function CollectionBanner({bannerImg, userImg, title, autor}) {
  return (
    <CollectionBannerStyled bannerImg={bannerImg} userImg={userImg}>
      <div className='images'>
        <div className='banner-img'></div>
        <div className='user-img'></div>
      </div>
      <div className='details'>
        <h2 className='title'>
          {title}
        </h2>
        <h4 className='autor'>
          Creado por
          <span className='active'>{autor}</span>
        </h4>

      </div>
    </CollectionBannerStyled>
    
  )
}

export default CollectionBanner
