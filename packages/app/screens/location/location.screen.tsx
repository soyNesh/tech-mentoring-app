import React, { useState, useEffect } from 'react'
import useFetch from 'app/hooks/useFetch'
import { ENDPOINTS } from 'app/utils/constants'
import { ILocationProps } from 'app/models/Location.model'
import { useStore } from 'app/provider/store'
import { LocationHeader } from 'app/components'
import { CardList } from 'app/components'
import { Loader } from 'app/components'

export function LocationScreen() {
  const [selectedLocation, setSelectedLocation] = useState(1)
  const { items, updateItems } = useStore()

  const [url, setUrl] = useState(`${ENDPOINTS.location}${selectedLocation}`)

  const {
    loading,
    data: { name = '', dimension = '', type = '', residents = [] } = {},
  } = useFetch<ILocationProps>(url)

  useEffect(() => {
    Promise.all(
      residents.map((url) => fetch(url).then((res) => res.json()))
    ).then((residents) => {
      if (residents.length) {
        updateItems([...items, ...residents])
      }
    })
  }, [residents])

  useEffect(() => {
    updateItems([])
    setUrl(`${ENDPOINTS.location}${selectedLocation}`)
  }, [selectedLocation])

  return (
    <CardList
      data={items}
      headerComponent={
        <LocationHeader
          name={name}
          dimension={dimension}
          type={type}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      }
      footerComponent={<Loader loading={loading} />}
    />
  )
}
