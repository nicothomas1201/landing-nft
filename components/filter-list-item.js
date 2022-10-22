import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

const FilterListItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: 1rem;

  .check{
    block-size: 1.125rem;
    inline-size: 1.125rem;
    border: 2.3px solid var(--black);
    border-radius: .2rem;
    background: ${({active}) => active ? 'var(--black)' : 'var(--white)'};
    display: flex;
    justify-content: center; 
    align-items: center;
    cursor: pointer;
  }

  .text{
    font: var(--body-16regular);
    color: var(--black);
  }
  
`

function FilterListItem({text}) {
  let [ active, setActive ] = useState(false)

  function handleClick(){
    if(!active){
      return setActive(true)
    } 
    return setActive(false)
  }


  return (
    <FilterListItemStyled active={active}>
      <span className='check' onClick={handleClick}>
        <Image src="/check.svg" alt='' width="18" height="18" />
      </span>
      <span className='text'>{text}</span>
    </FilterListItemStyled>
    
  )
}

export default FilterListItem
