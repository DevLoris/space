import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const FooterContainer = styled.div`
  background: ${(props) => props.theme.palette.colors.pastelBlue};
  position: relative;
  margin-top: 6.4rem;
  padding: 2.4rem 0;
  &:after {
    content: '';
    position: absolute;
    height: 2.4rem;
    width: 100%;
    background: url(/static/assets/pattern.svg);
    top: 0;
    transform: translateY(-100%) rotate(180deg);
  }
`

const Footer: FC = () => (
  <FooterContainer>
    <Container maxWidth="sm">by Loris Pinna</Container>
  </FooterContainer>
)

export default Footer
