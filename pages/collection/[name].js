import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Collection as db } from '../../db/db'
import NftCard from '../../components/nft-card'
import Header from '../../components/header'
import Layout from '../../components/layout'
import CollectionBanner from '../../components/collection-banner'
import FilterList from '../../components/filter-list'

const CollectionStyled = styled.div`
  .grid-container{
    display: grid;
    grid-template-columns: minmax(min-content, 24rem) auto;
    grid-template-areas: "filters nfts";
    gap: 1.25rem;
  }

  .nft-card-list{
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    padding-block-end: 5rem;
    grid-area: nfts;
  }

  

`

function Collection() {
  const router = useRouter()
  const { name } = router.query


  return (
    <CollectionStyled>
      <Header/>
      <CollectionBanner 
        bannerImg={db.bannerImg} 
        userImg={db.userImg} 
        title={db.title} 
        autor={db.autor}/>
      <Layout>
        <div className='grid-container'>
          <FilterList />
          <div className='nft-card-list'>
            {db.nfts.map( (item, index) => {
              return <NftCard 
                image={item.imageUrl}
                name={item.name}
                eth={item.eth}
                beforeEth={item.before_eth}
                likes={item.likes}
                number={item.number}
                id={item.id}
                key={index}/>
            })}
          </div>
        </div>
      </Layout>

    </CollectionStyled>
    
  )
}

export default Collection
