import {nanoid} from "nanoid";

export const starshipsColumns = [
    'name',
    'model',
    'starship_class',
    'cost_in_credits',
    'passengers',
]

export const getStarships = async () => {
    const starshipsResponse = await (await fetch('https://swapi.dev/api/starships')).json();

    return starshipsResponse.results.map(({name, model, starship_class, cost_in_credits, passengers}) => ({
        name,
        model,
        starship_class,
        cost_in_credits,
        passengers,
        beloved: false,
        id: nanoid()
    }))
}
