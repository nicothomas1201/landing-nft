import styled from 'styled-components'
import MenuExplore from './menu-explore'
import { Collections } from '../db/db'
import CardCollection from './card-collection'

const MainExploreStyled = styled.main`
  .title-explore{
    font: var(--title-45bold);
    color: var(--black);
    text-align: center;
    margin: 0;
  }

  .card-list{
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    padding-block-start: 2.5rem;
    padding-block-end: 5rem;
    justify-content: center;
  }
`

function MainExplore() {
  return (
    <MainExploreStyled>
      <h2 className='title-explore'>Explore Collections</h2>
      <MenuExplore />
      {/* card collection ya esta listo */}
      <div className='card-list'>
        {Collections.map((item, index)=> {
          return <CardCollection 
            user={item.userImage}
            title={item.title}
            autor={item.autor}
            description={item.description}
            collection={item.imageCollection} 
            key={index}/>
        })}
      </div>
    </MainExploreStyled>
    
  )
}

export default MainExplore
