import React, { FC, useCallback, useState } from 'react'
import { Icon } from 'react-native-elements'
import { ENDPOINTS } from 'app/utils/constants'
import { ExpandableList } from 'app/components/ExpandableList'
import {
  SearchWrapper,
  SearchInputWrapper,
  SearchInput,
  ClearButton,
  SearchButton,
} from './Search.styles'

const Search: FC<any> = ({ setUrl, updateItems }) => {
  const [search, setSearch] = useState('')

  const onSearch = useCallback((field, value) => {
    updateItems([])
    setUrl(`${ENDPOINTS.character}?${field}=${value}`)
  }, [])

  const clearSearch = useCallback(() => {
    setSearch('')
    updateItems([])
    setUrl(ENDPOINTS.character)
  }, [])

  return (
    <SearchWrapper>
      <SearchInputWrapper>
        <SearchInput
          placeholder="Search for characters"
          value={search}
          onChangeText={setSearch}
        />
        {!!search && (
          <ClearButton>
            <Icon
              name="close"
              type="material"
              size={24}
              color="black"
              onPress={clearSearch}
              tvParallaxProperties={undefined}
            />
          </ClearButton>
        )}
      </SearchInputWrapper>
      <SearchButton title="Search" onPress={() => onSearch('name', search)} />
      <ExpandableList setUrl={setUrl} />
    </SearchWrapper>
  )
}

export default Search
