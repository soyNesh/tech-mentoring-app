import React, { useState, useEffect } from 'react'
import useFetch from 'app/hooks/useFetch'
import { ENDPOINTS } from 'app/utils/constants'
import { IEpisodeProps } from 'app/models/Episode.model'
import { ICharacterProps } from 'app/models/Character.model'
import { CardList } from 'app/components/CardList'
import { EpisodeHeader } from 'app/components/EpisodeHeader'
import { Loader } from 'app/components/Loader'
import { useStore } from 'app/provider/store'

export function EpisodeScreen() {
  const [selectedEpisode, setSelectedEpisode] = useState(1)

  const { items, updateItems } = useStore()

  const [url, setUrl] = useState(`${ENDPOINTS.episode}${selectedEpisode}`)

  const { loading, data: { name = '', air_date = '', characters = [] } = {} } =
    useFetch<IEpisodeProps>(url)

  useEffect(() => {
    Promise.all(
      characters.map((url) => fetch(url).then((res) => res.json()))
    ).then((characters: ICharacterProps[]) => {
      if (characters.length) {
        updateItems([...items, ...characters])
      }
    })
  }, [characters])

  useEffect(() => {
    updateItems([])
    setUrl(`${ENDPOINTS.episode}${selectedEpisode}`)
  }, [selectedEpisode])

  return (
    <CardList
      data={items}
      headerComponent={
        <EpisodeHeader
          name={name}
          air_date={air_date}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      }
      footerComponent={<Loader loading={loading} />}
    />
  )
}
