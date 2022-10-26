import React, { FC, useState } from 'react'
import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { router, routesPath } from '../../router'
import CustomButton from '../CustomButton/CustomButton'
import { Planet } from '../../models/planet'
import PlanetTypeIcon from '../PlanetTypeIcon/PlanetTypeIcon'

import { PlanetListProps } from './PlanetList.types'

const SearchPaper = styled(Paper)({
  marginBottom: '2rem',
})

// TODO : implement react-window to LazyLoad
const PlanetList: FC<PlanetListProps> = ({ planets }) => {
  const { t } = useTranslation()

  const [rows, setRows] = useState<Planet[]>(planets)

  // Filter for searching ; display only needed rows
  const doSearch = (searchedVal: string) => {
    const searchedTerm = searchedVal.toLowerCase()
    const filteredRows = planets.filter((row: Planet) => {
      return (
        row.name.toLowerCase().includes(searchedTerm) ||
        row.englishName.toLowerCase().includes(searchedTerm)
      )
    })
    setRows(filteredRows)
  }

  // Reset Search
  const clearSearch = () => {
    setRows(planets)
  }

  return (
    <>
      <SearchPaper>
        <SearchBar
          placeholder={t('components.planet_list.search_bar')}
          value={''}
          onChange={(searchVal) => doSearch(searchVal)}
          onCancelSearch={() => clearSearch()}
        />
      </SearchPaper>
      <Paper>
        <TableContainer style={{ height: 440 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={'4rem'}>{t('components.planet_list.cell_type')}</TableCell>
                <TableCell>{t('components.planet_list.cell_name')}</TableCell>
                <TableCell width={'50%'}>{t('components.planet_list.cell_action')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <PlanetListRow planet={row} key={row.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

const PlanetListRow: FC<{ planet: Planet }> = ({ planet }) => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>
        <PlanetTypeIcon planet={planet} />
      </TableCell>
      <TableCell component="th" scope="row">
        <strong>{planet.name}</strong>
        <br />
        <small>{planet.englishName}</small>
      </TableCell>
      <TableCell>
        <Link
          title={t('components.planet_list.row.button')}
          aria-label={t('components.planet_list.row.button')}
          href={router(routesPath.planet, { id: planet.id })}
        >
          <CustomButton>{t('components.planet_list.row.button')}</CustomButton>
        </Link>
      </TableCell>
    </TableRow>
  )
}

export default PlanetList
