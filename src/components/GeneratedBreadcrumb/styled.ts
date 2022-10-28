import styled from 'styled-components'

export const BreadcrumbHandler = styled.div`
  padding: 1rem 2rem;
  background: ${(props) => props.theme.palette.background.paper};
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadows[1]};
  margin: 2rem 0 4rem 0;
`
