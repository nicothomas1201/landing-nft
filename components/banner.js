import styled from 'styled-components'
import Button from './button'
import Image from 'next/image'
import Link from 'next/link'

const BannerStyled = styled.div`
  .bg{
    inline-size: 100%;
    block-size: auto;
    background: url(/banner-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    /* max-inline-size: 75rem; */
    padding: 0 1rem;
    box-sizing: border-box;

    .content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      gap: 1.5rem;
      flex-direction: column;

      .details-text{
        display: flex;
        flex-direction: column;
        max-inline-size: 30.375rem;
        gap: 1.25rem;

        button{
          margin-block-start: .5rem;
          max-inline-size: 24rem;
        }

        h1{
          margin: 0;
          font: var(--title-45bold);
        }
  
        p{
          margin: 0;
          font: var(--subtitle-22medium);
        }
      }

      .details-image{
        display: flex;
        flex-direction: column;
        background: var(--white);
        border-radius: .5rem;
        overflow: hidden;
        filter: drop-shadow(0px 2.41975px 50.8148px rgba(0, 0, 0, 0.25));
        .user{
          display: flex;
          align-items: center;
          gap: .5rem;
          padding: 1rem;

          .user-details{
            .name{
              margin: 0;
              color: var(--black);
              font: var(--body-16bold);
            }

            .username{
              margin: 0;
              color: var(--primary);
              font: var(--body-14regular);
            }
          }
        }
        
      }
    }
  }

  @media screen and (min-width: 1031px){
    .bg{
      block-size: calc(100vh - 80px);
      padding: 0 5.1875rem;
      .content{
        flex-direction: row;
      }
    }
  }
  
`

function Banner() {
  return (
    <BannerStyled>
      <div className='bg'>
        <div className='content'>
          <div className='details-text'>
            <h1> Descubra, recopile y venda NFT extraordinarios </h1>
            <p>en el primer y m??s grande mercado de NFT del mundo</p>
            <Link  href="/explore">
              <Button>Explorar</Button>
            </Link>
          </div>
          <div className='details-image'>
            <Image src="/banner-image-details.png" width="588" height="437" alt="" />
            <div className='user'>
              <Image src="/avatar.png" width="50" height="50" alt="" />
              <div className='user-details'>
                <h3 className='name'>Tiny Dancer #2</h3>
                <h3 className='username'>Aidan Tooth</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerStyled>
    
  )
}

export default Banner
