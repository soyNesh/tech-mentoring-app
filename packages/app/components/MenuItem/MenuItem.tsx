import React from 'react'
import { Pressable } from 'react-native'

import { useStore } from 'app/provider/store'
import { MenuItemStyled, MenuItemLabel } from './MenuItem.styles'

const MenuItem = ({ type }) => {
  const { toggleMenu, updateCurrentView, updateItems } = useStore()

  const label = type.charAt(0).toUpperCase() + type.slice(1)

  const clearItems = () => {
    updateCurrentView(type)
    updateItems([])
  }

  return (
    <Pressable onPress={clearItems}>
      <MenuItemStyled onTouchEnd={toggleMenu}>
        <MenuItemLabel>{label}</MenuItemLabel>
      </MenuItemStyled>
    </Pressable>
  )
}

export default MenuItem
