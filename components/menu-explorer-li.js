import styled from 'styled-components'
import classNames from 'classnames'


const MenuExplorerLiStyled = styled.li`
  color: var(--grey);
  font: var(--subtitle-22bold);
  padding-block-end: .5rem;
  border-block-end: 1px solid transparent;
  cursor: pointer;
  &.active{
    color: var(--black);
    border-block-end-color: var(--primary);
  }
`

function MenuExplorerLi({title, handleClick, item}) {
  let isActive = false

  // solo el elemento con el nombre y id, el id lo mandamos desde menu explore como item, ser activara
  if(title === item){
    isActive = true
  } else{
    isActive = false
  }

  let classes = classNames({
    'item': true,
    'active': isActive
  })
  

  

  return (
    <MenuExplorerLiStyled id={title} className={classes} onClick={handleClick}>
      {title}
    </MenuExplorerLiStyled>
    
  )
}

export default MenuExplorerLi
