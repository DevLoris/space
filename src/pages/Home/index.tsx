import React, { useMemo } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import HomeTemplate, { HomeTemplateProps } from '../../templates/Home'
import { selectors } from '../../redux/app/redux'

const DashboardPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  const planets = useSelector(selectors.planets)

  const templateProps: HomeTemplateProps = useMemo(
    () => ({
      title: t('hello', { name: 'Name' }),
      planets,
    }),
    [t, planets]
  )

  return <HomeTemplate {...templateProps} />
}

export default DashboardPage
