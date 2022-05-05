import React, { FC } from 'react'
import { Link } from 'solito/link'
import { strings } from 'app/utils/strings'
import { ICharacterProps } from 'app/models/Character.model'
import {
  Wrapper,
  Title,
  StatusView,
  Status,
  Image,
  CardContent,
  LocationLabel,
  Location,
} from './Card.styles'

const Card: FC<ICharacterProps> = ({ name, image, status, location, id }) => {
  return (
    <Wrapper>
      <Link href={`/user/${id}`}>
        <Image source={{ uri: image }} resizeMode="cover" />
        <StatusView type={status}>
          <Status>{status}</Status>
        </StatusView>
        <CardContent>
          <Title>{name}</Title>
          <LocationLabel>{strings.lastLocationLabel}</LocationLabel>
          <Location>{location.name}</Location>
        </CardContent>
      </Link>
    </Wrapper>
  )
}

export default Card
