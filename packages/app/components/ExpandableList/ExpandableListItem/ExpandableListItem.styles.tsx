import { COLORS } from 'app/utils/constants'
import styled from 'styled-components/native'

export const FilterItemTitleWrapper = styled.View`
  align-self: flex-start;
  background-color: #e7f1ff;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-width: 1px;
  border-color: lightgrey;
`

export const FilterItemTitle = styled.Text`
  padding: 10px;
  color: ${COLORS.blueDemon};
`

export const FilterButtonsListStyled = styled.View`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 10px;
`
