import React, { FC } from 'react'
import { Link, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'

import PlanetTypeIcon from '../PlanetTypeIcon/PlanetTypeIcon'
import { router, routesPath } from '../../router'

import { PlanetMinilistTypes } from './PlanetMinilist.types'
import { PlanetMinilistCard, PlanetMinilistCardContent } from './styled'

const PlanetMinilist: FC<PlanetMinilistTypes> = ({ planets, name }) => {
  if (planets.length == 0) return <></>

  return (
    <PlanetMinilistCard>
      <PlanetMinilistCardContent>
        <Typography variant={'h4'} component={'h2'}>
          {name} ({planets.length})
        </Typography>
        <List>
          {planets.map((planet, key) => (
            <ListItem key={key}>
              <ListItemIcon>
                <PlanetTypeIcon planet={planet} />
              </ListItemIcon>
              <Link href={router(routesPath.planet, { id: planet.id })}>
                <ListItemText primary={planet.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </PlanetMinilistCardContent>
    </PlanetMinilistCard>
  )
}

export default PlanetMinilist
