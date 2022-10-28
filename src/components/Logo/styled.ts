import styled from 'styled-components'

export const LogoHandler = styled.div`
  height: 6rem;
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 2rem -2rem;
    height: 8rem;
    justify-content: flex-start;
  }
`
