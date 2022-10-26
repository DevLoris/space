import React, { FC } from 'react'
import { Card, CardContent, Container, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation()

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
        <PlanetMinilist planets={moons} name={t('components.details.moons.title')} />
        <PlanetMinilist
          planets={[aroundPlanet].filter((v) => v !== undefined)}
          name={t('components.details.near.title')}
        />
        <Card style={{ marginTop: '4rem' }}>
          <CardContent>
            <Typography variant={'h4'} component={'h2'}>
              {t('components.details.discover.title')}
            </Typography>
            <Typography component={'p'}>
              {t('components.details.discover.sentence', {
                name: planet.name,
                discovery_by: planet.discoveredBy != '' ? planet.discoveredBy : '???',
                discovery_date: planet.discoveryDate,
              })}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </SC.Content>
  )
}

export default DetailsTemplate
