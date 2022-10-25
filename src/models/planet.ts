/**
 * Based on https://api.le-systeme-solaire.net/ documentation
 * Warning about: "flattening" not referenced in the API
 */
import { Nullable } from '../types/nullable'

export type Planet = {
  id: string
  name: string
  englishName: string
  isPlanet: boolean
  moons: Nullable<PlanetMoon[]>
  semimajorAxis: number
  perihelion: number
  aphelion: number
  eccentricity: number
  inclination: number
  mass: {
    massValue: number
    massExponent: number
  }
  vol: {
    volValue: number
    volExponent: number
  }
  density: number
  gravity: number
  escape: number
  meanRadius: number
  equaRadius: number
  polarRadius: number
  flattening: number
  dimension: string
  sideralOrbit: number
  sideralRotation: number
  aroundPlanet: Nullable<PlanetAround>
  discoveredBy: string
  discoveryDate: string
  axialTilt: number
  avgTemp: number
  mainAnomaly: number
  argPeriapsis: number
  longAscNode: number
  bodyType: PlanetBodyType
  alternativeName: string
  rel: string
}

export type PlanetMoon = {
  moon: string
  rel: string
}

export type PlanetAround = {
  planet: string
  rel: string
}

export enum PlanetBodyType {
  MOON = 'Moon',
  STAR = 'Star',
  PLANET = 'Planet',
  DWARF_PLANET = 'Dwarf Planet',
  COMET = 'Comet',
  ASTEROID = 'Asteroid',
}
