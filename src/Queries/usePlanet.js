import { useQuery } from 'react-query';

function usePlanet() {
    /**
     * We'll get the information for a specific planet here.
     * For this workshop, we want to use the id of the planet and request the data from https://swapi.dev/api/planets/{{id}}
    */

    return {
        planet: undefined // Here we'll return the data
    }
}

export default usePlanet;
