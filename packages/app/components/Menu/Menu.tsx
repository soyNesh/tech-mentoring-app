import React from 'react'
import { MenuItem } from 'app/components/MenuItem'
import { useStore } from 'app/provider/store'
import { Categories } from 'app/models/Character.model'
import { MenuWrapper } from './Menu.styles'

const Menu = () => {
  const { isMenuOpen } = useStore()

  if (!isMenuOpen) {
    return null
  }

  return (
    <MenuWrapper>
      <MenuItem type={Categories.characters} />
      <MenuItem type={Categories.episodes} />
      <MenuItem type={Categories.locations} />
    </MenuWrapper>
  )
}

export default Menu
