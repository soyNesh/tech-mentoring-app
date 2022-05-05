import React, { memo, useCallback } from 'react'
import { COLORS, ENDPOINTS } from 'app/utils/constants'
import { useStore } from 'app/provider/store'
import { FilterButtonStyled, TextWrapper } from './FilterButton.styles'

const FilterButton = ({ callback, text, field, selected, onSelect }) => {
  const { updateItems } = useStore()

  const onButtonPress = useCallback(() => {
    callback(`${ENDPOINTS.character}?${field.toLowerCase()}=${text}`)
    onSelect(text)
  }, [text])

  return (
    <FilterButtonStyled
      onPress={onButtonPress}
      underlayColor={COLORS.blueDemon}
      selected={selected}
    >
      <TextWrapper selected={selected}>{text}</TextWrapper>
    </FilterButtonStyled>
  )
}

export default memo(FilterButton)
