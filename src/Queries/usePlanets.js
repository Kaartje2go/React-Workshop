import { useQuery } from 'react-query';

function usePlanets() {
    // We'll get all the planets from the API here, using this URL: https://swapi.dev/api/planets
    
    /**
     * SWAPI does not provide resources with an 'id'.
     * We can make things a bit easier for ourselves by adding it to every resource with this function.
     * It uses the 'url' property of a resource to determine the 'id'.
     * @param {string} resourceUrl 
     * @returns {string}
     */
    const findIdByResourceUrl = (resourceUrl) => {
        return resourceUrl.match(/\d+/)[0];
    }

    const { data } = useQuery('planets', () => {
        return fetch('https://swapi.dev/api/planets').then(response => response.json());
    });

    return {
        planets: data?.results ? data.results.map((planet) => {
            planet.id = findIdByResourceUrl(planet.url)
            return planet;
        }) : []
    };
}

export default usePlanets;
