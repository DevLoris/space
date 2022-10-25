import React, { FC } from 'react'
import {
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'

import PlanetTypeIcon from '../PlanetTypeIcon/PlanetTypeIcon'
import { routesPath } from '../../router'

import { PlanetMinilistTypes } from './PlanetMinilist.types'

const PlanetMinilist: FC<PlanetMinilistTypes> = ({ planets, name }) => {
  if (planets.length == 0) return <></>

  return (
    <Card style={{ marginTop: '4rem' }}>
      <CardContent style={{ paddingBottom: '0' }}>
        <Typography variant={'h4'} component={'h2'}>
          {name} ({planets.length})
        </Typography>
        <List>
          {planets.map((planet, key) => (
            <ListItem key={key}>
              <ListItemIcon>
                <PlanetTypeIcon planet={planet} />
              </ListItemIcon>
              <Link
                title={'Voir le detail'}
                aria-label={'Voir le detail'}
                href={routesPath.planet.replace(':id', planet.id)}
              >
                <ListItemText primary={planet.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default PlanetMinilist
