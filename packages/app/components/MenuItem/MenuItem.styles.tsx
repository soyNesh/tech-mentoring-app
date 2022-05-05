import styled from 'styled-components/native'
import { COLORS } from 'app/utils/constants'

export const MenuItemStyled = styled.View`
  height: 46px;
  width: 100%;
  background-color: #eeeeee;
  border-bottom-width: 2px;
  border-bottom-color: ${COLORS.blueDemon};
`

export const MenuItemLabel = styled.Text`
  color: grey;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 10px;
`
