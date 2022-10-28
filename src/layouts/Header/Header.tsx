import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

import Logo from '../../components/Logo/Logo'

const HeaderContainer = styled.div`
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

const Header: FC = () => (
  <HeaderContainer>
    <Container maxWidth="sm">
      <Logo />
    </Container>
  </HeaderContainer>
)

export default Header
