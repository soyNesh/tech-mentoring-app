import React from 'react'
import { strings } from 'app/utils/strings'
import { HeaderStyled, WikiStyled } from './Header.styles'

const Header = () => {
  return (
    <HeaderStyled>
      {strings.appTitle}
      <WikiStyled>{strings.wikiSpan}</WikiStyled>
    </HeaderStyled>
  )
}

export default Header
