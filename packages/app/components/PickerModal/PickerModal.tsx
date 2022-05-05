import React, { useState, FC } from 'react'
import { Modal } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import useFetch from 'app/hooks/useFetch'
import { useStore } from 'app/provider/store'
import { ENDPOINTS } from 'app/utils/constants'
import { Categories } from 'app/models/Character.model'
import { IEpisodeProps } from 'app/models/Episode.model'
import { ILocationProps } from 'app/models/Location.model'
import { IPickerModalProps } from 'app/models/PickerModal.model'
import { strings } from 'app/utils/strings'
import { PickerModalStyled, PickerLabel } from './PickerModal.styles'

type IEpisodeFetch = {
  results: IEpisodeProps[]
  info: {
    count: number
  }
}

type ILocationFetch = {
  results: ILocationProps[]
  info: {
    count: number
  }
}

const PickerModal: FC<IPickerModalProps> = ({
  selectedEpisode = null,
  setSelectedEpisode = null,
  selectedLocation = null,
  setSelectedLocation = null,
}) => {
  const { updateItems, currentView } = useStore()
  const [episodesUrl] = useState(`${ENDPOINTS.episode}`)
  const [locationsUrl] = useState(`${ENDPOINTS.location}`)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: { info: { count: episodesCount = 0 } = {} } = {} } =
    useFetch<IEpisodeFetch>(episodesUrl)

  const { data: { info: { count: locationsCount = 0 } = {} } = {} } =
    useFetch<ILocationFetch>(locationsUrl)

  const selectedValues =
    currentView === Categories.episodes
      ? {
          pickerItemlabel: strings.pickEpisodeItemLabel,
          pickLabel: strings.pickEpisodeLabel,
          selectedValue: selectedEpisode,
          setSelectedValue: setSelectedEpisode,
          count: episodesCount,
        }
      : {
          pickerItemlabel: strings.pickLocationItemLabel,
          pickLabel: strings.pickLocationLabel,
          selectedValue: selectedLocation,
          setSelectedValue: setSelectedLocation,
          count: locationsCount,
        }

  return (
    <PickerModalStyled>
      <PickerLabel
        onPress={() => {
          setIsModalOpen(!isModalOpen)
        }}
      >
        {selectedValues.pickLabel}
      </PickerLabel>
      <Modal visible={isModalOpen}>
        <Picker
          selectedValue={selectedValues.selectedValue}
          onValueChange={(itemValue) => {
            selectedValues.setSelectedValue?.(itemValue || 1)
            setIsModalOpen(false)
          }}
        >
          {Array.from({ length: selectedValues.count }).map((item, index) => {
            const tmpIndex = index + 1

            return (
              <Picker.Item
                key={tmpIndex}
                label={`${selectedValues.pickerItemlabel}${tmpIndex}`}
                value={tmpIndex}
              />
            )
          })}
        </Picker>
      </Modal>
    </PickerModalStyled>
  )
}

export default PickerModal
