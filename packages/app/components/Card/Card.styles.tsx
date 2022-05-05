import styled from 'styled-components/native'
import { COLORS } from 'app/utils/constants'

export type StatusTypes = 'Alive' | 'Dead' | 'Unknown'

export const Wrapper = styled.View`
  width: 96%;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: ${COLORS.blueDemon};
  margin: 10px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.dark};
  margin-bottom: 24px;
`

export const Image = styled.Image`
  flex: 1;
  min-height: 300px;
  height: auto;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const StatusView = styled.View<{ type: StatusTypes }>`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 10px;
  background-color: ${({ type }) =>
    type === 'Alive'
      ? COLORS.green
      : type === 'Dead'
      ? COLORS.red
      : COLORS.gray};
`

export const Status = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${COLORS.white};
  padding: 6px 11px;
`

export const CardContent = styled.View`
  flex: 1;
  padding: 10px;
`

export const LocationLabel = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: ${COLORS.dark};
`

export const Location = styled.Text`
  font-size: 20px;
  color: ${COLORS.dark};
`
