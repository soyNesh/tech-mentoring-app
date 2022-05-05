import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useStore } from 'app/provider/store/store.provider'

const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useStore()

  const name = isMenuOpen ? 'close' : 'menu'

  return (
    <TouchableOpacity onPress={toggleMenu}>
      <Icon
        name={name}
        type="material"
        size={24}
        color="black"
        tvParallaxProperties={undefined}
      />
    </TouchableOpacity>
  )
}

export default MenuButton
