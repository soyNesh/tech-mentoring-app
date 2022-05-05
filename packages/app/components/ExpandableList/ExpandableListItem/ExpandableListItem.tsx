import React, { useState, useEffect } from 'react'
import { FilterButton } from 'app/components/FilterButton'
import {
  FilterItemTitleWrapper,
  FilterItemTitle,
  FilterButtonsListStyled,
} from './ExpandableListItem.styles'

const ExpandableListItem = ({ onPress, title, items, onItemPress, open }) => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    !open && setSelected('')
  }, [open])

  return (
    <>
      <FilterItemTitleWrapper>
        <FilterItemTitle onPress={onPress}>{title}</FilterItemTitle>
      </FilterItemTitleWrapper>
      {open && (
        <FilterButtonsListStyled>
          {items.map((text, index) => (
            <FilterButton
              key={index}
              callback={onItemPress}
              text={text}
              field={title}
              selected={selected === text}
              onSelect={setSelected}
            />
          ))}
        </FilterButtonsListStyled>
      )}
    </>
  )
}

export default ExpandableListItem
