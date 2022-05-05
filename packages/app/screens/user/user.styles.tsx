import styled from 'styled-components/native'
import { COLORS } from 'app/utils/constants'
import { StatusTypes } from 'app/components/Card/Card.styles'

export const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
`

export const Image = styled.Image`
  width: 300px;
  height: 300px;
  align-self: center;
  margin-bottom: 2px;
`

export const StatusView = styled.View<{ type: StatusTypes }>`
  border-radius: 2px;
  background-color: ${({ type }) =>
    type === 'Alive'
      ? COLORS.green
      : type === 'Dead'
      ? COLORS.red
      : COLORS.gray};
  margin: 10px;
`

export const Status = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${COLORS.white};
  text-align: center;
  padding: 6px 11px;
`
export const DetailsContent = styled.View`
  width: 100%;
  padding: 10px;
`

export const DetailsLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`

export const Details = styled.Text`
  font-weight: normal;
`
