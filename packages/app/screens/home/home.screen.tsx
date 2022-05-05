import React, { useEffect, useState, useCallback } from 'react'

import useFetch from 'app/hooks/useFetch'
import { ENDPOINTS } from 'app/utils/constants'
import { Categories, ICharacterProps } from 'app/models/Character.model'
import { IDataInfoProps } from 'app/models/Info.model'
import { CardList } from 'app/components/CardList'
import { CharacterHeader } from 'app/components/CharacterHeader'
import { Loader } from 'app/components/Loader'
import { useStore } from 'app/provider/store/store.provider'
import { EpisodeScreen } from 'app/screens/episode/episode.screen'
import { LocationScreen } from 'app/screens/location/location.screen'

type ICharacterFetch = {
  results: ICharacterProps[]
  info: IDataInfoProps
}

export function HomeScreen() {
  const { currentView, items, updateItems } = useStore()
  const [url, setUrl] = useState(ENDPOINTS.character)

  const { loading, data: { results = [], info: { next = '' } = {} } = {} } =
    useFetch<ICharacterFetch>(url)

  const data = [...items, ...results]

  const onEnd = useCallback(() => {
    updateItems(data)
    if (next) {
      setUrl(next)
    }
  }, [data, next])

  if (currentView === Categories.episodes) {
    return <EpisodeScreen />
  }

  if (currentView === Categories.locations) {
    return <LocationScreen />
  }

  return (
    <CardList
      data={data}
      headerComponent={
        <CharacterHeader setUrl={setUrl} updateItems={updateItems} />
      }
      footerComponent={<Loader loading={loading} />}
      initialNumToRender={20}
      onEndReached={onEnd}
    />
  )
}
