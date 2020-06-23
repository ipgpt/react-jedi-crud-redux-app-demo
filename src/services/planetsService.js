import {nanoid} from "nanoid";

export const planetsColumns = [
    'name',
    'diameter',
    'terrain',
    'climate',
    'population',
]

export const getPlanets = async () => {
    const planetsResponse = await (await fetch('https://swapi.dev/api/planets')).json();

    return planetsResponse.results.map(({name, diameter, terrain, climate, population}) => ({
        name,
        diameter,
        terrain,
        climate,
        population,
        beloved: false,
        id: nanoid()
    }))
}
