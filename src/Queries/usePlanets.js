import { useQuery } from 'react-query';

function usePlanets() {
    // We'll get all the planets from the API here, using this URL: https://swapi.dev/api/planets

    const { data } = useQuery('planets', () => {
        return fetch('https://swapi.dev/api/planets').then(response => response.json());
    });

    return {
        planets: data?.results ? data.results.map((planet) => {
            return planet;
        }) : []
    };
}

export default usePlanets;
