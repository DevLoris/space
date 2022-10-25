import { createSelector, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import { THEMES } from '../../constants'
import { Planet } from '../../models/planet'

import { actionTypes } from './types'

type AppState = {
  isInit: boolean
  theme: string
  planets: Planet[]
}

//
// Initial state
//

const initialState: AppState = {
  isInit: false,
  theme: THEMES.DEFAULT,
  planets: [],
}

//
// Slice (Actions & Reducers)
//

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    init: () => undefined,
    setIsInit: (state, action: actionTypes.setIsInit) => {
      const { isInit } = action.payload
      state.isInit = isInit
    },
    setTheme: (state, { payload }: actionTypes.setTheme) => {
      const { theme } = payload
      state.theme = theme
    },
    setPlanets: (state, { payload }: actionTypes.setPlanets) => {
      const { planets } = payload
      state.planets = planets
    },
  },
})

export const { reducer, actions } = slice

//
// Selectors
//

const root = (state: RootState) => state[slice.name]
const isInit = (state: RootState) => root(state).isInit
const theme = (state: RootState) => root(state).theme
const planets = (state: RootState) => root(state).planets
const planet = (id: string) => {
  return createSelector<any, Planet[], Planet>(
    // @ts-ignore
    (state: RootState) => planets(state),
    (planets) => planets.find((item) => item.id == id)
  )
}
const planetInList = (id: string[]) => {
  return createSelector<any, Planet[], Planet[]>(
    // @ts-ignore
    (state: RootState) => planets(state),
    (planets) => {
      return planets.filter((item) => id.includes(item.name))
    }
  )
}

export const selectors = {
  isInit,
  theme,
  planets,
  planet,
  planetInList,
}
