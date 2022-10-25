// Do an API call for planet
const callPlanetApi = () => fetch('https://api.le-systeme-solaire.net/rest/bodies/')

// Load all planets and store them
export const loadPlanetsAndStore = () =>
  callPlanetApi()
    .then((v) => v.json())
    .then((v) => v.bodies)
