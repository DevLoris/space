import React, { FC } from 'react'
import { Container } from '@material-ui/core'

import { FooterContainer } from './styled'

const Footer: FC = () => (
  <FooterContainer>
    <Container maxWidth="sm">by Loris Pinna</Container>
  </FooterContainer>
)

export default Footer
