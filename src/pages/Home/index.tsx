import React, { useMemo } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { shallowEqual, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'

import HomeTemplate, { HomeTemplateProps } from '../../templates/Home'
import { selectors } from '../../redux/app/redux'

const HomePage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  // get all planets
  const planets = useSelector(selectors.planets, shallowEqual)

  const templateProps: HomeTemplateProps = useMemo(
    () => ({
      planets,
    }),
    [planets]
  )

  return (
    <>
      <Helmet title={t('planet_list.title')}>
        <meta name={'description'} content={t('planet_list.description')} />
        <meta name={'tags'} content={t('planet_list.tags')} />
      </Helmet>
      <HomeTemplate {...templateProps} />
    </>
  )
}

export default HomePage
