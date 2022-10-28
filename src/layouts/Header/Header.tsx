import React, { FC } from 'react'
import { Container } from '@material-ui/core'

import Logo from '../../components/Logo/Logo'

import { HeaderContainer } from './styled'

const Header: FC = () => (
  <HeaderContainer>
    <Container maxWidth="sm">
      <Logo />
    </Container>
  </HeaderContainer>
)

export default Header
