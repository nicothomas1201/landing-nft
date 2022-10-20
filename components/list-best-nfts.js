import styled from 'styled-components'
import BestNfts from './best-nfts'

const ListBestNftsStyled = styled.div`

`

function ListBestNfts({ db }) {
  return (
    <ListBestNftsStyled>
      <BestNfts />
    </ListBestNftsStyled>
    
  )
}

export default ListBestNfts
