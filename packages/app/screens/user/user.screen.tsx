import React from 'react'
import { createParam } from 'solito'
import { ICharacterProps } from 'app/models/Character.model'
import useFetch from 'app/hooks/useFetch'
import { ENDPOINTS } from 'app/utils/constants'
import { Loader } from 'app/components'
import {
  Wrapper,
  Title,
  Image,
  StatusView,
  Status,
  DetailsContent,
  DetailsLabel,
  Details,
} from './user.styles'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  const { data, loading } = useFetch<ICharacterProps>(ENDPOINTS.character + id)

  if (!data) {
    return <Loader loading={loading} />
  }

  const { name, status, species, gender, origin, location, image } = data

  return (
    <Wrapper>
      <Title>{name}</Title>
      <Image source={{ uri: image }} />
      <DetailsContent>
        <StatusView type={status}>
          <Status>{status}</Status>
        </StatusView>
        <DetailsLabel>
          Gender: <Details>{gender}</Details>
        </DetailsLabel>
        <DetailsLabel>
          Location: <Details>{location.name}</Details>
        </DetailsLabel>
        <DetailsLabel>
          Origin: <Details>{origin.name}</Details>
        </DetailsLabel>
        <DetailsLabel>
          Species: <Details>{species}</Details>
        </DetailsLabel>
      </DetailsContent>
    </Wrapper>
  )
}
