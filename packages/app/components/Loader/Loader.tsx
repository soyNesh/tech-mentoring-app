import React from 'react'
import { ActivityIndicator } from 'react-native'
import { LoaderStyled } from './Loader.styles'

const Loader = ({ loading }) => {
  return (
    loading && (
      <LoaderStyled>
        <ActivityIndicator />
      </LoaderStyled>
    )
  )
}

export default Loader
