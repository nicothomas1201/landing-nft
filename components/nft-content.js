import styled from 'styled-components'
import Image from 'next/image'
import Offert from './offert'

const NftContentStyled = styled.div`
  margin-block-start: 4.0625rem;
  display: flex;
  gap: 1.625rem;

  .nft-image{
    display: flex;
    flex-direction: column;
    max-inline-size: 36.75rem;
    background-color: var(--white);
    filter: drop-shadow(0px 2.41975px 50.8148px rgba(0, 0, 0, 0.25));
    border-radius: .625rem;
    overflow: hidden;

    .likes-container{
      display: flex;
      align-items: center;
      gap: .5rem;
      padding: 1.25rem;

      .likes{
        font: var(--subtitle22-bold);
        color: var(--grey);
      }
    }
  }

  .nft-details{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-inline-size: 36.625rem;

    .collection-name{
      font: var(--body-16regular);
      color: var(--primary);
    }

    .nft-name{
      font: var(--title-45bold);
      margin: 0;
    }

    .section-reactions{
      display: flex;
      gap: 1.5rem;

      .views, .likes{
        display: flex;
        align-items: center;
        gap: .5rem;
        color: var(--grey);
        font: var(--body-16regular);
      }
    }
    .description-title{
      font: var(--subtitle-22bold);
      margin: 0;
      color: var(--black);
    }

    .description{
      font: var(--body-16regular);
      color: var(--black);
      margin: 0;
    }
  }

`

function NftContent({nft}) {
  let { imageUrl, likes, name, number, eth, description } = nft
  return (
    <NftContentStyled>
      <div className="nft-image">
        <Image src={imageUrl} alt="" width={588} height={574} />
        <div className="likes-container">
          <Image src="/hearth.svg" alt="" width="32" height="32" />
          <span className="likes">{likes}</span>
        </div>
      </div>

      <div className="nft-details">
        <span className="collection-name">{name}</span>
        <h2 className="nft-name">{name} {number}</h2>
        <div className="section-reactions">
          <span className="views">
            <Image src="/eye.svg" width="24" height="24" alt="" /> 
            <span>238 vistas</span>
          </span>

          <span className="likes">
            <Image src="/hearth.svg" width="24" height="24" alt="" /> 
            <span>{likes} favoritos</span>
          </span>
        </div>

        <Offert eth={eth} />

        <h3 className="description-title">Descripción</h3>

        <p className="description">
          {description}
        </p>
      </div>
    </NftContentStyled>
    
  )
}

export default NftContent
