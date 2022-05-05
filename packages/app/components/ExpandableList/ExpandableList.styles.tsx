import styled from 'styled-components/native'
import { COLORS } from 'app/utils/constants'

export const ExpandableListStyled = styled.View`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`

export const FiltersWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 70%;
  border-width: 1px;
  border-radius: 5px;
  border-color: lightgrey;
`

export const FiltersTitle = styled.Text`
  align-self: center;
  font-size: 20px;
  margin-bottom: 10px;
`

export const ClearFilters = styled.Text`
  align-self: center;
  color: ${COLORS.blueDemon};
  text-decoration: underline;
  text-decoration-color: ${COLORS.blueDemon};
  margin-bottom: 10px;
`
