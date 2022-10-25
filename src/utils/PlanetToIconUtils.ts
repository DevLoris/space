import { Planet, PlanetBodyType } from '../models/planet'
import { Icons } from '../components/Icon/types'

export function planetToIconUtils(planet: Planet): Icons {
  switch (planet.bodyType) {
    case PlanetBodyType.ASTEROID:
      return Icons.asteroid
    case PlanetBodyType.COMET:
      return Icons.comet
    case PlanetBodyType.DWARF_PLANET:
      return Icons.dwarf_planet
    case PlanetBodyType.PLANET:
      return Icons.planet
    case PlanetBodyType.STAR:
      return Icons.star
    case PlanetBodyType.MOON:
      return Icons.moon
    default:
      return Icons.pending
  }
}
