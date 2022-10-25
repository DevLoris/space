import { PayloadAction } from '@reduxjs/toolkit'

import { Planet } from '../../../models/planet'

export type setIsInit = PayloadAction<{ isInit: true }>

export type setTheme = PayloadAction<{ theme: string }>

export type setPlanets = PayloadAction<{ planets: Planet[] }>
