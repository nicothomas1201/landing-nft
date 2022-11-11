import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Collection } from '../../db/db'
import { useState, useEffect } from 'react'
import NftContent from '../../components/nft-content'
import Layout from '../../components/layout'

const NftStyled = styled.div`

`

function Nft() {
  let [ nftList, setNftList ] = useState(null)
  let router = useRouter()
  let { id } = router.query

  useEffect(() => {
    if(id){
      let nftById = Collection.nfts.filter( item => item.id === parseInt(id) )
      setNftList(nftById[0])
    } else{
      console.log('loading bro')
    }
  }, [id])

  console.log(nftList)





  return (
    <Layout>
      <NftStyled>
        {
          nftList ? <NftContent nft={nftList}/> : <p>Is loading</p>
        }
      </NftStyled>
    </Layout>
    
  )
}

export default Nft
