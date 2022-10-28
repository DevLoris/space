import { Shadows } from '@material-ui/core/styles/shadows'

import { light } from './palette'

function createShadow() {
  return 'none'
  // `box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);`;
}

const shadows: Shadows = [
  'none',
  `0px 3px 0 ${light.colors.pureBlack}`,
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
  createShadow(),
]

export default shadows
