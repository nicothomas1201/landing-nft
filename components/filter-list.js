import styled from 'styled-components'
import FilterListItem from './filter-list-item'
import Image from 'next/image'

const FilterListStyled = styled.div`
  max-inline-size: 24rem;
  inline-size: 100%;
  grid-area: filters;
  padding: 1rem;
  box-sizing: border-box;

  .header{
    display: flex;
    align-items: center;
    gap: .5rem;
    padding-block-end: 1rem;
    .text{
      font: var(--body-16bold);
      color: var(--black);
    }
  }

`

function FilterList() {
  return (
    <FilterListStyled>
      <div className='header'>
        <Image src="/filter.svg" alt="" width="24" height="24" />
        <span className='text'>Filtros</span>
      </div>
      <FilterListItem text="holi bro" />
    </FilterListStyled>
    
  )
}

export default FilterList
