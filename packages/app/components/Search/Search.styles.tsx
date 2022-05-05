import styled from 'styled-components/native'
import { COLORS } from 'app/utils/constants'

export const SearchWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchInputWrapper = styled.View`
  width: 100%;
  align-items: center;
`

export const SearchInput = styled.TextInput`
  width: 80%;
  border: 2px solid ${COLORS.blueDemon};
  border-radius: 8px;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
  padding: 10px 15px;
  margin-bottom: 10px;
`

export const ClearButton = styled.TouchableOpacity`
  position: absolute;
  right: 43px;
  top: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
`

export const SearchButton = styled.Button`
  font-weight: normal;
  text-align: center;
  color: ${COLORS.white};
  background-color: ${COLORS.blueDemon};
  border-color: ${COLORS.blueDemon};
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
`
