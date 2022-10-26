import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import PlanetList from '../../components/PlanetList/PlanetList'
import CustomTitle from '../../components/CustomTitle/CustomTitle'
import GeneratedBreadcrumb from '../../components/GeneratedBreadcrumb/GeneratedBreadcrumb'
import { Planet } from '../../models/planet'

import * as SC from './styled'

export type HomeTemplateProps = {
  className?: string
  planets: Planet[]
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const { planets } = props

  const { t } = useTranslation()

  return (
    <SC.Content>
      <Container maxWidth="sm">
        <GeneratedBreadcrumb
          items={[
            {
              name: t('planet_list.title'),
              url: '/',
            },
          ]}
        />
        <CustomTitle>{t('planet_list.title')}</CustomTitle>
        <PlanetList planets={planets} />
      </Container>
    </SC.Content>
  )
}

export default HomeTemplate
