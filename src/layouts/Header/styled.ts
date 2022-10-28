import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.palette.colors.pastelBlue};
  position: relative;
  margin-bottom: 2.4rem;
  &:after {
    content: '';
    position: absolute;
    height: 2.4rem;
    width: 100%;
    background: url(/static/assets/pattern.svg);
    bottom: 0;
    transform: translateY(100%);
  }
`
