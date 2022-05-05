import React, { useState } from 'react'
import { ENDPOINTS } from 'app/utils/constants'
import { strings } from 'app/utils/strings'
import { useStore } from 'app/provider/store'
import { ExpandableListItem } from './ExpandableListItem'
import {
  ExpandableListStyled,
  FiltersWrapper,
  ClearFilters,
  FiltersTitle,
} from './ExpandableList.styles'

const ExpandableList = ({ setUrl }) => {
  const { updateItems } = useStore()

  const [currentItem, setCurrentItem] = useState(-1)

  const statusArr = ['Alive', 'Dead', 'Unknown']
  const speciesArr = [
    'Human',
    'Alien',
    'Humanoid',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Planet',
  ]
  const genderArr = ['female', 'male', 'genderless', 'unknown']

  const clearFilters = () => {
    updateItems([])
    setUrl(ENDPOINTS.character)
    setCurrentItem(-1)
  }

  return (
    <ExpandableListStyled>
      <FiltersTitle>{strings.filtersTitleLabel}</FiltersTitle>
      <ClearFilters onPress={clearFilters}>
        {strings.clearFiltersLabel}
      </ClearFilters>
      <FiltersWrapper>
        <ExpandableListItem
          onPress={() => setCurrentItem(0)}
          open={currentItem === 0}
          title="Status"
          items={statusArr}
          onItemPress={setUrl}
        />
        <ExpandableListItem
          onPress={() => setCurrentItem(1)}
          open={currentItem === 1}
          title="Species"
          items={speciesArr}
          onItemPress={setUrl}
        />
        <ExpandableListItem
          onPress={() => setCurrentItem(2)}
          open={currentItem === 2}
          title="Gender"
          items={genderArr}
          onItemPress={setUrl}
        />
      </FiltersWrapper>
    </ExpandableListStyled>
  )
}

export default ExpandableList
