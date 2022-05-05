import React from 'react'
import { PickerModal } from 'app/components/PickerModal'
import { strings } from 'app/utils/strings'
import {
  LocationLabelStyled,
  LocationNameStyled,
  LocationTitleStyled,
} from './LocationHeader.styles'

const LocationHeader = ({
  name,
  dimension,
  type,
  selectedLocation,
  setSelectedLocation,
}) => {
  return (
    <>
      <LocationTitleStyled>
        {strings.locationLabel}
        <LocationNameStyled>{name}</LocationNameStyled>
      </LocationTitleStyled>
      <LocationLabelStyled>
        {strings.dimensionLabel}
        {dimension}
      </LocationLabelStyled>
      <LocationLabelStyled>
        {strings.typeLabel}
        {type}
      </LocationLabelStyled>
      <PickerModal
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </>
  )
}

export default LocationHeader
