import styled from 'styled-components'

const FilterListItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  .check{
    block-size: 1.125rem;
    inline-size: 1.125rem;
    border: 2.3px solid var(--black);
    border-radius: .2rem;
  }

  .text{
    font: var(--body-16regular);
    color: var(--black);
  }
  
`

function FilterListItem({text}) {
  return (
    <FilterListItemStyled>
      <span className='check'></span>
      <span className='text'>{text}</span>
    </FilterListItemStyled>
    
  )
}

export default FilterListItem
