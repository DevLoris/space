import { Button, styled } from '@material-ui/core'

import getTheme from '../../theme'

const CustomButton = styled(Button)({
  background: getTheme().palette.colors.pastelBlue,
  borderRadius: 3,
  color: 'black',
  boxShadow: getTheme().shadows[1],
  border: '1px solid black',
  height: 40,
  padding: '1rem',
  fontSize: '1.2rem',
  lineHeight: '1.5rem',
  textTransform: 'none',
  '&:hover': {
    background: getTheme().palette.colors.veryPastelBlue,
  },
})

export default CustomButton
