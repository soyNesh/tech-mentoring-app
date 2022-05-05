import React from 'react'
import { strings } from 'app/utils/strings'
import { CharacterTitleStyled } from './CharacterHeader.styles'
import { Search } from 'app/components/Search'

const EpisodeHeader = ({ setUrl }) => {
  return (
    <>
      <CharacterTitleStyled>{strings.charactersTitle}</CharacterTitleStyled>
      <Search setUrl={setUrl} />
    </>
  )
}

export default EpisodeHeader
