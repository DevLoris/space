import styled from 'styled-components'

const CustomTitle = styled.h1.attrs(({ children }) => {
  return {
    'data-text': children,
  }
})`
  font-family: 'Poller One', serif;
  font-size: 3rem;
  position: relative;
  color: ${(props) => props.theme.palette.colors.pastelBlue};
  z-index: 1;
  &:after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    z-index: -1;
    top: 0;
    color: ${(props) => props.theme.palette.colors.pureBlack};
    -webkit-text-stroke: 2px black;
    text-shadow: ${(props) => props.theme.shadows[1]};
  }
`

export default CustomTitle
