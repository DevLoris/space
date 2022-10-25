import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { Helmet } from 'react-helmet-async'
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
      <Helmet title={t('planet_list.title')}>
        <meta name={'description'} content={t('planet_list.description')} />
        <meta name={'tags'} content={t('planet_list.tags')} />
      </Helmet>
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
