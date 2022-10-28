import styled from 'styled-components'
import { Card, CardContent } from '@material-ui/core'

export const PlanetMinilistCard = styled(Card)`
  margin-top: 2.4rem;
`

export const PlanetMinilistCardContent = styled(CardContent)`
  &:last-child {
    padding-bottom: 0;
  }
`
