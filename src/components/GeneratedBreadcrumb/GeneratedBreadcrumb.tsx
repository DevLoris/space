import React, { FC } from 'react'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'
import { BreadcrumbList } from 'schema-dts'
import { JsonLd } from 'react-schemaorg'
import styled from 'styled-components'

import getTheme from '../../theme'

interface GeneratedBreadcrumbProps {
  items: { name: string; url?: string }[]
}

const BreadcrumbHandler = styled('div')({
  padding: '1rem 2rem',
  background: getTheme().palette.background.paper,
  borderRadius: '0.5rem',
  boxShadow: getTheme().shadows[1],
  margin: '2rem 0 4rem 0',
})

const GeneratedBreadcrumb: FC<GeneratedBreadcrumbProps> = ({ items }) => (
  <>
    <BreadcrumbHandler>
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item, key) => {
          const color = key == items.length - 1 ? 'inherit' : 'textPrimary'
          return item.url ? (
            <Link key={key} underline="hover" color={color} href={item.url}>
              {item.name}
            </Link>
          ) : (
            <Typography key={key} color={color}>
              {item.name}
            </Typography>
          )
        })}
      </Breadcrumbs>
    </BreadcrumbHandler>
    <JsonLd<BreadcrumbList>
      item={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((v, k) => {
          return {
            '@type': 'ListItem',
            position: k + 1,
            item: {
              '@id': v.url ?? '',
              name: v.name,
            },
          }
        }),
      }}
    />
  </>
)

export default GeneratedBreadcrumb
