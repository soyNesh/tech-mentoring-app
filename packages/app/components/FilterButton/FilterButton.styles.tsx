import { COLORS } from 'app/utils/constants'
import styled from 'styled-components/native'

export const FilterButtonStyled = styled.TouchableHighlight<{
  selected: boolean
}>`
  padding: 10px;
  margin: 2px;
  border-width: 2px;
  border-color: ${COLORS.blueDemon};
  border-radius: 5px;
  background-color: ${({ selected }) => {
    return selected ? COLORS.blueDemon : COLORS.white
  }};
`

export const TextWrapper = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) => {
    return selected ? COLORS.white : COLORS.blueDemon
  }};
`
