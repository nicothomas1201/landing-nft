import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames'

const SectionFilterStyled = styled.div`

  .header-section-filter{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-block-start: 1px solid var(--grey);
    border-block-end: 1px solid var(--grey);
    cursor: pointer;


    .header-title{
      display: flex;
      gap: .625rem;
      justify-content: center;
      align-items: center;
      .title{
        margin: 0;
        color: var(--black);
        font: var(--body-16bold) ;
      }

    }
    .header-arrow{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .875rem;
      /* border: 1px solid red; */
    }
  }

  .list-filter-item{
    overflow: hidden;
    background: var(--white);
    max-block-size: 0;
    transition: .3s max-block-size linear;    
  }

  .list-filter-item.show{
    max-block-size: 100rem;
  }

`

function SectionFilter({children, title}) {
  let [ show, setShow ] = useState(false)

  let classes = classNames({
    'list-filter-item': true, 
    'show': show,

  })

  function handleClick(){
    if(!show){
      return setShow(true)
    }

    return setShow(false)
  }


  return (
    <SectionFilterStyled show={show}>
      <div className='header-section-filter' onClick={handleClick}>
        <div className='header-title'>
          <Image src="/elements.svg" alt="" width="20" height="20" />
          <h4 className='title'>{title}</h4>
        </div>
        <div className='header-arrow'>
          <span className='cuantity'>3</span>
          <Image src={show ? '/up.svg' : '/down.svg'}  alt='' width="20" height="20" />
        </div>
      </div>
      <div className={classes}>
        {children}
      </div>
    </SectionFilterStyled>
    
  )
}

export default SectionFilter
