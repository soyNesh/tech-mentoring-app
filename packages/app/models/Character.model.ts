import { StatusTypes } from 'app/components/Card/Card.styles'

export interface ICharacterProps {
  name: string
  image: string
  status: StatusTypes
  gender: string
  origin: {
    name: string
    url: string
  }
  species: string
  location: {
    name: string
    url: string
  }
  id: number
}

export enum Categories {
  characters = 'characters',
  episodes = 'episodes',
  locations = 'locations',
}
