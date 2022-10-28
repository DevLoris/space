import styled from 'styled-components'

export const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${(props) => props.theme.breakpoints.up('md')} {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 2rem;
  margin: 2rem 0;
`

export const DataGridItem = styled.div`
  background: ${(props) => props.theme.palette.colors.ultraPaselBlue};
  box-shadow: ${(props) => props.theme.shadows[1]};
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.6rem;
  border-radius: 0.8rem;
`

export const DataGridItemLabel = styled.span`
  font-size: 1.4rem;
  opacity: 0.5;
`

export const DataGridItemValue = styled.span`
  font-size: 2rem;
  font-weight: 600;
`
