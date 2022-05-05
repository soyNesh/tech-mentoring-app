import React from 'react'
import { strings } from 'app/utils/strings'
import { CharacterTitleStyled } from './CharacterHeader.styles'
import { Search } from 'app/components/Search'

const EpisodeHeader = ({ setUrl, updateItems }) => {
  return (
    <>
      <CharacterTitleStyled>{strings.charactersTitle}</CharacterTitleStyled>
      <Search setUrl={setUrl} updateItems={updateItems} />
    </>
  )
}

export default EpisodeHeader
