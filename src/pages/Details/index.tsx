import React, { useMemo } from 'react'
import { RouteComponentProps, useParams, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'

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

  // Let redirect if planet doesn't exist
  if (!planet) {
    return <Redirect to="/" />
  }

  // Render and do some SEO
  return (
    <>
      <Helmet title={t('planet_details.title', { name: planet.name })}>
        <meta
          name={'description'}
          content={t('planet_details.description', {
            name: planet.name,
            distance: planet.discoveredBy,
          })}
        />
        <meta name={'tags'} content={t('planet_details.tags')} />
      </Helmet>
      <DetailsTemplate {...templateProps} />
    </>
  )
}

export default DetailsPage
