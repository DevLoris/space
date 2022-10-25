import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { Planet } from '../../models/planet'
import CustomTitle from '../../components/CustomTitle/CustomTitle'
import GeneratedBreadcrumb from '../../components/GeneratedBreadcrumb/GeneratedBreadcrumb'
import ThumbImage from '../../components/ThumbImage/ThumbImage'
import PlanetMinilist from '../../components/PlanetMinilist/PlanetMinilist'
import { selectors } from '../../redux/app/redux'

import * as SC from './styled'

export type DetailsTemplateProps = {
  className?: string
  title?: string
  planet: Planet
}

const DetailsTemplate: FC<DetailsTemplateProps> = (props) => {
  const { planet } = props

  const moons = useSelector(
    selectors.planetInList(planet.moons ? planet.moons.map((moon) => moon.moon) : [])
  )

  const aroundPlanet = useSelector(
    selectors.planet(planet.aroundPlanet ? planet.aroundPlanet.planet : '')
  )

  return (
    <SC.Content>
      <Container maxWidth="sm">
        <GeneratedBreadcrumb
          items={[
            {
              name: 'Toutes les planètes',
              url: '/',
            },
            {
              name: planet.name,
            },
          ]}
        />
        <CustomTitle>{planet.name}</CustomTitle>
        <ThumbImage src={`/static/assets/images/moon.png`} title={`Image de ${planet.name}`} />
        <PlanetMinilist planets={moons} name={'Lunes'} />
        <PlanetMinilist
          planets={[aroundPlanet].filter((v) => v !== undefined)}
          name={'Proche de'}
        />
      </Container>
    </SC.Content>
  )
}

export default DetailsTemplate
