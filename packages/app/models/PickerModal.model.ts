import { Dispatch, SetStateAction } from 'react'

export interface IPickerModalProps {
  selectedEpisode?: number
  setSelectedEpisode?: Dispatch<SetStateAction<number>>
  selectedLocation?: number
  setSelectedLocation?: Dispatch<SetStateAction<number>>
}
