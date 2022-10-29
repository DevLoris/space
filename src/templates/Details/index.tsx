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
import {
  DataGrid,
  DataGridItem,
  DataGridItemLabel,
  DataGridItemValue,
} from '../../pages/Details/styled'

import * as SC from './styled'

export type DetailsTemplateProps = {
  className?: string
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
              name: t('planet_list.title'),
              url: '/',
            },
            {
              name: planet.name,
            },
          ]}
        />
        <CustomTitle>{planet.name}</CustomTitle>
        <ThumbImage src={`/static/assets/images/moon.png`} title={`Image de ${planet.name}`} />
        <DataGrid>
          {planet.density != null && (
            <DataGridItem>
              <DataGridItemValue>
                {planet.density} g.cm
                <sup>3</sup>
              </DataGridItemValue>
              <DataGridItemLabel>{t('components.details.label.density')}</DataGridItemLabel>
            </DataGridItem>
          )}
          {planet.mass != null && (
            <DataGridItem>
              <DataGridItemValue>
                {planet.mass.massValue}
                <sup>{planet.mass.massExponent}</sup> kg
              </DataGridItemValue>
              <DataGridItemLabel>{t('components.details.label.mass')}</DataGridItemLabel>
            </DataGridItem>
          )}
          {planet.vol != null && (
            <DataGridItem>
              <DataGridItemValue>
                {planet.vol.volValue}
                <sup>{planet.vol.volExponent}</sup> km<sup>3</sup>
              </DataGridItemValue>
              <DataGridItemLabel>{t('components.details.label.volume')}</DataGridItemLabel>
            </DataGridItem>
          )}
          {planet.avgTemp != null && (
            <DataGridItem>
              <DataGridItemValue>{planet.avgTemp} °K</DataGridItemValue>
              <DataGridItemLabel>
                {t('components.details.label.average_temperature')}
              </DataGridItemLabel>
            </DataGridItem>
          )}
          {planet.inclination != null && (
            <DataGridItem>
              <DataGridItemValue>{planet.inclination} °</DataGridItemValue>
              <DataGridItemLabel>{t('components.details.label.inclination')}</DataGridItemLabel>
            </DataGridItem>
          )}
        </DataGrid>
        <PlanetMinilist planets={moons} name={t('components.details.moons.title')} />
        <PlanetMinilist
          planets={[aroundPlanet].filter((v) => v !== undefined)}
          name={t('components.details.near.title')}
        />
        {planet.discoveryDate && (
          <Card style={{ marginTop: '2.4rem' }}>
            <CardContent style={{ paddingBottom: '1.6rem' }}>
              <Typography variant={'h4'} component={'h2'}>
                {t('components.details.discover.title')}
              </Typography>
              <Typography component={'p'}>
                {t('components.details.discover.sentence', {
                  name: planet.name,
                  discovery_date: planet.discoveryDate,
                })}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </SC.Content>
  )
}

export default DetailsTemplate
