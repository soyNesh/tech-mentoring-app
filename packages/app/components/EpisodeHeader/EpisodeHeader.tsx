import React from 'react'
import { PickerModal } from 'app/components/PickerModal'
import { strings } from 'app/utils/strings'
import {
  EpisodeTitleStyled,
  EpisodeNameStyled,
  EpisodeLabelStyled,
} from './EpisodeHeader.styles'

const EpisodeHeader = ({
  name,
  air_date,
  selectedEpisode,
  setSelectedEpisode,
}) => {
  return (
    <>
      <EpisodeTitleStyled>
        {strings.episodeLabel}
        <EpisodeNameStyled>{name}</EpisodeNameStyled>
      </EpisodeTitleStyled>
      <EpisodeLabelStyled>
        {strings.airDateLabel}
        {air_date}
      </EpisodeLabelStyled>
      <PickerModal
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
    </>
  )
}

export default EpisodeHeader
