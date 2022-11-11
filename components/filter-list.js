import styled from 'styled-components'
import FilterListItem from './filter-list-item'
import Image from 'next/image'
import SectionFilter from './section-filter'

const FilterListStyled = styled.div`
  flex: 1;
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


  @media screen and (min-width: 820px;){
    max-inline-size: 24rem;
  }
`

function FilterList() {
  return (
    <FilterListStyled>
      <div className='header'>
        <Image src="/filter.svg" alt="" width="24" height="24" />
        <span className='text'>Filtros</span>
      </div>

      <SectionFilter title="Cara">
        <FilterListItem text="Ditto" />
        <FilterListItem text="Mummy" />
        <FilterListItem text="Beard pirate" />
        <FilterListItem text="Zombie" />
        <FilterListItem text="Three eyes" />
        <FilterListItem text="Unamused" />
        <FilterListItem text="Angry cute" />
        <FilterListItem text="Stunned" />
        <FilterListItem text="Sunglasses heart" />
      </SectionFilter>
      <SectionFilter title="Sombreros">
        <FilterListItem text="Hat white" />
        <FilterListItem text="Bucket hat green" />
        <FilterListItem text="Mohawk green" />
      </SectionFilter>
      <SectionFilter title="Camisas">
        <FilterListItem text="Overalls blue" />
        <FilterListItem text="Buttondown green" />
        <FilterListItem text="Robe blue" />
      </SectionFilter>
      
      
    </FilterListStyled>
    
  )
}

export default FilterList
