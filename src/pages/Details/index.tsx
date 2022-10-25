import React, { useMemo } from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import DetailsTemplate, { DetailsTemplateProps } from '../../templates/Details'
import { selectors } from '../../redux/app/redux'

const DetailsPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  const planet = useSelector(selectors.planet(id))

  const templateProps: DetailsTemplateProps = useMemo(
    () => ({
      title: t('hello', { name: 'Name' }),
      planet: planet,
    }),
    [t, planet]
  )

  return <DetailsTemplate {...templateProps} />
}

export default DetailsPage
