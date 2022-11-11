import styled from 'styled-components'
import BestNfts from './best-nfts'

const ListBestNftsStyled = styled.div` 
  /* display: flex; */
  /* flex-direction: column; */
  padding-block-start: 2.5rem;
  padding-block-end: 2.5rem;
  
  .grid-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, max(24rem));
    grid-template-rows: repeat(5, max-content);
    column-gap: 1.25rem;
    row-gap: 1rem;
    justify-content: center;
  }

  .title{
    font: var(--subtitle-22bold);
    text-align: center;
    color: var(--black);
    margin-block-end: 3rem;
    .especial{
      color: var(--primary);
    }
  }
`

function ListBestNfts({ db }) {
  return (
    <ListBestNftsStyled>
      <h2 className='title'>
      Las mejores colecciones sobre <span className='especial'>Los últimos 7 días</span> 
      </h2>
      <div className='grid-container'>
        {
          db.map((item, index) => <BestNfts
            name={item.name}
            volume={item.volume}
            image={item.image}
            price={item.price}
            numberList={index + 1}
            key={index}/>)
        }
      </div>
      
    </ListBestNftsStyled>
    
  )
}

export default ListBestNfts
