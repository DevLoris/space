import { styled } from '@material-ui/core'

import getTheme from '../../theme'

const CustomTitle = styled('h1')({
  fontFamily: 'Poller One',
  fontSize: '3rem',
  color: getTheme().palette.primary.main,
})

export default CustomTitle
