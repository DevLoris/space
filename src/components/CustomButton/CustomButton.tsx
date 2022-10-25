import { Button, styled } from '@material-ui/core'

import getTheme from '../../theme'

const CustomButton = styled(Button)({
  background: getTheme().palette.primary.main,
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: '1.2rem',
  textTransform: 'none',
  '&:hover': {
    background: getTheme().palette.primary.light,
  },
})

export default CustomButton
