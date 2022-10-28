import styled from 'styled-components'

import getTheme from '../../theme'

const CustomTitle = styled('h1').attrs(({ children }) => {
  return {
    'data-text': children,
  }
})({
  fontFamily: 'Poller One',
  fontSize: '3rem',
  position: 'relative',
  color: getTheme().palette.colors.pastelBlue,
  zIndex: 1,
  '&:after': {
    content: 'attr(data-text)',
    position: 'absolute',
    left: 0,
    zIndex: -1,
    top: 0,
    color: getTheme().palette.colors.pureBlack,
    '-webkit-text-stroke': '2px black',
    textShadow: getTheme().shadows[1],
  },
})

export default CustomTitle
