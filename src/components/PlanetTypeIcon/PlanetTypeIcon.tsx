import React, { FC } from 'react'
import { Tooltip } from '@material-ui/core'

import { Planet } from '../../models/planet'
import Icon from '../Icon'
import { planetToIconUtils } from '../../utils/PlanetToIconUtils'

interface PlanetTypeIconProps {
  planet?: Planet
}

const PlanetTypeIcon: FC<PlanetTypeIconProps> = ({ planet }) => {
  if (!planet) return <></>

  return (
    <Tooltip title={planet.bodyType}>
      <div>
        <Icon icon={planetToIconUtils(planet)} style={{ width: '3rem', lineHeight: 0 }} />
      </div>
    </Tooltip>
  )
}

export default PlanetTypeIcon
