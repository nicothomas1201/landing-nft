import styled from 'styled-components'
import classNames from 'classnames'
import { useState } from 'react'
import MenuExplorerLi from './menu-explorer-li'

const MenuExploreStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-block-start: 1.5rem;
  overflow: auto;
`

function MenuExplore() {
  let [ item, setItem ] = useState('Tendencias')

  function handleClick(e){
    setItem(e.target.id)
  }

  
  

  return (
    <MenuExploreStyled>
      <MenuExplorerLi handleClick={handleClick} item={item} title="Tendencias" />
      <MenuExplorerLi handleClick={handleClick} item={item} title="Cima" />
      <MenuExplorerLi handleClick={handleClick} item={item} title="Arte" />
      <MenuExplorerLi handleClick={handleClick} item={item} title="Música" />
      <MenuExplorerLi handleClick={handleClick} item={item} title="Nombre de dominio" />
      <MenuExplorerLi handleClick={handleClick} item={item} title="Mundos virtuales" />
      <MenuExplorerLi handleClick={handleClick} item={item} title="Cartas coleccionables" />
    </MenuExploreStyled>
    
  )
}

export default MenuExplore
