import React from 'react'
import { FlatList } from 'react-native'
import { Card } from 'app/components/Card'

const renderItem = ({ item }) => <Card {...item} />

const CardList = ({ data, headerComponent, footerComponent, ...rest }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={headerComponent}
      ListFooterComponent={footerComponent}
      {...rest}
    />
  )
}

export default CardList
